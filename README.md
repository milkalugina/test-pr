# Clicker App

A minimal responsive clicker web application built with Vite, React, and CSS Modules.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production Build

Build the app for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel via GitHub

This project uses Vite's default build output (`dist/`). Vercel auto-detects Vite projects, so **no `vercel.json` is required**.

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **Add New Project** and import your GitHub repository.
4. Accept the auto-detected settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

After the first deployment, Vercel will automatically redeploy when you push changes to the connected branch (usually `main`).

## App Behavior

- The counter starts at `0000` and increments by 1 on each button click.
- The counter wraps from `9999` back to `0000`.
- Reloading the page resets the counter to `0000`.
