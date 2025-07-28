# GitHub Actions Setup Guide

This repository is configured with automated deployment and content submodule management.

## 🚀 Deployment Workflow

The main deployment workflow (`deploy-astro.yml`) will:
1. **Build and deploy** your Astro site to GitHub Pages
2. **Handle submodules** automatically (including your content folder)
3. **Copy images** from `src/content/images/` to `public/content/`
4. **Trigger on**:
   - Pushes to `master` or `main` branch
   - Manual workflow dispatch
   - Repository dispatch events from content updates

## 🔄 Content Submodule Management

### Option 1: Scheduled Updates (Recommended)
The `update-submodule.yml` workflow runs every 30 minutes to:
1. Check for updates in your content submodule
2. Update the submodule reference if changes are found
3. Trigger a site rebuild automatically

### Option 2: Webhook-Triggered Updates
For immediate updates, place the `content-repo-workflow.yml` file in your **content repository** as `.github/workflows/notify-parent.yml`.

## 📋 Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages"
3. Set source to "GitHub Actions"

### 2. Set Up Content Repository (if using webhooks)
1. Create a Personal Access Token (PAT) with `repo` scope
2. Add it as a secret named `PARENT_REPO_TOKEN` in your content repository
3. Copy `content-repo-workflow.yml` to `.github/workflows/notify-parent.yml` in your content repo

### 3. Configure Submodules
If you haven't added your content folder as a submodule yet:

```bash
# Remove existing content folder
rm -rf src/content

# Add as submodule
git submodule add https://github.com/yourusername/your-content-repo.git src/content

# Commit the submodule
git add .gitmodules src/content
git commit -m "Add content folder as submodule"
```

### 4. Test the Setup
1. Push to your main branch - deployment should trigger
2. Make changes to your content repository - updates should be detected
3. Check GitHub Actions tab for workflow status

## 🔧 Local Development

Your local development remains unchanged:
- `npm run dev` - Start development server (copies images automatically)
- `npm run build` - Build for production (copies images automatically)
- `npm run copy-images` - Copy images only (Windows PowerShell)

## 📁 File Structure
```
.github/workflows/
├── deploy-astro.yml          # Main deployment workflow
├── update-submodule.yml      # Submodule update checker
└── timelineUpdateAction.yml  # Your existing timeline updater

scripts/
├── copy-images.ps1           # Windows PowerShell script
└── copy-images.sh            # Linux/macOS bash script

src/content/                  # Your content submodule
├── images/                   # Obsidian uploads go here
├── blog/
├── projects/
└── config.ts                 # Minimal re-export
```

## ⚡ Benefits

- ✅ **Automatic deployment** on content changes
- ✅ **Submodule management** with no manual intervention
- ✅ **Cross-platform** image copying (Windows dev, Linux CI)
- ✅ **Obsidian compatible** image workflow
- ✅ **GitHub Pages** optimized builds
