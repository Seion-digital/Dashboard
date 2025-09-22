# SNR.AI Demo Dashboard

This project is a demonstration of the SNR.AI business automation ecosystem. It is a full-stack application with a Next.js frontend and a FastAPI backend.

## Architecture

-   **Frontend:** A [Next.js](https://nextjs.org/) application located in the project root. It provides a modern, interactive dashboard for visualizing business data and insights.
-   **Backend:** A [FastAPI](https://fastapi.tiangolo.com/) application located in the `backend/` directory. It serves data to the frontend and integrates with various external services.

## Getting Started

For a detailed guide on how to set up the project for local development, please refer to the [SETUP.md](SETUP.md) file.

## Running the Application

Once you have completed the setup instructions in [SETUP.md](SETUP.md), you can run the application with the following commands from the project root:

-   **Frontend:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:3000`.

-   **Backend:**
    (Make sure your Python virtual environment is activated)
    ```bash
    uvicorn backend.app:app --reload
    ```
    The backend API will be available at `http://localhost:8000`.

## Deployment

This project is configured for deployment on [Netlify](https://www.netlify.com/).

### Automatic Deployment

1.  Connect your GitHub repository to Netlify.
2.  Configure the build settings:
    -   **Build command:** `npm run netlify-build`
    -   **Publish directory:** `out`
    -   **Node version:** 20.11.1
    -   **Environment variable:** `NETLIFY_NEXT_PLUGIN_SKIP=true`

### Manual Deployment

1.  Install the Netlify CLI:
    ```bash
    npm install -g netlify-cli
    ```
2.  Login to your Netlify account:
    ```bash
    netlify login
    ```
3.  Build the application:
    ```bash
    npm run netlify-build
    ```
4.  Deploy to production:
    ```bash
    netlify deploy --prod --dir=out
    ```

---

*Proprietary Bootstrap SNR-Automations, all rights reserved*
