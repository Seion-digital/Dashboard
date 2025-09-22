from fastapi import APIRouter, HTTPException, Depends
from typing import List

from ..models.analysis import Analysis, AnalysisCreate, AnalysisUpdate
from ..services import supabase_service, gemini_ai_service, website_analysis_service
from ..models.business import Business

router = APIRouter()

@router.get("/analysis/{business_id}", response_model=List[Analysis])
def read_analyses(business_id: int):
    return supabase_service.get_analyses(business_id=business_id)

@router.get("/analysis/{analysis_id}", response_model=Analysis)
def read_analysis(analysis_id: int):
    db_analysis = supabase_service.get_analysis(analysis_id=analysis_id)
    if db_analysis is None:
        raise HTTPException(status_code=404, detail="Analysis not found")
    return db_analysis

@router.post("/analysis/", response_model=Analysis)
def create_analysis(business_id: int):
    business = supabase_service.get_business(business_id)
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")

    website_content = ""
    if business.website:
        try:
            website_content = website_analysis_service.scrape_website(business.website)
        except Exception as e:
            print(f"Error scraping website: {e}")
            website_content = ""


    prompt = f"""
    Analyze the following business and provide marketing recommendations.
    Business Name: {business.name}
    Address: {business.address}
    Industry: {business.industry}
    Website Content: {website_content[:2000]}

    Provide 3-5 marketing recommendations. For each recommendation, include:
    - automation_type: A short category for the recommendation (e.g., "Social Media", "SEO", "Email Marketing").
    - description: A detailed description of the recommendation.
    - roi_estimate: A numerical estimate of the return on investment.
    - complexity: A rating of how complex the recommendation is to implement (e.g., "Low", "Medium", "High").
    - priority: A rating of the priority of the recommendation (e.g., "Low", "Medium", "High").

    Return the response as a JSON object with a single key "recommendations" which is a list of recommendation objects.
    """

    try:
        response_text = gemini_ai_service.get_gemini_response(prompt)
        # Clean the response to be valid JSON
        # The Gemini API might return the JSON wrapped in markdown-like backticks
        response_text = response_text.replace("```json", "").replace("```", "").strip()

        import json
        recommendations_data = json.loads(response_text)

        analysis_create = AnalysisCreate(
            business_id=business_id,
            recommendations=recommendations_data["recommendations"]
        )

        return supabase_service.create_analysis(analysis=analysis_create)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing AI analysis: {e}")

@router.put("/analysis/{analysis_id}", response_model=Analysis)
def update_analysis(analysis_id: int, analysis: AnalysisUpdate):
    return supabase_service.update_analysis(analysis_id=analysis_id, analysis=analysis)

@router.delete("/analysis/{analysis_id}")
def delete_analysis(analysis_id: int):
    supabase_service.delete_analysis(analysis_id=analysis_id)
    return {"ok": True}
