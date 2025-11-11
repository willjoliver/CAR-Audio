# 🎨 Adobe Fonts Explained - How It Works

## What the Forum Discussion Means for You

### 🚨 The Key Issue: Licensing

**What you CANNOT do:**
❌ Download Adobe Font files (.otf, .ttf) and upload them to Wix
❌ Self-host Adobe Fonts on Wix servers
❌ Use "Upload Font" button in Wix for Adobe Fonts

**Why?** Adobe's license prohibits direct file uploads by web hosts. It's illegal.

**What you CAN do:**
✅ Use Adobe Fonts via CSS link (what we're doing!)
✅ Load fonts from Adobe's servers (typekit.net)
✅ Apply fonts using code

---

## 🔧 How Your Setup Works (The Legal Way)

### Step 1: Adobe Hosts the Fonts
```
Your Adobe Account → Creates Font Kit → Adobe's Servers Host Files
```
Your kit ID: `sxz6cod`
Your kit URL: `https://use.typekit.net/sxz6cod.css`

### Step 2: You Link to Adobe's Servers
```html
<!-- In Wix Custom Code (Head section) -->
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">
```

**What happens:**
- Browser loads your website
- Browser sees the link to Adobe's server
- Browser downloads font from Adobe (not Wix)
- Font is cached in visitor's browser
- **Wix never hosts the font files!** ✅ Legal!

### Step 3: You Apply Fonts via CSS
```css
/* In global.css or Custom CSS */
body {
  font-family: "gamay-condensed", sans-serif;
}
```

---

## 📝 Your Specific Implementation

### What We Created for You:

**File: `src/styles/global.css`**
```css
/* Step 1: Import from Adobe's servers */
@import url("https://use.typekit.net/sxz6cod.css");

/* Step 2: Apply to specific elements */
.richtext__text {
  font-family: "gamay-condensed", sans-serif !important;
  font-weight: 400 !important;
}

/* Step 3: Override default Wix styles */
h1, h2, h3, h4, h5, h6 {
  font-family: "gamay-condensed", sans-serif !important;
}
```

**Why this works:**
1. ✅ Font loaded from Adobe's servers (legal)
2. ✅ Applied via CSS (not uploaded files)
3. ✅ Respects Adobe's license terms
4. ✅ Works with Wix's system

---

## 🤔 Addressing Forum Concerns

### Concern #1: "Can't use in dropdown menu"
**Forum says:** Adobe Fonts won't appear in Wix's font dropdown

**Reality:** True! Adobe Fonts loaded via CSS won't show in the visual editor's font picker.

**Solution:** You have 3 options:

#### Option A: Use CSS (What We Did)
```css
/* Apply globally */
body { font-family: "gamay-condensed", sans-serif; }
```
- ❌ Won't see in editor dropdown
- ✅ Will work on published site
- ✅ Most control

#### Option B: Use JavaScript in Page Code
```javascript
// In Home.c1dmp.js
$w.onReady(function () {
  $w("#myText").style.fontFamily = "gamay-condensed, sans-serif";
});
```
- ❌ Won't see in editor dropdown
- ✅ Will work on published site
- ✅ Element-specific control

#### Option C: Use Custom Code + Selectors
```html
<style>
  /* Target specific Wix elements */
  [data-testid="richTextElement"] {
    font-family: "gamay-condensed", sans-serif !important;
  }
</style>
```
- ❌ Won't see in editor dropdown
- ✅ Will work on published site
- ✅ Can target any element

### Concern #2: "Applies to entire website"
**Forum says:** CSS font applies everywhere, can't be selective

**Reality:** You CAN be selective! Here's how:

#### Selective Application Examples:

**Only Headers:**
```css
h1, h2, h3 {
  font-family: "gamay-condensed", sans-serif;
}
```

**Only Hero Section:**
```css
#heroTitle, #heroSubtitle {
  font-family: "gamay-condensed", sans-serif;
}
```

**Only Specific Classes:**
```css
.brand-text {
  font-family: "gamay-condensed", sans-serif;
}

/* Keep body as default */
body, p {
  font-family: Arial, sans-serif; /* Normal font */
}
```

**Only Buttons:**
```css
button, .button-class {
  font-family: "gamay-condensed", sans-serif;
}
```

### Concern #3: "Too complicated for non-coders"
**Forum says:** This is hard without code knowledge

**For you:** We've done the hard part! You just need to:
1. Copy CSS code
2. Paste in Wix Custom Code
3. Done!

---

## 🎯 How to Use YOUR Fonts Selectively

### Your Fonts Available:
- **Gamay Condensed Light** (weight: 200)
- **Gamay Condensed Regular** (weight: 400)

### Pre-Made CSS Classes in global.css:

```css
/* Use Light weight */
.font-gamay-light {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 200;
}

/* Use Regular weight */
.font-gamay-regular {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 400;
}
```

### How to Apply in Wix Studio:

#### Method 1: Add Class to Element
1. Select text element in Wix Studio
2. Click "Advanced" in right panel
3. Add class: `font-gamay-light` or `font-gamay-regular`
4. Done! (Will only show on published site)

#### Method 2: Use JavaScript
```javascript
// In your page code
$w("#heroTitle").style.fontFamily = "gamay-condensed, sans-serif";
$w("#heroTitle").style.fontWeight = "200"; // Light
```

#### Method 3: Target by ID in CSS
```css
/* Add to global.css */
#heroTitle {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 200; /* Light */
}

#heroSubtitle {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 400; /* Regular */
}

/* Keep everything else normal */
#mainContent p {
  font-family: Arial, sans-serif; /* Not Adobe Font */
}
```

---

## 🔍 Visual Example: What Happens

### In Wix Studio Editor:
```
┌─────────────────────────┐
│  Hero Title             │ ← Shows default font
│  (You see: Arial)       │
└─────────────────────────┘
```

### On Published Site:
```
┌─────────────────────────┐
│  Hero Title             │ ← Shows Adobe Font!
│  (Visitor sees: Gamay)  │
└─────────────────────────┘
```

### Why?
- Editor doesn't load Adobe Fonts (for speed)
- Published site DOES load Adobe Fonts
- **This is normal and expected!**

---

## ✅ Your Implementation Checklist

### Setup (One Time):
- [x] Created global.css with Adobe Fonts
- [x] Added @import from typekit.net
- [x] Created utility classes
- [ ] **TODO: Add CSS to Wix Custom Code**

### Where to Add the CSS:

**Option 1: Custom Code (Recommended)**
1. Wix Studio → Settings → Custom Code
2. Click "+ Add Custom Code"
3. Paste this in HEAD section:

```html
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">
<style>
  /* Copy contents of src/styles/global.css here */
</style>
```

**Option 2: Site Design CSS**
1. Wix Studio → Design → Site Styles → CSS
2. Paste contents of `src/styles/global.css`

### Testing:
```bash
# Test locally first
wix dev

# Then preview online
wix preview

# Check in browser DevTools:
# Elements → Computed → font-family
# Should show "gamay-condensed"
```

---

## 🎨 Design Recommendations

### Use Gamay Condensed For:
✅ **Headings** (H1, H2, H3) - Bold, condensed style
✅ **Hero text** - Eye-catching headlines
✅ **Buttons** - Strong call-to-action
✅ **Navigation** - Clean, modern
✅ **Pricing** - Professional look

### Keep Default Fonts For:
✅ **Body text** - Easier to read long paragraphs
✅ **Forms** - Better usability
✅ **Small text** - Better legibility

### Example Site Structure:
```css
/* Headers - Adobe Font */
h1, h2, h3 {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 200; /* Light */
}

/* Body - Default Font */
p, span, div {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* Buttons - Adobe Font */
button, .cta {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 400; /* Regular */
}
```

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T:
1. **Don't upload Adobe Font files directly**
   - Violates license
   - Could get DMCA notice

2. **Don't expect to see fonts in editor**
   - They only show on published site
   - Use Preview mode to test

3. **Don't apply to tiny text**
   - Condensed fonts hard to read at small sizes
   - Use for 16px+ text

4. **Don't forget fallback fonts**
   ```css
   /* Bad */
   font-family: "gamay-condensed";
   
   /* Good */
   font-family: "gamay-condensed", sans-serif;
   ```

### ✅ DO:
1. **Use CSS link method** (what we're doing)
2. **Test on published site**, not just editor
3. **Use selectively** for impact
4. **Include fallback fonts**

---

## 🎯 Quick Start: Add Your Fonts Now

### Copy This Code:
```html
<!-- Go to: Wix Studio → Settings → Custom Code → Add Custom Code -->
<!-- Place: Head -->
<!-- Load on: All pages -->

<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">

<style>
  /* Apply Gamay Condensed to headers */
  h1, h2, h3, h4, h5, h6 {
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
  
  /* Apply to buttons */
  button, .wix-button {
    font-family: "gamay-condensed", sans-serif !important;
    font-weight: 400 !important;
  }
</style>
```

### Then:
1. Save
2. Run `wix preview` to test
3. Check browser DevTools to verify

---

## 📚 Further Reading

- Your complete guide: `ADOBE_FONTS_SETUP.md`
- Quick reference: `FONTS_QUICK_REF.md`
- Global styles: `src/styles/global.css`

---

## 💡 Summary

**The Forum Issue:** People want Adobe Fonts in Wix's dropdown menu

**The Reality:** Can't do that legally - must use CSS

**Your Solution:** We created CSS files that load fonts legally from Adobe's servers

**What You Need to Do:** 
1. Add CSS to Wix Custom Code (5 minutes)
2. Fonts work on published site automatically
3. Won't show in editor, but WILL work live

**Is it worth it?** 
✅ YES! Professional typography is crucial for branding
✅ Legal and proper implementation
✅ Full control over where fonts appear

---

🎨 **You're using Adobe Fonts the RIGHT way!**
