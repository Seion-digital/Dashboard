from .gemini_ai_service import get_gemini_response

def generate_email(business_name: str, analysis_results: dict) -> str:
    """
    Generates a personalized email to a business based on the AI analysis results.
    """
    prompt = f"Write a personalized email to {business_name} based on the following analysis:\n{analysis_results}"
    email_body = get_gemini_response(prompt)
    return email_body

def send_email(to_address: str, subject: str, body: str):
    """
    Sends an email.
    NOTE: This is a placeholder and will not actually send an email.
    """
    print(f"Sending email to: {to_address}")
    print(f"Subject: {subject}")
    print(f"Body: {body}")
    return True
