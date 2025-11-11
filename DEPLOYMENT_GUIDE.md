# 🚀 Deployment Guide - Push to GitHub & Wix

## Quick Commands

### Push to GitHub (Right Now!)
```bash
# Add all files
git add .

# Commit with message
git commit -m "Complete CARAudio project setup with all integrations"

# Push to GitHub
git push origin main
```

### Push to Wix (After building pages)
```bash
# Preview changes locally first
wix preview

# Push to Wix when ready
wix publish
```

---

## 📦 Part 1: Push to GitHub

### Step 1: Add All Files
```bash
git add .
```
This stages all your new files (backend code, docs, frontend code, etc.)

### Step 2: Commit Changes
```bash
git commit -m "Add complete CARAudio functionality

- Backend integrations (ShopMonkey, CallRail, Email)
- Frontend pages (Home, Booking, Contact)
- Complete documentation (8 guides)
- CMS schemas and configurations
- Adobe Fonts integration (Gamay Condensed)
- Custom tracking code snippets"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

### ✅ Verify on GitHub
Go to: `https://github.com/willjoliver/CAR-Audio`
- You should see all your files
- Check the latest commit message
- Verify documentation files are there

---

## 🎨 Part 2: Push to Wix

### Important: Two-Way Sync!
Wix Studio has **automatic Git sync** enabled. This means:

✅ **Code → GitHub → Wix** (what you just did)
✅ **Wix → GitHub** (when you edit in Wix Studio)

### How Wix Sync Works:

#### Method 1: Wix Studio Auto-Sync (Recommended)
When you push to GitHub, Wix Studio automatically detects changes!

1. **Push to GitHub** (done above)
2. **Open Wix Studio** (https://manage.wix.com)
3. **Open your site** in the editor
4. **Look for notification**: "Updates from Git available"
5. **Click "Pull Changes"** to sync from GitHub
6. Done! Your code is now in Wix

#### Method 2: Wix CLI (For local development)
```bash
# Start local development server
wix dev

# This opens Wix Editor with your local code
# Make changes in the editor
# They automatically sync to your local files
```

#### Method 3: Direct Publish (When ready to go live)
```bash
# Preview your changes first
wix preview

# Publish to production when ready
wix publish
```

---

## 🔄 Complete Workflow

### Daily Development Flow:

```bash
# MORNING: Start work
cd /Users/jordanoliver/Documents/CAR-Audio
wix dev  # Opens Wix Editor

# DURING DAY: Make changes in Wix Studio
# - Build page layouts
# - Connect CMS
# - Add content
# (Changes auto-save to local files)

# END OF DAY: Push to GitHub
git add .
git commit -m "Day 1 progress: Homepage layout complete"
git push origin main

# REPEAT for 3 days
```

### When Ready to Launch:
```bash
# Final commit
git add .
git commit -m "Ready for production launch"
git push origin main

# Publish to live site
wix publish
```

---

## 📝 Git Best Practices

### Commit Messages:
```bash
# Good commits:
git commit -m "Add ShopMonkey booking integration"
git commit -m "Update homepage hero section"
git commit -m "Fix mobile responsive layout"

# Avoid:
git commit -m "changes"
git commit -m "update"
```

### Commit Often:
```bash
# After completing each feature:
git add .
git commit -m "Add contact form with CallRail tracking"
git push origin main

# After each major change:
git add src/pages/Home.c1dmp.js
git commit -m "Implement product gallery animations"
git push origin main
```

---

## 🎯 What Gets Pushed Where?

### ✅ Push to GitHub (All Files):
- ✅ **Backend code** (`src/backend/*.jsw`)
- ✅ **Frontend code** (`src/pages/*.js`)
- ✅ **Styles** (`src/styles/*.css`)
- ✅ **Documentation** (`*.md`)
- ✅ **Config files** (`*.json`)
- ✅ **Package info** (`package.json`)

### ⚠️ NOT Pushed to GitHub:
- ❌ **API Keys** (stored in Wix Secrets Manager)
- ❌ **CMS data** (stored in Wix database)
- ❌ **Page layouts** (stored in Wix visual editor)
- ❌ **Uploaded images** (stored in Wix Media Manager)
- ❌ **Site settings** (stored in Wix)

### 🎨 Push to Wix (Automatic via Git Sync):
When you push to GitHub, Wix Studio pulls:
- ✅ **All code files** (backend, frontend)
- ✅ **Styles** (CSS files)
- ✅ **Config** (permissions, settings)

You manually add in Wix Studio:
- ✅ **Page layouts** (visual design)
- ✅ **CMS content** (products, services)
- ✅ **Media** (images, videos)
- ✅ **Secrets** (API keys)

---

## 🔧 Troubleshooting

### "Git push rejected"
```bash
# Pull latest changes first
git pull origin main

# Then push
git push origin main
```

### "Merge conflicts"
```bash
# Accept incoming changes from Wix
git checkout --theirs <file>

# Or accept your local changes
git checkout --ours <file>

# Then commit
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### "Wix not syncing"
1. Check Wix Studio → Settings → Git Integration
2. Verify repository connection
3. Click "Pull Changes" manually
4. Check for error messages

### "Changes not showing in Wix"
1. Push to GitHub first
2. Open Wix Studio
3. Look for "Updates available" notification
4. Click "Pull Changes"
5. Refresh editor

---

## 📊 Deployment Checklist

### ✅ Before First Push to GitHub:
- [x] All code files created
- [x] Documentation complete
- [x] No sensitive data (API keys) in code
- [ ] README.md updated (optional)
- [ ] .gitignore configured (optional)

### ✅ Before Wix Publish:
- [ ] Test all forms locally
- [ ] Verify API integrations work
- [ ] Check mobile responsive
- [ ] Add all CMS content
- [ ] Upload all images
- [ ] Configure Secrets Manager
- [ ] Test on staging URL
- [ ] Run final QA checklist

### ✅ After Going Live:
- [ ] Verify site loads
- [ ] Test booking form
- [ ] Test contact form
- [ ] Check CallRail tracking
- [ ] Verify ShopMonkey orders
- [ ] Test on multiple devices
- [ ] Monitor for errors

---

## 🚨 Important Notes

### Code vs Content:
- **Code** (backend, frontend) → GitHub → Wix
- **Content** (pages, CMS, media) → Wix only
- **Secrets** (API keys) → Wix Secrets Manager only

### Two Development Environments:
1. **Local** (`wix dev`) → For testing code
2. **Wix Studio** → For building pages

### Publish Workflow:
```bash
Local Development (wix dev)
    ↓
Push to GitHub (git push)
    ↓
Wix Studio pulls changes
    ↓
Build pages in Wix Studio
    ↓
Test on staging URL
    ↓
Publish to production (wix publish)
```

---

## 🎯 Quick Reference

### Push to GitHub:
```bash
git add .
git commit -m "Your message"
git push origin main
```

### Sync with Wix:
```bash
# Option 1: Let Wix auto-sync from GitHub
# (Open Wix Studio, click "Pull Changes")

# Option 2: Use Wix CLI
wix dev     # Local development
wix preview # Preview changes
wix publish # Publish to production
```

### Check Status:
```bash
git status           # See what changed
git log --oneline    # See commit history
wix status          # Check Wix connection
```

---

## 🚀 Ready to Push?

### Right Now - Push to GitHub:
```bash
cd /Users/jordanoliver/Documents/CAR-Audio
git add .
git commit -m "Complete CARAudio project setup with all integrations"
git push origin main
```

### Then - Open Wix Studio:
1. Go to https://manage.wix.com
2. Open your CARAudio site
3. Click "Pull Changes" if prompted
4. Start building pages!

---

## 💡 Pro Tips

### Commit Early, Commit Often:
- After each feature
- Before taking a break
- At end of each day
- Before major changes

### Use Branches (Optional):
```bash
# Create feature branch
git checkout -b feature/booking-improvements

# Make changes, commit
git add .
git commit -m "Improve booking validation"

# Merge to main when ready
git checkout main
git merge feature/booking-improvements
git push origin main
```

### Keep GitHub & Wix Synced:
- Push to GitHub daily
- Pull changes in Wix Studio
- Test after each sync
- Don't edit same files in both places simultaneously

---

## ✅ You're Ready!

Your code is saved locally. Now push it to GitHub and start building in Wix Studio!

**Next command:**
```bash
git add . && git commit -m "Complete project setup" && git push origin main
```

🚀 Let's deploy!
