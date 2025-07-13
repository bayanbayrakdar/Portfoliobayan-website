# Deploy Portfolio to GitHub Pages

This guide explains how to deploy your portfolio website to GitHub Pages.

## Quick Setup

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The deployment will start automatically

## What happens during deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Install dependencies
- Build the static version of your portfolio
- Deploy it to GitHub Pages

## Key differences for GitHub Pages

Your portfolio automatically adapts for GitHub Pages:
- Uses static data instead of API calls
- Contact form opens email client instead of submitting to server
- All projects and information are embedded in the build

## Local testing

To test the GitHub Pages version locally:

```bash
# Build the static version
./build-github.sh

# Serve locally (install serve if needed)
npx serve dist
```

## Repository URL

Your portfolio will be available at:
`https://[your-username].github.io/[repository-name]/`

## Troubleshooting

### 404 Error
- Make sure GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in the "Actions" tab
- Verify the base URL in `vite.config.github.ts` matches your repository name

### Build Fails
- Check the "Actions" tab for error details
- Ensure all dependencies are properly listed in package.json
- Make sure the workflow has proper permissions

### Contact Form Not Working
- The contact form opens the default email client (this is expected for static sites)
- Users can still contact you via LinkedIn, GitHub, or direct email

## Manual Deployment

If automatic deployment doesn't work, you can build and deploy manually:

1. Build locally:
   ```bash
   ./build-github.sh
   ```

2. Push the `dist` folder to a `gh-pages` branch:
   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. Set GitHub Pages source to the `gh-pages` branch in repository settings