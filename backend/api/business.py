from fastapi import APIRouter, HTTPException
from typing import List
from ..models.business import Business, BusinessCreate, BusinessUpdate
from ..services import supabase_service, business_discovery_service

router = APIRouter()

@router.get("/businesses/", response_model=List[Business])
def read_businesses():
    return supabase_service.get_businesses()

@router.get("/businesses/{business_id}", response_model=Business)
def read_business(business_id: int):
    db_business = supabase_service.get_business(business_id=business_id)
    if db_business is None:
        raise HTTPException(status_code=404, detail="Business not found")
    return db_business

@router.post("/businesses/", response_model=Business)
def create_business(business: BusinessCreate):
    return supabase_service.create_business(business=business)

@router.put("/businesses/{business_id}", response_model=Business)
def update_business(business_id: int, business: BusinessUpdate):
    return supabase_service.update_business(business_id=business_id, business=business)

@router.delete("/businesses/{business_id}")
def delete_business(business_id: int):
    supabase_service.delete_business(business_id=business_id)
    return {"ok": True}

@router.post("/businesses/search")
def search_businesses(location: str, radius: int, keyword: str):
    return business_discovery_service.search_businesses(location=location, radius=radius, keyword=keyword)
