from pydantic import BaseModel
from typing import Optional

class Recommendation(BaseModel):
    automation_type: str
    description: str
    roi_estimate: float
    complexity: str
    priority: str

class Analysis(BaseModel):
    id: Optional[int] = None
    business_id: int
    recommendations: list[Recommendation]

class AnalysisCreate(BaseModel):
    business_id: int
    recommendations: list[Recommendation]

class AnalysisUpdate(BaseModel):
    recommendations: Optional[list[Recommendation]] = None
