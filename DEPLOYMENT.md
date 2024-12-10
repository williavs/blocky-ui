# Deployment Guide

## Building the Project

To build the project for deployment:

```bash
npm run build
```

This will create a `dist` directory with the production build.

## Deploying to Netlify

### Manual Deployment

1. Install the Netlify CLI globally (if not already installed):
```bash
npm install -g netlify-cli
```

2. Create and configure a new site:
```bash
netlify deploy
```
- Choose "Create & configure a new site"
- Select your team
- Enter a site name (or leave blank for random name)

3. Deploy to draft URL:
```bash
netlify deploy
```
This will deploy to a draft URL for preview.

4. Deploy to production:
```bash
netlify deploy --prod
```
This will deploy to your main site URL.

### Configuration

The `netlify.toml` file contains the deployment configuration:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18.17.0"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Important URLs

- Main site URL: https://blocky-ui.netlify.app
- Admin URL: https://app.netlify.com/sites/blocky-ui
- Build logs: https://app.netlify.com/sites/blocky-ui/deploys

### Continuous Deployment

To set up continuous deployment:

1. Connect your GitHub repository to Netlify through the Netlify dashboard
2. Enable automatic deploys from the main branch
3. Netlify will automatically deploy when changes are pushed to the main branch

### Local Development

For local development:
```bash
npm run dev
```

To preview the production build locally:
```bash
npm run preview
``` 