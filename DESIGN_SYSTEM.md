# 🎨 Design System Guide - CARAudio Site

## Layout & Spacing Standards

---

## 📏 Section Padding

### Desktop (1200px+)
```css
Side Padding: 80px - 120px
Top/Bottom Padding: 80px - 120px
```

**Recommended:**
- **Hero Section**: 120px sides, 100px top/bottom
- **Content Sections**: 80px sides, 80px top/bottom
- **Footer**: 80px sides, 60px top/bottom

### Tablet (768px - 1199px)
```css
Side Padding: 40px - 60px
Top/Bottom Padding: 60px - 80px
```

### Mobile (< 768px)
```css
Side Padding: 20px - 30px
Top/Bottom Padding: 40px - 60px
```

---

## 🎯 Wix Studio Best Practices

### Container Width
```
Max Content Width: 1200px - 1440px
Center alignment: Auto margins
```

### Responsive Grid
```
Desktop: 12 columns with 20px gutter
Tablet: 8 columns with 16px gutter
Mobile: 4 columns with 12px gutter
```

---

## 📐 Standard Layout Structure

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ←─── 80-120px ───→                             │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │                                         │   │
│  │         CONTENT (Max 1440px)           │   │
│  │                                         │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│                          ←─── 80-120px ───→    │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎨 Specific Section Guidelines

### Hero Section
```css
Desktop:
  Padding: 120px (sides), 100px (top), 120px (bottom)
  Min Height: 600px - 800px

Tablet:
  Padding: 60px (sides), 80px (top/bottom)
  Min Height: 500px

Mobile:
  Padding: 24px (sides), 60px (top/bottom)
  Min Height: 400px
```

### Product Grid / Services Section
```css
Desktop:
  Container Padding: 80px (sides), 80px (top/bottom)
  Grid Gap: 30px - 40px
  Items per row: 3-4

Tablet:
  Container Padding: 40px (sides), 60px (top/bottom)
  Grid Gap: 24px
  Items per row: 2

Mobile:
  Container Padding: 24px (sides), 40px (top/bottom)
  Grid Gap: 20px
  Items per row: 1
```

### Testimonials Section
```css
Desktop:
  Padding: 100px (sides), 100px (top/bottom)
  Background: Light gray or brand color
  Cards: 3 per row, 30px gap

Tablet:
  Padding: 50px (sides), 80px (top/bottom)
  Cards: 2 per row, 24px gap

Mobile:
  Padding: 24px (sides), 60px (top/bottom)
  Cards: 1 per row, carousel layout
```

### Contact/Booking Form Section
```css
Desktop:
  Form Container: Max 600px width, centered
  Padding: 80px (sides), 80px (top/bottom)
  Input spacing: 20px vertical gap

Tablet:
  Form Container: Max 500px width
  Padding: 40px (sides), 60px (top/bottom)

Mobile:
  Form Container: Full width (minus padding)
  Padding: 24px (sides), 40px (top/bottom)
  Input spacing: 16px vertical gap
```

### Footer
```css
Desktop:
  Padding: 80px (sides), 60px (top), 40px (bottom)
  Column gap: 60px
  Columns: 4

Tablet:
  Padding: 40px (sides), 50px (top), 30px (bottom)
  Column gap: 40px
  Columns: 2

Mobile:
  Padding: 24px (sides), 40px (top), 30px (bottom)
  Stack vertically
  Gap: 32px between sections
```

---

## 📱 Responsive Breakpoints

```css
/* Wix Studio Recommended Breakpoints */

Mobile:     320px - 767px
Tablet:     768px - 1023px
Desktop:    1024px - 1439px
Large:      1440px+

/* Custom breakpoints for precision */
Small Mobile:   320px - 480px
Large Mobile:   481px - 767px
Small Tablet:   768px - 1023px
Large Tablet:   1024px - 1199px
Desktop:        1200px - 1599px
Large Desktop:  1600px+
```

---

## 🎯 Element-Specific Spacing

### Typography Spacing
```css
H1 margin-bottom: 24px
H2 margin-bottom: 20px
H3 margin-bottom: 16px
Paragraph margin-bottom: 16px
List items: 12px gap
```

### Button Spacing
```css
Padding: 16px 32px (Desktop)
Padding: 14px 28px (Tablet)
Padding: 12px 24px (Mobile)

Button gap in groups: 16px
```

### Card/Product Spacing
```css
Card padding: 24px - 32px (Desktop)
Card padding: 20px (Tablet)
Card padding: 16px (Mobile)

Image margin-bottom: 20px
Title margin-bottom: 12px
Price margin-top: 16px
```

### Form Elements
```css
Input height: 48px (Desktop)
Input height: 44px (Mobile)
Input padding: 16px

Label margin-bottom: 8px
Field margin-bottom: 20px (Desktop)
Field margin-bottom: 16px (Mobile)
```

---

## 🎨 Wix Studio Implementation

### Method 1: Using Wix Sections (Recommended)

In Wix Studio:
1. Add a **Section** element
2. Set section padding:
   - Desktop: 80px (all sides)
   - Tablet: 40px (all sides)
   - Mobile: 24px (all sides)

3. Add **Container** inside section:
   - Max width: 1440px
   - Center align: Auto margins

```
Section (Full Width)
└── Container (Max 1440px, centered)
    └── Content (Grid/Flex layout)
```

### Method 2: Using Custom CSS Classes

Add to your `global.css`:

```css
/* Section Containers */
.section-container {
  width: 100%;
  padding: 80px;
  max-width: 1920px;
  margin: 0 auto;
}

.section-content {
  max-width: 1440px;
  margin: 0 auto;
}

/* Hero specific */
.hero-section {
  padding: 120px 120px;
  min-height: 700px;
}

/* Standard section */
.content-section {
  padding: 80px 80px;
}

/* Tablet */
@media (max-width: 1023px) {
  .section-container {
    padding: 60px 40px;
  }
  
  .hero-section {
    padding: 80px 60px;
    min-height: 500px;
  }
  
  .content-section {
    padding: 60px 40px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .section-container {
    padding: 40px 24px;
  }
  
  .hero-section {
    padding: 60px 24px;
    min-height: 400px;
  }
  
  .content-section {
    padding: 40px 24px;
  }
}
```

---

## 🎯 CARAudio Specific Recommendations

### Homepage Layout
```
Hero Section
├── Padding: 120px sides (Desktop), 24px (Mobile)
├── Height: 700px (Desktop), 500px (Mobile)
└── Content: Centered, max-width 800px

Featured Products
├── Padding: 80px sides (Desktop), 24px (Mobile)
├── Grid: 3 columns (Desktop), 1 column (Mobile)
└── Gap: 30px (Desktop), 20px (Mobile)

Testimonials
├── Padding: 100px sides (Desktop), 24px (Mobile)
├── Background: Light gray (#F5F5F5)
└── Cards: 3 columns → Carousel on mobile

Call-to-Action
├── Padding: 80px sides (Desktop), 24px (Mobile)
├── Background: Brand orange (#FF6B35)
└── Text: White, centered
```

### Booking Page Layout
```
Form Container
├── Max-width: 600px
├── Centered with auto margins
├── Side padding: 80px (Desktop), 24px (Mobile)
├── Form spacing: 20px between fields
└── Button: Full width on mobile
```

### Contact Page Layout
```
Split Layout (Desktop)
├── Left: Contact info (40% width)
├── Right: Form (60% width)
├── Gap: 60px
└── Mobile: Stack vertically

Container Padding
├── Desktop: 80px sides
├── Tablet: 40px sides
└── Mobile: 24px sides
```

---

## 📊 Visual Spacing Scale

```
┌─────────────────────────────────────┐
│  4px    - Tight spacing (icons)    │
│  8px    - Close elements           │
│  12px   - Related elements         │
│  16px   - Paragraph spacing        │
│  20px   - Card internal spacing    │
│  24px   - Small gaps               │
│  32px   - Medium gaps              │
│  40px   - Large gaps               │
│  60px   - Section spacing          │
│  80px   - Major section padding    │
│  120px  - Hero/featured padding    │
└─────────────────────────────────────┘
```

---

## 🎨 Brand Colors & Usage

```css
/* Primary */
Orange: #FF6B35 (CTA buttons, accents)
Dark Gray: #2C3E50 (Text, headers)

/* Secondary */
Light Gray: #F5F5F5 (Backgrounds)
White: #FFFFFF (Cards, sections)

/* Accents */
Success Green: #27AE60 (Confirmations)
Error Red: #E74C3C (Errors)
Info Blue: #3498DB (Links)
```

---

## ✅ Quick Reference Card

### DESKTOP (1200px+)
- **Side Padding:** 80-120px
- **Vertical Spacing:** 80-120px
- **Max Content Width:** 1440px
- **Grid Columns:** 12
- **Gutter:** 20px

### TABLET (768px-1199px)
- **Side Padding:** 40-60px
- **Vertical Spacing:** 60-80px
- **Grid Columns:** 8
- **Gutter:** 16px

### MOBILE (<768px)
- **Side Padding:** 20-30px
- **Vertical Spacing:** 40-60px
- **Grid Columns:** 4
- **Gutter:** 12px

---

## 🎯 Implementation Steps

### Step 1: Set Up Base Sections
```javascript
// In Wix Studio Editor:
1. Add Section element
2. Set section settings:
   - Desktop padding: 80px
   - Tablet padding: 40px
   - Mobile padding: 24px
```

### Step 2: Add Container
```javascript
3. Inside section, add Container
4. Set container:
   - Max width: 1440px
   - Align: Center
   - Margin: Auto
```

### Step 3: Add Content
```javascript
5. Add Grid/Flex layout inside container
6. Set gaps:
   - Desktop: 30px
   - Tablet: 24px
   - Mobile: 20px
```

---

## 🔧 Testing Your Layout

### Visual Check:
1. ✅ Content not touching screen edges
2. ✅ Consistent spacing between sections
3. ✅ Readable text line length (60-80 chars)
4. ✅ Buttons have breathing room
5. ✅ Forms are centered and not too wide

### Device Testing:
```bash
Desktop: 1920px, 1440px, 1366px
Tablet: 1024px, 768px
Mobile: 375px, 414px, 360px
```

---

## 💡 Pro Tips

### Do's:
✅ Use consistent padding multiplies of 4 or 8
✅ Keep max content width 1200-1440px
✅ Test on actual devices
✅ Use Wix's responsive preview
✅ Maintain visual hierarchy with spacing

### Don'ts:
❌ Don't go below 20px mobile padding
❌ Don't exceed 120px desktop padding (wastes space)
❌ Don't use arbitrary spacing values
❌ Don't forget tablet breakpoint
❌ Don't make content too wide (hard to read)

---

## 📁 Files to Reference

- **`src/styles/global.css`** - Base styles and spacing
- **`FIGMA_TO_WIX_GUIDE.md`** - Design translation guide
- **This file** - Spacing standards

---

## 🎨 Example Section Code

```css
/* Add to global.css */

/* Base section styling */
.car-audio-section {
  width: 100%;
  padding: 80px;
  position: relative;
}

.car-audio-container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

/* Hero variant */
.hero-variant {
  padding: 120px 120px;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 1199px) {
  .car-audio-section {
    padding: 60px 40px;
  }
  
  .hero-variant {
    padding: 80px 60px;
    min-height: 500px;
  }
}

@media (max-width: 767px) {
  .car-audio-section {
    padding: 40px 24px;
  }
  
  .hero-variant {
    padding: 60px 24px;
    min-height: 400px;
  }
}
```

---

## 🚀 Ready to Build!

Use these standards consistently across your site for a professional, polished look! 🎨

**Quick Answer:**
- **Desktop:** 80-120px side padding
- **Tablet:** 40-60px side padding  
- **Mobile:** 20-30px side padding
- **Max Content Width:** 1440px centered

Happy designing! 🚗🔊
