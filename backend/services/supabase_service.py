from supabase import create_client, Client
from ..config import SUPABASE_URL, SUPABASE_KEY
from ..models.business import Business, BusinessCreate, BusinessUpdate
from ..models.analysis import Analysis, AnalysisCreate, AnalysisUpdate
from ..models.campaign import Campaign, CampaignCreate, CampaignUpdate
from typing import List

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Business operations

def get_businesses() -> List[Business]:
    """
    Gets all businesses from the database.
    """
    response = supabase.table('businesses').select("*").execute()
    return [Business(**item) for item in response.data]

def get_business(business_id: int) -> Business:
    """
    Gets a business by ID.
    """
    response = supabase.table('businesses').select("*").eq('id', business_id).execute()
    if response.data:
        return Business(**response.data[0])
    return None

def create_business(business: BusinessCreate) -> Business:
    """
    Creates a new business in the database.
    """
    response = supabase.table('businesses').insert(business.dict()).execute()
    return Business(**response.data[0])

def update_business(business_id: int, business: BusinessUpdate) -> Business:
    """
    Updates a business in the database.
    """
    response = supabase.table('businesses').update(business.dict(exclude_unset=True)).eq('id', business_id).execute()
    return Business(**response.data[0])

def delete_business(business_id: int):
    """
    Deletes a business from the database.
    """
    supabase.table('businesses').delete().eq('id', business_id).execute()

# Analysis operations

def get_analyses(business_id: int) -> List[Analysis]:
    """
    Gets all analyses for a business.
    """
    response = supabase.table('analyses').select("*").eq('business_id', business_id).execute()
    return [Analysis(**item) for item in response.data]

def get_analysis(analysis_id: int) -> Analysis:
    """
    Gets an analysis by ID.
    """
    response = supabase.table('analyses').select("*").eq('id', analysis_id).execute()
    if response.data:
        return Analysis(**response.data[0])
    return None

def create_analysis(analysis: AnalysisCreate) -> Analysis:
    """
    Creates a new analysis in the database.
    """
    response = supabase.table('analyses').insert(analysis.dict()).execute()
    return Analysis(**response.data[0])

def update_analysis(analysis_id: int, analysis: AnalysisUpdate) -> Analysis:
    """
    Updates an analysis in the database.
    """
    response = supabase.table('analyses').update(analysis.dict(exclude_unset=True)).eq('id', analysis_id).execute()
    return Analysis(**response.data[0])

def delete_analysis(analysis_id: int):
    """
    Deletes an analysis from the database.
    """
    supabase.table('analyses').delete().eq('id', analysis_id).execute()

# Campaign operations

def get_campaigns() -> List[Campaign]:
    """
    Gets all campaigns from the database.
    """
    response = supabase.table('campaigns').select("*").execute()
    return [Campaign(**item) for item in response.data]

def get_campaign(campaign_id: int) -> Campaign:
    """
    Gets a campaign by ID.
    """
    response = supabase.table('campaigns').select("*").eq('id', campaign_id).execute()
    if response.data:
        return Campaign(**response.data[0])
    return None

def create_campaign(campaign: CampaignCreate) -> Campaign:
    """
    Creates a new campaign in the database.
    """
    response = supabase.table('campaigns').insert(campaign.dict()).execute()
    return Campaign(**response.data[0])

def update_campaign(campaign_id: int, campaign: CampaignUpdate) -> Campaign:
    """
    Updates a campaign in the database.
    """
    response = supabase.table('campaigns').update(campaign.dict(exclude_unset=True)).eq('id', campaign_id).execute()
    return Campaign(**response.data[0])

def delete_campaign(campaign_id: int):
    """
    Deletes a campaign from the database.
    """
    supabase.table('campaigns').delete().eq('id', campaign_id).execute()
