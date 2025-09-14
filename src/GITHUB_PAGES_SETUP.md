# GitHub Pages Setup Guide

This guide will help you deploy your EduGameHub application to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. Node.js 18+ installed locally (for manual deployment)

## Automatic Deployment (Recommended)

### Step 1: Repository Setup

1. Create a new repository on GitHub or use an existing one
2. Make sure your repository name matches the base path in `vite.config.ts`
3. Push your code to the `main` or `master` branch

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Save the settings

### Step 3: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your application when you push to main/master
- Deploy it to GitHub Pages
- Make it available at `https://yourusername.github.io/repository-name/`

## Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Deploy to GitHub Pages
npm run deploy:gh-pages
```

## Repository Name Configuration

### Important: Update Base Path

The repository is configured for:
- **Repository name**: `edugamehub1`
- **Base path**: `/edugamehub1/`

The configuration in `vite.config.ts` is:
```typescript
base: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES ? '/edugamehub1/' : './',
```

This matches your GitHub repository: `https://github.com/Terrificdatabytes/edugamehub1`

## Verification

After deployment, your app will be available at:
```
https://terrificdatabytes.github.io/edugamehub1/
```

This URL is specifically configured for:
- **Username**: Terrificdatabytes
- **Repository**: edugamehub1

## Troubleshooting

### Common Issues

1. **"Dependencies lock file is not found" Error**
   - Solution: Run `npm install` locally to generate `package-lock.json`
   - Commit the generated lock file to your repository
   - Alternative: The updated workflow uses `npm install` which works without lock files

2. **404 Error on Routes**
   - The `404.html` file handles client-side routing
   - Make sure it's deployed to the root of your site

3. **Assets Not Loading**
   - Verify the base path in `vite.config.ts` matches your repository name (`/edugamehub1/`)
   - Check that the `.nojekyll` file is present in the build output

4. **Build Failures**
   - Check the Actions tab: https://github.com/Terrificdatabytes/edugamehub1/actions
   - Ensure all dependencies are listed in `package.json`
   - Try running `npm run build:github` locally to test

5. **Wrong Base URL**
   - The base path is configured for `/edugamehub1/`
   - If you renamed your repository, update `vite.config.ts`

6. **GitHub Actions Not Running**
   - Ensure the workflow file is in `.github/workflows/deploy.yml`
   - Check repository permissions allow GitHub Actions
   - Verify you're pushing to `main` or `master` branch

### Manual Build Test

Test your build locally before deploying:

```bash
# Build for production
npm run build

# Serve locally to test
npm run serve:local
```

## Environment Variables

The deployment uses these environment variables:
- `NODE_ENV=production` - Enables production build optimizations
- `GITHUB_PAGES=true` - Configures the correct base path for GitHub Pages

## PWA and Service Worker

The app includes PWA capabilities that work on GitHub Pages:
- Offline caching through Service Worker
- App manifest for "Add to Home Screen"
- Mobile-optimized experience

## Security

GitHub Pages serves static files only, so:
- No server-side processing
- No database connections
- No API keys exposed (use environment variables for sensitive data)
- Client-side only authentication (demo purposes)

## Performance

The build is optimized for GitHub Pages:
- Asset minification
- Code splitting
- Gzip compression (handled by GitHub)
- CDN distribution (GitHub's global CDN)

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `/public` directory with your domain
2. Configure DNS records with your domain provider
3. Enable "Enforce HTTPS" in repository settings

Example `CNAME` file content:
```
your-custom-domain.com
```

## Maintenance

- GitHub Actions will automatically deploy when you push to main/master
- Monitor the Actions tab for deployment status
- Check GitHub Pages settings if issues arise
- Use the manual deployment command for quick fixes

---

🎉 **Your EduGameHub app is now ready for GitHub Pages!**