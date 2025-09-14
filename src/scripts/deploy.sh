#!/bin/bash

# EduGameHub Deployment Script
# Usage: ./scripts/deploy.sh [platform]
# Platforms: netlify, vercel, gh-pages, local

set -e

PLATFORM=${1:-"local"}
BUILD_DIR="dist"

echo "🚀 Starting deployment for platform: $PLATFORM"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf $BUILD_DIR

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests (if they exist)
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "🧪 Running tests..."
    npm test -- --watchAll=false
fi

# Build the application
echo "🏗️ Building application..."
npm run build

# Verify build
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build failed - $BUILD_DIR directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy based on platform
case $PLATFORM in
    "netlify")
        echo "🌐 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=$BUILD_DIR
        else
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            exit 1
        fi
        ;;
    
    "vercel")
        echo "🔺 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
            exit 1
        fi
        ;;
    
    "gh-pages")
        echo "📄 Deploying to GitHub Pages..."
        if command -v gh-pages &> /dev/null; then
            npx gh-pages -d $BUILD_DIR
        else
            echo "❌ gh-pages not found. Install with: npm install -g gh-pages"
            exit 1
        fi
        ;;
    
    "local")
        echo "🏠 Starting local preview server..."
        echo "📁 Serving from: $BUILD_DIR"
        echo "🌐 Access at: http://localhost:4173"
        npx serve $BUILD_DIR -p 4173
        ;;
    
    *)
        echo "❌ Unknown platform: $PLATFORM"
        echo "Available platforms: netlify, vercel, gh-pages, local"
        exit 1
        ;;
esac

echo "🎉 Deployment completed for $PLATFORM!"