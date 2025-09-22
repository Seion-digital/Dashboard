from pydantic import BaseModel
from typing import Optional, List

class Campaign(BaseModel):
    id: Optional[int] = None
    name: str
    business_ids: List[int]
    sent_count: int = 0
    open_rate: float = 0.0
    response_rate: float = 0.0
    status: str = "draft"

class CampaignCreate(BaseModel):
    name: str
    business_ids: List[int]

class CampaignUpdate(BaseModel):
    name: Optional[str] = None
    business_ids: Optional[List[int]] = None
    sent_count: Optional[int] = None
    open_rate: Optional[float] = None
    response_rate: Optional[float] = None
    status: Optional[str] = None
