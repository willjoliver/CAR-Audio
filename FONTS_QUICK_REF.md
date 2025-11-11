# 🎨 Quick Font Reference - CARAudio

## Adobe Fonts Integration

Your CARAudio site uses **Gamay Condensed** from Adobe Fonts (Typekit).

---

## 🔗 Font Kit URL
```
https://use.typekit.net/sxz6cod.css
```

---

## 📝 Available Fonts

### Gamay Cond Light
```css
font-family: "gamay-condensed", sans-serif;
font-weight: 200;
font-style: normal;
```

### Gamay Cond Regular
```css
font-family: "gamay-condensed", sans-serif;
font-weight: 400;
font-style: normal;
```

---

## ⚡ Quick Setup

### Add to Wix Custom Code (Head):
```html
<link rel="stylesheet" href="https://use.typekit.net/sxz6cod.css">
<style>
  body, h1, h2, h3, h4, h5, h6 {
    font-family: "gamay-condensed", sans-serif;
  }
  
  .richtext__text {
    font-family: "gamay-condensed", sans-serif !important;
    font-weight: 400 !important;
  }
</style>
```

---

## 🎯 Usage in Code

### JavaScript (Velo):
```javascript
// Set font
$w("#myText").style.fontFamily = "gamay-condensed, sans-serif";

// Light weight
$w("#myText").style.fontWeight = "200";

// Regular weight
$w("#myText").style.fontWeight = "400";
```

### CSS Classes:
```html
<!-- Light -->
<div class="font-gamay-light">Light Text</div>

<!-- Regular -->
<div class="font-gamay-regular">Regular Text</div>
```

---

## ✅ What's Styled Automatically

When you add `global.css` to your site:

- ✅ All headings (H1-H6)
- ✅ Body text
- ✅ Rich text elements
- ✅ Buttons
- ✅ Form inputs
- ✅ Navigation

---

## 📁 Files Created

1. **src/styles/global.css** - Complete font styles
2. **ADOBE_FONTS_SETUP.md** - Full setup guide

---

## 🚀 Next Step

Copy contents of `src/styles/global.css` to:
**Wix Studio → Site Design → Custom CSS**

That's it! 🎉

See **ADOBE_FONTS_SETUP.md** for detailed instructions.
