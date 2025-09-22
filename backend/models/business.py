from pydantic import BaseModel
from typing import Optional

class Business(BaseModel):
    id: Optional[int] = None
    name: str
    address: str
    industry: str
    rating: float
    phone: str
    website: str
    analysis_status: str = "pending"
class BusinessCreate(BaseModel):
    name: str
    address: str
    industry: str
    rating: float
    phone: str
    website: str

class BusinessUpdate(BaseModel):
    name: Optional[str] = None
    address: Optional[str] = None
    industry: Optional[str] = None
    rating: Optional[float] = None
    phone: Optional[str] = None
    website: Optional[str] = None
    analysis_status: Optional[str] = None
