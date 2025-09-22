# Project Setup Guide

This guide will walk you through the steps to set up the project for local development.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20.11.1 or later)
- [Python](https://www.python.org/) (v3.8 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [pip](https://pip.pypa.io/en/stable/installation/) (usually comes with Python)

## 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

## 2. Frontend Setup

The frontend is a Next.js application.

1.  **Navigate to the project root directory.**

2.  **Install the necessary Node.js packages:**

    ```bash
    npm install
    ```

    If you encounter any issues, you can try a clean install using the provided script:

    ```bash
    ./clean-install.sh
    ```

## 3. Backend Setup

The backend is a Python application using FastAPI.

1.  **From the project root, create and activate a Python virtual environment:**

    On macOS and Linux:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

    On Windows:

    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```

2.  **Install the required Python packages:**

    ```bash
    pip install -r backend/requirements.txt
    ```

## 4. Environment Variables

The backend requires several environment variables to be set.

1.  **In the project root directory, create a `.env` file.**

2.  **Add the following environment variables to the `.env` file:**

    ```
    GOOGLE_MAPS_API_KEY="your_google_maps_api_key"
    GEMINI_API_KEY="your_gemini_api_key"
    SUPABASE_URL="your_supabase_url"
    SUPABASE_KEY="your_supabase_service_key"
    ```

    Replace `"your_..."` with your actual credentials.

## 5. Running the Application

-   **To run the frontend development server:**

    From the project root directory:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

-   **To run the backend server:**

    From the project root directory (with the virtual environment activated):

    ```bash
    uvicorn backend.app:app --reload
    ```

    The API will be available at `http://localhost:8000`.

You are now ready to start developing!
