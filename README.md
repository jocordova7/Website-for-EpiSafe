# EpiSave - Advanced Seizure Detection for Android Wearables

EpiSave is a marketing website showcasing a seizure detection application for Android smartwatches.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

The website is configured for easy deployment to GitHub Pages using one of two methods:

### Method 1: Manual Deployment

Run the following command to build and deploy the site:

```bash
npm run deploy
```

This builds the app, creates necessary GitHub Pages files, and pushes to the `gh-pages` branch.

### Method 2: GitHub Actions (Recommended)

Simply push to the `main` branch, and the GitHub Actions workflow will automatically:
1. Build the site with proper base paths
2. Deploy to the `gh-pages` branch

## Project Structure

- `/app` - Next.js app directory
  - `/components` - UI components organized by function
  - `/marketing` - Marketing pages
- `/public` - Static assets
