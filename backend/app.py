from fastapi import FastAPI
from .api import business, analysis, campaigns

app = FastAPI()

app.include_router(business.router, prefix="/api")
app.include_router(analysis.router, prefix="/api")
app.include_router(campaigns.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Business Analyzer API"}
