import google.generativeai as genai
from ..config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

def get_gemini_response(prompt: str) -> str:
    """
    Generates a response from the Gemini API based on the given prompt.
    """
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)
    return response.text
