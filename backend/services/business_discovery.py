import googlemaps
from ..config import GOOGLE_MAPS_API_KEY

gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)

def search_businesses(location: str, radius: int, keyword: str):
    """
    Searches for businesses near a given location using the Google Places API.
    """
    places_result = gmaps.places_nearby(location=location, radius=radius, keyword=keyword, type='store')
    return places_result.get('results', [])
