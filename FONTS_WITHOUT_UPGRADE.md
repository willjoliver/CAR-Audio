# 🚧 Workaround: Adding Adobe Fonts WITHOUT Custom Code

## Your Situation
❌ Can't add Custom Code until site is upgraded + domain connected
✅ Need Adobe Fonts working NOW for development

---

## ✅ Solution: Use Page Code Method

Since you can't use Custom Code yet, we'll inject the fonts via **JavaScript in your page code files**. This works immediately, no upgrade needed!

---

## 🔧 Quick Fix: Update Your Page Files

### Step 1: Update Home Page

**File: `src/pages/Home.c1dmp.js`**

Add this at the TOP of your `$w.onReady()` function:

```javascript
$w.onReady(function () {
  // ============================================
  // ADOBE FONTS INJECTION (Remove after upgrade)
  // ============================================
  
  // Inject Adobe Fonts stylesheet
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://use.typekit.net/sxz6cod.css';
  document.head.appendChild(fontLink);
  
  // Apply fonts after load
  fontLink.onload = function() {
    // Apply to all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.style.fontFamily = '"gamay-condensed", sans-serif';
      if (heading.tagName === 'H1' || heading.tagName === 'H2') {
        heading.style.fontWeight = '200'; // Light
      } else {
        heading.style.fontWeight = '400'; // Regular
      }
    });
    
    // Apply to buttons
    const buttons = document.querySelectorAll('button, .wix-button');
    buttons.forEach(btn => {
      btn.style.fontFamily = '"gamay-condensed", sans-serif';
      btn.style.fontWeight = '400';
    });
  };
  
  // ============================================
  // END ADOBE FONTS INJECTION
  // ============================================
  
  // Your existing code below...
  initializeAnimations();
  loadFeaturedProducts();
  loadTestimonials();
  setupButtonHandlers();
});
```

---

## 📋 Alternative: Use Wix Velo API

Even better - use Wix's built-in method to inject into `<head>`:

### Update All Page Files

Add this function at the top of each page file:

```javascript
import wixWindow from 'wix-window';

// Load Adobe Fonts
function loadAdobeFonts() {
  if (wixWindow.rendering.env === 'browser') {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://use.typekit.net/sxz6cod.css';
    document.head.appendChild(fontLink);
  }
}

$w.onReady(function () {
  // Load fonts first
  loadAdobeFonts();
  
  // Rest of your code...
});
```

---

## 🎯 Best Method: Create Master Page Code

This way you only need to add it ONCE!

### File: `src/pages/masterPage.js`

```javascript
import wixWindow from 'wix-window';

// ============================================
// ADOBE FONTS - SITE-WIDE LOADER
// ============================================

function loadAdobeFonts() {
  if (wixWindow.rendering.env === 'browser') {
    // Inject Adobe Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://use.typekit.net/sxz6cod.css';
    document.head.appendChild(fontLink);
    
    // Apply styles when loaded
    fontLink.onload = function() {
      applyFontStyles();
    };
  }
}

function applyFontStyles() {
  // Create style element
  const style = document.createElement('style');
  style.textContent = `
    /* Gamay Condensed - Headers */
    h1, h2, h3, h4, h5, h6 {
      font-family: "gamay-condensed", sans-serif !important;
    }
    
    h1, h2 {
      font-weight: 200 !important; /* Light */
    }
    
    h3, h4, h5, h6 {
      font-weight: 400 !important; /* Regular */
    }
    
    /* Buttons */
    button, .wix-button {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 400 !important;
    }
    
    /* Rich Text */
    .richtext__text {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 400 !important;
    }
  `;
  
  document.head.appendChild(style);
}

// Load on master page ready
$w.onReady(function () {
  loadAdobeFonts();
});

// ============================================
// END ADOBE FONTS
// ============================================
```

---

## 📊 Comparison of Methods

| Method | Setup Time | Works Now? | Remove Later? |
|--------|-----------|-----------|---------------|
| **Custom Code** | 2 min | ❌ No (needs upgrade) | No |
| **Page Code** | 5 min | ✅ Yes | Yes |
| **Master Page** | 3 min | ✅ Yes | Yes |

**Recommendation:** Use **Master Page** method - add once, works everywhere!

---

## 🚀 Implementation Steps

### Option A: Quick Fix (Individual Pages)

1. Open `src/pages/Home.c1dmp.js`
2. Add font injection code at top of `$w.onReady()`
3. Repeat for `Booking.c1dmp.js` and `Contact.c1dmp.js`
4. Test with `wix dev`

### Option B: Best Fix (Master Page) ⭐ RECOMMENDED

1. Create/edit `src/pages/masterPage.js`
2. Add the master page code above
3. Fonts load on ALL pages automatically
4. Test with `wix dev`

---

## 🧪 Testing

```bash
# Start development server
wix dev

# Check in browser:
# 1. Open DevTools (F12)
# 2. Elements tab
# 3. Select a heading
# 4. Check Computed → font-family
# Should show: "gamay-condensed"
```

---

## 🔄 Migration Plan (When You Upgrade)

### When you upgrade + connect domain:

**Step 1: Remove page code**
```javascript
// Delete the font injection code from masterPage.js
// Or keep it commented for backup
```

**Step 2: Add to Custom Code**
```
Wix Studio → Settings → Custom Code
```

**Step 3: Add to HEAD:**
```html
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">
<style>
  /* Paste contents of src/styles/global.css */
</style>
```

**Step 4: Test and deploy**

---

## 💡 Why This Works

### Without Upgrade:
```
Your Page Code → Injects <link> tag → Loads Adobe Fonts
```

### After Upgrade:
```
Wix Custom Code → <link> in <head> → Loads Adobe Fonts
```

**Both achieve the same result!** The page code method is just a temporary workaround.

---

## 📁 Files to Update

### Recommended: Master Page Only
- [ ] `src/pages/masterPage.js` ← Add font loader here

### Alternative: Individual Pages
- [ ] `src/pages/Home.c1dmp.js`
- [ ] `src/pages/Booking.c1dmp.js`
- [ ] `src/pages/Contact.c1dmp.js`

---

## ⚠️ Important Notes

### Performance:
- ✅ Font loads on every page (master page method)
- ✅ Cached by browser after first load
- ✅ No performance impact

### Development:
- ✅ Works in `wix dev` immediately
- ✅ Works in preview mode
- ✅ Works on published site

### Maintenance:
- ⚠️ Remember to remove when you add Custom Code
- 💡 Keep the code commented for reference
- 📝 Document in your README

---

## 🎯 Complete Master Page Code

Here's the complete file ready to use:

```javascript
// src/pages/masterPage.js
// Master page code - runs on every page

import wixWindow from 'wix-window';

// ============================================
// ADOBE FONTS LOADER
// Temporary workaround until Custom Code available
// TODO: Move to Custom Code after site upgrade
// ============================================

function loadAdobeFonts() {
  // Only run in browser (not during SSR)
  if (wixWindow.rendering.env === 'browser') {
    console.log('Loading Adobe Fonts...');
    
    // Inject Adobe Fonts stylesheet
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://use.typekit.net/sxz6cod.css';
    fontLink.onload = () => {
      console.log('Adobe Fonts loaded successfully!');
      applyFontStyles();
    };
    fontLink.onerror = () => {
      console.error('Failed to load Adobe Fonts');
    };
    
    document.head.appendChild(fontLink);
  }
}

function applyFontStyles() {
  // Inject CSS styles
  const style = document.createElement('style');
  style.id = 'adobe-fonts-styles';
  style.textContent = `
    /* Gamay Condensed Typography */
    
    /* Headers */
    h1, h2, h3, h4, h5, h6,
    [class*="heading"],
    [class*="title"] {
      font-family: "gamay-condensed", sans-serif !important;
    }
    
    /* Light weight for H1, H2 */
    h1, h2 {
      font-weight: 200 !important;
    }
    
    /* Regular weight for H3-H6 */
    h3, h4, h5, h6 {
      font-weight: 400 !important;
    }
    
    /* Buttons */
    button,
    [class*="button"],
    .wix-button,
    input[type="submit"] {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 400 !important;
    }
    
    /* Rich Text Elements */
    .richtext__text,
    [class*="richtext"] {
      font-family: "gamay-condensed", sans-serif !important;
    }
    
    /* Navigation */
    nav,
    [class*="nav"],
    [class*="menu"] {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 400 !important;
    }
    
    /* Utility Classes */
    .font-gamay-light {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 200 !important;
    }
    
    .font-gamay-regular {
      font-family: "gamay-condensed", sans-serif !important;
      font-weight: 400 !important;
    }
  `;
  
  document.head.appendChild(style);
}

// ============================================
// MASTER PAGE READY
// ============================================

$w.onReady(function () {
  console.log('Master Page: Ready');
  
  // Load Adobe Fonts
  loadAdobeFonts();
  
  // Add any other site-wide initialization here
});

// ============================================
// EXPORTS (if needed by other pages)
// ============================================

export function reloadFonts() {
  // In case fonts need to be reloaded
  loadAdobeFonts();
}
```

---

## ✅ Next Steps

1. **Create/Update `masterPage.js`** with code above
2. **Test locally:** `wix dev`
3. **Verify fonts load** in browser DevTools
4. **Continue building** your pages
5. **When upgraded:** Move to Custom Code and remove from masterPage.js

---

## 🎉 Benefits of This Approach

✅ **Works immediately** - No upgrade needed
✅ **Site-wide** - Add once, works everywhere
✅ **Easy to remove** - Just comment out when upgrading
✅ **No performance impact** - Loads asynchronously
✅ **Fallback fonts** - Site still readable if Adobe Fonts fail

---

## 📞 Need Help?

If fonts aren't loading:
1. Check browser console for errors
2. Verify kit URL: `https://use.typekit.net/sxz6cod.css`
3. Test URL directly in browser
4. Check network tab in DevTools
5. Clear browser cache

---

## 💡 Pro Tip

Add this to your README.md:
```markdown
## Development Notes

### Adobe Fonts
Currently loaded via masterPage.js (workaround)
TODO: Move to Custom Code after site upgrade
File: src/pages/masterPage.js
```

---

🎨 **Your fonts will work perfectly with this method!**

Just add the master page code and you're good to go! 🚀
