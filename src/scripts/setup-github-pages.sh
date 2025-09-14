#!/bin/bash

# Setup script for GitHub Pages deployment
# This script helps prepare your repository for GitHub Pages deployment

echo "🚀 Setting up EduGameHub for GitHub Pages deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies and generate lock file
echo "📦 Installing dependencies..."
npm install

# Test build
echo "🔨 Testing production build..."
NODE_ENV=production GITHUB_PAGES=true npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Test local preview
echo "🔍 Testing local preview..."
npm run serve:local &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Kill the server
kill $SERVER_PID 2>/dev/null

echo ""
echo "✅ Setup complete! Your repository is ready for GitHub Pages."
echo ""
echo "Next steps:"
echo "1. Commit and push your changes to GitHub"
echo "2. Go to your repository settings: https://github.com/Terrificdatabytes/edugamehub1/settings/pages"
echo "3. Set Source to 'GitHub Actions'"
echo "4. Your app will be deployed to: https://terrificdatabytes.github.io/edugamehub1/"
echo ""
echo "Manual deployment command: npm run deploy:gh-pages"