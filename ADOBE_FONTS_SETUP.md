# 🎨 Adobe Fonts (Typekit) Integration Guide

## Adding Custom Fonts to CARAudio Site

---

## 📝 Fonts Added

Your CARAudio site now uses **Gamay Condensed** from Adobe Fonts:

### Gamay Cond Light
- **Font Family**: `"gamay-condensed", sans-serif`
- **Font Weight**: `200`
- **Font Style**: `normal`

### Gamay Cond Regular
- **Font Family**: `"gamay-condensed", sans-serif`
- **Font Weight**: `400`
- **Font Style**: `normal`

---

## 🚀 Setup Instructions

### Option 1: Add to Wix Custom CSS (Recommended)

1. Open Wix Studio
2. Go to **Site Design** → **Custom CSS**
3. Copy the entire contents of `src/styles/global.css`
4. Paste into the Custom CSS editor
5. Click **Save**

### Option 2: Add via Page Code

Add this to your site's global page code (e.g., `masterPage.js`):

```javascript
import wixWindow from 'wix-window';

$w.onReady(function() {
  // Inject custom CSS
  const style = wixWindow.rendering.env === 'backend' ? null : document.createElement('style');
  if (style) {
    style.innerHTML = `
      @import url("https://use.typekit.net/sxz6cod.css");
      
      .richtext__text {
        font-family: "gamay-condensed", sans-serif !important;
        font-weight: 400 !important;
        font-style: normal !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: "gamay-condensed", sans-serif;
        font-weight: 400;
      }
    `;
    document.head.appendChild(style);
  }
});
```

### Option 3: Add to Custom Code (Head)

1. Go to **Settings** → **Custom Code**
2. Add to **Head** section:

```html
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">
<style>
  .richtext__text {
    font-family: "gamay-condensed", sans-serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "gamay-condensed", sans-serif;
    font-weight: 400;
  }
  
  body {
    font-family: "gamay-condensed", sans-serif;
  }
</style>
```

---

## 🎨 Using the Fonts

### In Wix Studio Editor

1. Select any text element
2. In the text editor, you won't see "Gamay Condensed" in the dropdown
3. But the font will load via CSS when published

### In Code

```javascript
// Set font for any element
$w("#myText").style.fontFamily = "gamay-condensed, sans-serif";
$w("#myText").style.fontWeight = "400"; // Regular
// OR
$w("#myText").style.fontWeight = "200"; // Light
```

### CSS Classes Available

```html
<!-- Light weight -->
<div class="font-gamay-light">Light Text</div>

<!-- Regular weight -->
<div class="font-gamay-regular">Regular Text</div>

<!-- Utility classes -->
<div class="text-light">Force light weight</div>
<div class="text-regular">Force regular weight</div>
```

---

## 🎯 What Gets Styled

With the global CSS applied:

- ✅ All rich text elements (`.richtext__text`)
- ✅ All headings (H1-H6)
- ✅ Body text
- ✅ Buttons
- ✅ Form inputs
- ✅ Navigation items

---

## 🧪 Testing

### Verify Fonts Load:

1. **Publish or preview your site**
2. **Open browser Developer Tools** (F12)
3. **Go to Network tab**
4. **Filter by "sxz6cod"**
5. **Refresh page**
6. You should see: `sxz6cod.css` loaded successfully

### Check in Browser:

1. **Right-click any text element**
2. **Inspect Element**
3. **In Computed styles, check font-family**
4. Should show: `"gamay-condensed", sans-serif`

---

## ⚠️ Important Notes

### Adobe Fonts Requirements:
- ✅ Fonts only load on published/preview site
- ✅ Won't show in Wix Studio editor
- ✅ Free with Adobe Fonts account
- ✅ No additional licensing needed

### Performance:
- Font loads asynchronously
- Won't block page rendering
- Fallback: `sans-serif`

### Browser Support:
- ✅ All modern browsers
- ✅ Mobile devices
- ✅ Chrome, Firefox, Safari, Edge

---

## 🎨 Design Recommendations

### Use Light (200) for:
- Large headings
- Hero text
- Elegant displays
- Light backgrounds

### Use Regular (400) for:
- Body text
- Buttons
- Navigation
- Forms
- Most content

### Example Usage:

```css
/* Hero title */
.hero-title {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 200;
  font-size: 72px;
  letter-spacing: -0.02em;
}

/* Section headings */
.section-heading {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 400;
  font-size: 36px;
}

/* Body text */
.body-text {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
}
```

---

## 🔧 Customization

### Add More Font Weights:

If you add more fonts to your Adobe Fonts kit, update the CSS:

```css
.font-gamay-bold {
  font-family: "gamay-condensed", sans-serif;
  font-weight: 700; /* If you add bold */
  font-style: normal;
}
```

### Override Specific Elements:

```css
/* Keep buttons with default font */
button {
  font-family: inherit; /* Don't use Gamay */
}

/* Only use Gamay for specific sections */
.car-audio-section {
  font-family: "gamay-condensed", sans-serif;
}
```

---

## 📱 Mobile Optimization

The fonts are optimized for all screen sizes. Additional adjustments in `global.css`:

```css
@media (max-width: 768px) {
  body {
    font-size: 16px; /* Readable on mobile */
  }
  
  h1 {
    font-size: 36px; /* Scaled for mobile */
  }
}
```

---

## ✅ Setup Checklist

- [ ] Adobe Fonts CSS added to site
- [ ] Global styles applied
- [ ] Fonts tested in preview
- [ ] Network tab shows font loading
- [ ] Text displays correctly
- [ ] Mobile fonts readable
- [ ] Fallback fonts work

---

## 🆘 Troubleshooting

### Fonts Not Loading?

**Check:**
1. Adobe Fonts kit ID is correct: `sxz6cod`
2. CSS is in Custom Code (Head) or Custom CSS
3. Site is published/preview (won't work in editor)
4. Browser cache cleared

**Fix:**
```html
<!-- Hard refresh the link -->
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css?v=2">
```

### Fonts Look Different?

- Gamay Condensed is a narrow font
- This is expected behavior
- Adjust letter-spacing if needed: `letter-spacing: 0.01em;`

### Some Text Not Changing?

- Check element specificity
- May need `!important` flag
- Check for inline styles overriding

---

## 📚 Resources

- [Adobe Fonts Documentation](https://fonts.adobe.com/docs)
- [Wix Custom CSS Guide](https://support.wix.com/en/article/about-custom-css)
- [Web Font Best Practices](https://web.dev/font-best-practices/)

---

Your fonts are ready to use! 🎉

Make sure to add the CSS to your site following Option 1, 2, or 3 above.
