# CARAudio Wix Studio - Implementation Guide

## 🚀 Quick Start - 3-Day Build Plan

This guide will help you build your complete CARAudio website in 3 days with ShopMonkey and CallRail integrations.

---

## 📋 Prerequisites

- ✅ Wix Studio account with site created
- ✅ ShopMonkey account with API credentials
- ✅ CallRail account with tracking numbers
- ✅ Git installed and repository cloned
- ✅ Wix CLI installed (`npm install -g @wix/cli`)

---

## 🔧 Initial Setup

### Step 1: Configure Secrets Manager

1. In Wix Studio, go to **Settings** → **Secrets Manager**
2. Add the following secrets:

```
SHOPMONKEY_API_KEY = your_shopmonkey_api_key_here
SHOPMONKEY_API_URL = https://api.shopmonkey.io/v3
CALLRAIL_API_KEY = your_callrail_api_key_here
CALLRAIL_COMPANY_ID = your_callrail_company_id
CALLRAIL_ACCOUNT_ID = your_callrail_account_id
```

### Step 2: Install Required Apps

1. **Wix Stores** - For e-commerce functionality
   - Go to Add Panel → Business & Payments → Wix Stores → Add to Site

2. **Wix Data** - Already included, just enable collections

### Step 3: Add CallRail Tracking Code

1. Go to **Settings** → **Custom Code**
2. Add to **Head** section:

```html
<script>
  (function(c,a){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  c.callrail=c[a]})(window,'callrail');
  
  callrail('config', 'YOUR_CALLRAIL_ACCOUNT_ID', {
    formCapture: {
      enabled: true,
      selectors: [
        '#bookingForm',
        '#contactForm',
        '#quoteForm'
      ]
    }
  });
</script>
<script async src="//cdn.callrail.com/companies/YOUR_COMPANY_ID/tracker.js"></script>
```

---

## 📊 Create CMS Collections

### 1. Products Collection

Go to **CMS** → **Content Manager** → **Create Collection** → "Products"

**Fields:**
- Title (Text) - Product name
- Description (Rich Text) - Product description
- Price (Number) - Product price
- Image (Image) - Product image
- Featured (Boolean) - Show on homepage
- Category (Text) - Product category
- InStock (Boolean) - Availability
- Rating (Number) - Customer rating
- Slug (Text) - URL-friendly name

### 2. Testimonials Collection

Create collection "Testimonials"

**Fields:**
- CustomerName (Text)
- Review (Text)
- Rating (Number)
- Photo (Image)
- Approved (Boolean)
- ServiceType (Text)

### 3. Services Collection

Create collection "Services"

**Fields:**
- ServiceName (Text)
- Description (Rich Text)
- Price (Number)
- Duration (Text)
- Image (Image)
- Featured (Boolean)

### 4. Cart Collection (Optional)

Create collection "Cart"

**Fields:**
- ProductId (Text)
- Quantity (Number)
- AddedDate (Date)
- UserId (Text)

---

## 🎨 Page Structure & Design

### Home Page Elements

Create these elements in Wix Studio Editor:

```
Header Section:
- #headerPhone (Text/HTML) - Phone number
- #cartBadge (Text) - Cart item count
- Navigation buttons

Hero Section:
- #heroSection (Box/Strip)
- #heroTitle (Text) - Main headline
- #heroSubtitle (Text) - Subheadline
- #ctaButton (Button) - Call to action
- #heroBackground (Image/Video)

Featured Products:
- #featuredProducts (Repeater)
  - #productImage (Image)
  - #productTitle (Text)
  - #productPrice (Text)
  - #productRating (Rating)
  - #viewDetailsBtn (Button)
  - #addToCartBtn (Button)

Testimonials:
- #testimonialsRepeater (Repeater)
  - #customerName (Text)
  - #testimonialText (Text)
  - #testimonialRating (Rating)

CTAs:
- #bookNowBtn (Button)
- #shopNowBtn (Button)

Notification:
- #notification (Box - initially hidden)
- #notificationText (Text)
```

### Booking Page Elements

```
Form Section:
- #bookingForm (Form)
- #firstNameInput (Text Input)
- #lastNameInput (Text Input)
- #emailInput (Email Input)
- #phoneInput (Phone Input)
- #vehicleYear (Dropdown)
- #vehicleMake (Dropdown)
- #vehicleModel (Text Input)
- #serviceDropdown (Dropdown)
- #datePicker (Date Picker)
- #timeSlotDropdown (Dropdown)
- #notesInput (Text Box)
- #submitBookingBtn (Button)

Confirmation:
- #confirmationSection (Box - initially hidden)
- #confirmationNumber (Text)

Error Display:
- #errorMessage (Box - initially hidden)
- #errorText (Text)
```

### Contact Page Elements

```
Form Section:
- #contactForm (Form)
- #nameInput (Text Input)
- #emailInput (Email Input)
- #phoneInput (Phone Input)
- #subjectInput (Dropdown - optional)
- #messageInput (Text Box)
- #submitBtn (Button)

Messages:
- #successMessage (Box - initially hidden)
- #errorMessage (Box - initially hidden)
- #errorText (Text)

Contact Info:
- #phoneNumber (Text/HTML)
- #emergencyPhone (Text/HTML)
```

---

## 📅 3-Day Implementation Timeline

### **DAY 1: Foundation & Setup (8-10 hours)**

#### Morning (4 hours)
- ✅ Set up Secrets Manager with API keys
- ✅ Install Wix Stores app
- ✅ Create CMS collections (Products, Services, Testimonials)
- ✅ Add sample products to CMS (6-10 products)
- ✅ Design header with navigation
- ✅ Create hero section

#### Afternoon (4 hours)
- ✅ Build home page layout
- ✅ Add featured products repeater
- ✅ Connect repeater to Products CMS
- ✅ Add testimonials section
- ✅ Connect Home.c1dmp.js page code
- ✅ Test basic functionality

#### Evening (2 hours)
- ✅ Design footer
- ✅ Add basic animations
- ✅ Test mobile responsive design
- ✅ Initial deployment to preview

**✅ Day 1 Checklist:**
- [ ] Home page displays correctly
- [ ] Products load from CMS
- [ ] Navigation works
- [ ] Mobile layout looks good

---

### **DAY 2: Features & Integrations (10-12 hours)**

#### Morning (4 hours)
- ✅ Create booking page layout
- ✅ Add all booking form elements
- ✅ Connect Booking.c1dmp.js code
- ✅ Test form validation
- ✅ Create contact page
- ✅ Connect Contact.c1dmp.js code

#### Afternoon (5 hours)
- ✅ **ShopMonkey Integration**
  - Test createCustomer function
  - Test createCompleteBooking function
  - Verify orders appear in ShopMonkey
- ✅ **CallRail Integration**
  - Add tracking snippet to Custom Code
  - Test phone number swapping
  - Test form tracking
  - Submit test form and verify in CallRail dashboard
- ✅ Email notifications setup
  - Configure sender email
  - Test booking confirmation emails

#### Evening (3 hours)
- ✅ Create products listing page
- ✅ Add product detail page template
- ✅ Test shopping cart functionality
- ✅ Test all user flows end-to-end

**✅ Day 2 Checklist:**
- [ ] Booking form submits successfully
- [ ] ShopMonkey receives customer/order data
- [ ] CallRail tracks form submissions
- [ ] CallRail tracks phone calls
- [ ] Confirmation emails send
- [ ] Contact form works

---

### **DAY 3: Polish & Launch (10-12 hours)**

#### Morning (4 hours)
- ✅ Add all animations
  - Hero section fade-ins
  - Scroll-triggered animations
  - Hover effects on products
  - Button animations
- ✅ Mobile optimization
  - Test all pages on mobile
  - Fix any layout issues
  - Ensure touch targets are large enough
- ✅ Add all real content
  - Replace placeholder text
  - Upload final images
  - Add product descriptions
  - Write service descriptions

#### Afternoon (4 hours)
- ✅ **SEO Setup**
  - Add meta titles to all pages
  - Add meta descriptions
  - Add alt text to all images
  - Configure social media preview images
  - Set up 301 redirects if needed
- ✅ **Testing**
  - Cross-browser testing (Chrome, Safari, Firefox)
  - Mobile device testing (iOS, Android)
  - Form submission testing
  - Integration testing
  - Payment processing test
- ✅ **Performance Optimization**
  - Compress images
  - Enable lazy loading
  - Minimize custom code
  - Check page load speed

#### Evening (2-3 hours)
- ✅ Final QA checklist
- ✅ Client review and feedback
- ✅ Fix any last-minute issues
- ✅ **Domain Connection**
  - Connect custom domain
  - Verify SSL certificate
  - Test domain propagation
- ✅ **Analytics Setup**
  - Add Google Analytics
  - Add Facebook Pixel (if needed)
  - Verify tracking
- ✅ **GO LIVE!** 🎉

**✅ Day 3 Checklist:**
- [ ] All animations working
- [ ] Mobile fully optimized
- [ ] SEO complete
- [ ] Cross-browser tested
- [ ] Integrations verified
- [ ] Domain connected
- [ ] Analytics tracking
- [ ] Site is live!

---

## 🧪 Testing Procedures

### ShopMonkey Integration Test

1. Submit a test booking through the website
2. Log into ShopMonkey dashboard
3. Verify customer was created
4. Verify vehicle was created
5. Verify service order was created
6. Check order details match booking

### CallRail Integration Test

1. **Form Tracking:**
   - Submit booking form
   - Submit contact form
   - Log into CallRail dashboard
   - Verify form submissions appear
   - Check attribution data is captured

2. **Call Tracking:**
   - Visit website
   - Note the phone number displayed
   - Call the number
   - Verify call appears in CallRail
   - Check call recording (if enabled)

### Email Notification Test

1. Submit test booking
2. Check email inbox for confirmation
3. Verify all booking details are correct
4. Test admin notification emails
5. Check spam folder if not received

---

## 🐛 Troubleshooting

### Issue: ShopMonkey API returns 401 Unauthorized
**Solution:**
- Check API key in Secrets Manager
- Verify API key is active in ShopMonkey dashboard
- Ensure proper spelling of secret name

### Issue: CallRail not tracking forms
**Solution:**
- Check form selector in tracking code
- Verify JavaScript snippet is in Head section
- Open browser dev tools → Network tab → look for CallRail requests
- Ensure form IDs match selectors

### Issue: Emails not sending
**Solution:**
- Check email service configuration
- Verify sender email is authorized
- Check spam folder
- Test with different email provider

### Issue: Product images not displaying
**Solution:**
- Check image URLs in CMS
- Verify image file sizes (compress if > 500KB)
- Ensure image permissions are set correctly
- Clear browser cache

---

## 🔒 Security Best Practices

1. **Never commit API keys to Git**
   - Always use Secrets Manager
   - Add `.env` to `.gitignore`

2. **Validate all user input**
   - Use built-in Wix validation
   - Sanitize text inputs
   - Validate email and phone formats

3. **Set proper permissions**
   - Review `permissions.json`
   - Limit backend function access
   - Use `anonymous: false` for sensitive functions

4. **HTTPS everywhere**
   - Ensure SSL is enabled
   - Force HTTPS redirects
   - Verify certificate is valid

---

## 📈 Post-Launch Tasks

### Week 1
- [ ] Monitor analytics daily
- [ ] Check for form submissions
- [ ] Review CallRail call logs
- [ ] Test all integrations in production
- [ ] Collect user feedback

### Week 2
- [ ] Analyze conversion rates
- [ ] Optimize slow-loading pages
- [ ] A/B test CTA buttons
- [ ] Add more products to CMS
- [ ] Create blog content

### Ongoing
- [ ] Monthly performance review
- [ ] Update products regularly
- [ ] Add new testimonials
- [ ] Monitor integration status
- [ ] SEO optimization
- [ ] Security updates

---

## 📞 Support Resources

### Wix Resources
- [Wix Velo Documentation](https://www.wix.com/velo/reference)
- [Wix Forum](https://www.wix.com/forum)
- [Wix Support](https://support.wix.com)

### Integration Docs
- [ShopMonkey API](https://docs.shopmonkey.io)
- [CallRail API](https://apidocs.callrail.com)

### Development Tools
- [Wix CLI](https://www.wix.com/velo/reference/cli/introduction)
- [Git Integration Guide](https://support.wix.com/en/article/velo-setting-up-git-integration-wix-cli-beta)

---

## 🎯 Success Metrics

Track these KPIs after launch:

- **Traffic:** Daily unique visitors
- **Conversions:** Booking form submissions
- **Calls:** CallRail tracked calls
- **Orders:** ShopMonkey service orders
- **Revenue:** Monthly sales
- **Load Time:** Page speed (goal: < 3 seconds)
- **Mobile Traffic:** % of mobile users
- **Bounce Rate:** Aim for < 50%

---

## ✅ Final Launch Checklist

- [ ] All backend files uploaded
- [ ] All page code connected
- [ ] CMS collections populated
- [ ] API keys in Secrets Manager
- [ ] CallRail tracking code added
- [ ] All forms tested
- [ ] Integrations verified
- [ ] Mobile responsive
- [ ] SEO configured
- [ ] Analytics installed
- [ ] Domain connected
- [ ] SSL active
- [ ] Legal pages added (Privacy, Terms)
- [ ] Favicon uploaded
- [ ] Social media links added
- [ ] Contact info verified
- [ ] Test purchase completed
- [ ] Client approval received
- [ ] **LAUNCH!** 🚀

---

Good luck with your build! 🎉

For questions or issues, refer to the troubleshooting section or contact Wix support.
