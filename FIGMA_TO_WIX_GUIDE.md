# 🎨 CARAudio - Figma to Wix Studio Implementation Guide

## Converting Your Figma Design to Wix Studio

This guide helps you translate your Figma design (https://www.figma.com/design/7qHXHiL84NAR8kfFdqlMmV/CARAudio-Web) into a fully functional Wix Studio website.

---

## 🎯 Design Implementation Strategy

### 1. Extract Design Tokens from Figma

#### Colors
Export your color palette:
- **Primary Color**: Use for CTAs, highlights
- **Secondary Color**: Text, borders
- **Accent Color**: Links, hover states
- **Background**: Page backgrounds
- **Surface**: Cards, sections

#### Typography
Note your font families and sizes:
- **Headings**: Font family, weights (H1-H6)
- **Body Text**: Font family, line height
- **Button Text**: Font family, weight
- **Special Text**: Quotes, captions

#### Spacing
Document your spacing system:
- Sections: Vertical padding
- Cards: Internal padding
- Columns: Gap between elements
- Containers: Max width

---

## 📐 Layout Structure

### Recommended Breakpoints
Match Figma frames to Wix breakpoints:

| Device | Figma Frame | Wix Breakpoint | Notes |
|--------|-------------|----------------|-------|
| Desktop | 1920px | Desktop | Primary design |
| Laptop | 1440px | Desktop (scaled) | Test scaling |
| Tablet | 768px | Tablet | Redesign layout |
| Mobile | 375px | Mobile | Mobile-first |

---

## 🏗️ Page-by-Page Implementation

### Home Page

#### Hero Section
**Figma → Wix Elements:**
```
Hero Background (Image/Video) → Strip/Section with background
Hero Title → Text element (#heroTitle)
Hero Subtitle → Text element (#heroSubtitle)
CTA Button → Button (#ctaButton)
Hero Image/Product → Image element
```

**Wix Studio Setup:**
1. Add full-width Strip
2. Set background image from Figma
3. Add container (1200px max-width)
4. Add headline text (H1)
5. Add subheadline (H2)
6. Add button with primary color
7. Set animations: fade-in sequence

**Recommended Animations:**
- Hero title: Fade in + Slide up (800ms)
- Subtitle: Fade in + Slide up (600ms, delay 400ms)
- CTA button: Fade in + Scale (600ms, delay 800ms)

---

#### Featured Products Section

**Figma → Wix Elements:**
```
Section Title → Text element
Product Grid → Repeater (#featuredProducts)
  Product Card → Repeater Item
    Product Image → Image (#productImage)
    Product Name → Text (#productTitle)
    Price → Text (#productPrice)
    Rating → Rating element (#productRating)
    Add to Cart → Button (#addToCartBtn)
```

**Wix Studio Setup:**
1. Add Strip (background color from Figma)
2. Add section heading
3. Add Repeater (4 columns)
4. Design single item to match Figma card
5. Connect to Products CMS collection
6. Add hover effects

**Recommended Animations:**
- Cards: Staggered fade-in (150ms delay each)
- Hover: Lift effect (-10px translateY)
- Image zoom on hover (scale 1.05)

---

#### Testimonials Section

**Figma → Wix Elements:**
```
Section Background → Strip with background
Section Title → Text
Testimonials Grid → Repeater (#testimonialsRepeater)
  Customer Photo → Image
  Customer Name → Text
  Review Text → Text
  Rating → Rating element
```

**Wix Studio Setup:**
1. Add Strip (match Figma background)
2. Add heading
3. Add Repeater (3 columns)
4. Connect to Testimonials CMS
5. Add quote icons from Figma

---

### Booking Page

**Figma → Wix Elements:**
```
Page Header → Strip with title
Booking Form → Form (#bookingForm)
  Customer Info Section → Form fields group
  Vehicle Info Section → Form fields group
  Service Selection → Dropdown
  Date/Time Picker → Date + Dropdown
  Notes → Text Area
  Submit Button → Button
Confirmation Panel → Hidden section
```

**Form Styling Tips:**
- Use rounded corners from Figma
- Match input field heights
- Use same font sizes
- Apply Figma colors to focus states
- Add field icons if in design

---

### Contact Page

**Figma → Wix Elements:**
```
Page Hero → Strip
Contact Form → Form (#contactForm)
Contact Info Cards → Grid/Repeater
  Phone → Text with icon
  Email → Text with icon
  Address → Text with icon
Map → Google Maps embed
```

---

## 🎨 Design System Implementation

### Colors in Wix Studio

1. Go to **Site Design** → **Color Palette**
2. Add colors from Figma:
   - Color 1: Primary (buttons, CTAs)
   - Color 2: Secondary (text, icons)
   - Color 3: Accent (links, highlights)
   - Color 4: Background
   - Color 5: Surface (cards)

### Typography in Wix Studio

1. Go to **Site Design** → **Text Themes**
2. Create themes matching Figma:
   - **Heading 1**: [Font], [Size]px, [Weight], [Color]
   - **Heading 2**: [Font], [Size]px, [Weight], [Color]
   - **Paragraph**: [Font], [Size]px, [Line Height], [Color]
   - **Button**: [Font], [Size]px, [Weight]

### Buttons

1. **Primary Button:**
   - Background: Primary color from Figma
   - Text: White or contrasting color
   - Border radius: Match Figma (e.g., 5px)
   - Padding: Match Figma (e.g., 12px 30px)
   - Hover: Darken by 10%

2. **Secondary Button:**
   - Background: Transparent
   - Border: 2px solid Primary
   - Text: Primary color
   - Hover: Fill with Primary, text white

---

## 📸 Asset Preparation

### Images to Export from Figma

#### Must Export:
- [ ] Logo (SVG + PNG versions)
- [ ] Hero background images
- [ ] Product placeholder images
- [ ] Service icons/images
- [ ] Testimonial photos (if mockups)
- [ ] Background patterns/textures
- [ ] Icon set (SVG)

#### Export Settings:
- **Logos**: SVG for vectors, PNG @2x for raster
- **Photos**: JPG at 1.5x, quality 80%
- **Icons**: SVG preferred
- **Backgrounds**: JPG or WebP, optimized

#### Optimization:
```bash
# Before uploading to Wix:
- Compress JPGs to < 500KB
- Convert large images to WebP
- Optimize SVGs (remove unnecessary code)
- Use online tools: TinyPNG, SVGOMG
```

---

## 🎭 Animation Recommendations

### Based on Common Figma Auto-Animate Patterns

#### Page Load Animations:
```javascript
// Hero section sequence
1. Fade in background (0ms)
2. Slide in title from bottom (400ms)
3. Slide in subtitle from bottom (800ms)
4. Pop in CTA button (1200ms)
```

#### Scroll Animations:
- **Product cards**: Staggered fade + slide up
- **Testimonials**: Fade in when 20% visible
- **Stats counters**: Count up animation
- **Service cards**: Flip or slide in

#### Interaction Animations:
- **Buttons**: Scale on hover (1.05)
- **Product cards**: Lift + shadow increase
- **Forms**: Shake on error
- **Success messages**: Slide down from top

### Implementing in Wix:

```javascript
// In page code
$w("#productCard").onMouseIn(() => {
  $w("#productCard").style.transform = "translateY(-10px) scale(1.02)";
  $w("#productCard").style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
  $w("#productCard").style.transition = "all 0.3s ease";
});

$w("#productCard").onMouseOut(() => {
  $w("#productCard").style.transform = "translateY(0) scale(1)";
  $w("#productCard").style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
});
```

---

## 📱 Mobile Optimization

### Figma Mobile Design → Wix Mobile Editor

#### Key Differences to Address:
1. **Navigation**: Hamburger menu on mobile
2. **Hero**: Stack content vertically
3. **Products**: 1-2 columns instead of 4
4. **Forms**: Full-width inputs
5. **Buttons**: Larger touch targets (min 44px)

#### Mobile-Specific Adjustments:
```
Desktop: 4-column product grid
Tablet: 2-column product grid
Mobile: 1-column product grid

Desktop: Side-by-side form layout
Mobile: Stacked form fields

Desktop: Fixed width containers (1200px)
Mobile: Full-width with padding (20px)
```

---

## 🔍 Design QA Checklist

### Visual Accuracy:
- [ ] Colors match Figma exactly
- [ ] Fonts match (or closest web-safe alternative)
- [ ] Spacing matches (margins, padding)
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Button styles match
- [ ] Icon sizes match

### Responsive Design:
- [ ] Desktop layout matches Figma desktop
- [ ] Tablet layout adapted appropriately
- [ ] Mobile layout is usable and clean
- [ ] Text is readable at all sizes
- [ ] Images scale properly
- [ ] No horizontal scroll on mobile

### Interactions:
- [ ] Hover states implemented
- [ ] Focus states visible
- [ ] Click animations match
- [ ] Form validation styling matches
- [ ] Loading states designed
- [ ] Error states styled

---

## 🎨 Common Figma → Wix Translations

| Figma Element | Wix Studio Equivalent | Notes |
|---------------|----------------------|-------|
| Frame | Strip/Section | Full-width containers |
| Auto Layout | Repeater or Grid | For dynamic content |
| Component | Reusable element | Create in editor |
| Instance | Element | Connected to dataset |
| Rectangle | Box/Shape | Basic container |
| Text | Text element | Style with themes |
| Image | Image element | Upload to Media |
| Button | Button element | Style with design |
| Input field | Text Input | From Add Panel |

---

## 💡 Pro Tips

### From Figma to Wix:

1. **Start with Desktop**: Build desktop first, then adapt
2. **Use Wix Grids**: They're responsive by default
3. **Repeaters for Lists**: Any repeated content
4. **CMS for Dynamic**: Products, services, testimonials
5. **Test Early**: Preview mobile frequently
6. **Use Wix Themes**: Faster than custom styling
7. **Optimize Images**: Before uploading to Wix

### Design Tokens:
Export from Figma and keep a reference doc:
```
Primary: #FF6B35
Secondary: #1A1A1A
Accent: #00A8E8

H1: Montserrat Bold 48px
H2: Montserrat Bold 36px
Body: Open Sans Regular 16px
```

---

## 🚀 Implementation Workflow

### Step-by-Step Process:

1. **Preparation** (30 min)
   - Export all assets from Figma
   - Document colors and fonts
   - Screenshot key sections

2. **Setup** (1 hour)
   - Configure Site Design (colors, fonts)
   - Upload all assets to Media Manager
   - Create page structure

3. **Desktop Build** (4-6 hours)
   - Build homepage desktop layout
   - Match Figma design exactly
   - Add all content

4. **Mobile Adaptation** (2-3 hours)
   - Switch to mobile editor
   - Adjust layouts for mobile
   - Test on real devices

5. **Interactions** (1-2 hours)
   - Add hover states
   - Implement animations
   - Add transitions

6. **QA & Polish** (1 hour)
   - Compare to Figma
   - Fix any discrepancies
   - Test all interactions

---

## 📊 Design Fidelity Goals

### Must Match:
- ✅ Brand colors
- ✅ Typography hierarchy
- ✅ Layout structure
- ✅ Spacing system
- ✅ Button styles
- ✅ Overall feel

### Can Adapt:
- ⚠️ Exact font if not web-safe
- ⚠️ Complex illustrations
- ⚠️ Advanced animations
- ⚠️ Micro-interactions
- ⚠️ Some effects (if performance issue)

---

Your Figma design is the blueprint—Wix Studio is the construction site. Let's build! 🏗️
