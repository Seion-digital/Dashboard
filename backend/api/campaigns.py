from fastapi import APIRouter, HTTPException, Depends
from typing import List

from ..models.campaign import Campaign, CampaignCreate, CampaignUpdate
from ..services import supabase_service, email_service, gemini_ai_service
from ..models.business import Business

router = APIRouter()

@router.get("/campaigns/", response_model=List[Campaign])
def read_campaigns():
    return supabase_service.get_campaigns()

@router.get("/campaigns/{campaign_id}", response_model=Campaign)
def read_campaign(campaign_id: int):
    db_campaign = supabase_service.get_campaign(campaign_id=campaign_id)
    if db_campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")
    return db_campaign

@router.post("/campaigns/", response_model=Campaign)
def create_campaign(campaign: CampaignCreate):
    return supabase_service.create_campaign(campaign=campaign)

@router.put("/campaigns/{campaign_id}", response_model=Campaign)
def update_campaign(campaign_id: int, campaign: CampaignUpdate):
    return supabase_service.update_campaign(campaign_id=campaign_id, campaign=campaign)

@router.delete("/campaigns/{campaign_id}")
def delete_campaign(campaign_id: int):
    supabase_service.delete_campaign(campaign_id=campaign_id)
    return {"ok": True}

@router.post("/campaigns/{campaign_id}/generate-emails")
def generate_emails_for_campaign(campaign_id: int):
    campaign = supabase_service.get_campaign(campaign_id)
    if not campaign:
        raise HTTPException(status_code=404, detail="Campaign not found")

    for business_id in campaign.business_ids:
        business = supabase_service.get_business(business_id)
        if business:
            analysis = supabase_service.get_analyses(business_id)
            if analysis:
                email_body = email_service.generate_email(business.name, analysis[0].dict())
                # In a real application, you would send the email here.
                # For this example, we'll just print it.
                print(f"Generated email for {business.name}:\n{email_body}\n")

    return {"message": "Emails generated successfully"}
