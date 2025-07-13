#!/bin/bash

# Build script for GitHub Pages deployment
echo "Building portfolio for GitHub Pages..."

# Set environment variable
export VITE_GITHUB_PAGES=true

# Build using the GitHub Pages config
npx vite build --config vite.config.github.ts

echo "Build complete! Check the 'dist' folder for the built files."
echo "You can test locally by running: npx serve dist"