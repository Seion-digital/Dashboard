from playwright.sync_api import sync_playwright

def scrape_website(url: str) -> str:
    """
    Scrapes the text content of a website using Playwright.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(url)
        content = page.inner_text('body')
        browser.close()
        return content
