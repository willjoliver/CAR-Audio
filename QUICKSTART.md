# 🚗 CARAudio Wix Studio - Quick Start Guide

## Welcome to Your 3-Day Build Project!

This repository contains everything you need to build a complete car audio e-commerce and booking website with ShopMonkey and CallRail integrations.

---

## 📦 What's Included

### Backend Integration Files (`src/backend/`)
- ✅ `shopmonkey.jsw` - ShopMonkey API integration (customer & order management)
- ✅ `callrail.jsw` - CallRail call & form tracking
- ✅ `email.jsw` - Email notification service
- ✅ `utils.jsw` - Utility functions (validation, formatting)
- ✅ `permissions.json` - API access controls

### Frontend Page Code (`src/pages/`)
- ✅ `Home.c1dmp.js` - Homepage with products & testimonials
- ✅ `Booking.c1dmp.js` - Installation booking form
- ✅ `Contact.c1dmp.js` - Contact form with tracking

### Documentation
- ✅ `IMPLEMENTATION_GUIDE.md` - Complete 3-day implementation plan
- ✅ `CMS_COLLECTIONS_GUIDE.md` - CMS setup & data schemas
- ✅ `CUSTOM_CODE_SNIPPETS.md` - Tracking scripts & analytics

---

## 🚀 Getting Started (5 Minutes)

### 1. Clone & Setup
```bash
# Already done! You have the repo
cd CAR-Audio
npm install
```

### 2. Configure API Keys

Go to your Wix Studio site → **Settings** → **Secrets Manager** and add:

```
SHOPMONKEY_API_KEY = your_api_key_here
SHOPMONKEY_API_URL = https://api.shopmonkey.io/v3
CALLRAIL_API_KEY = your_api_key_here
CALLRAIL_COMPANY_ID = your_company_id
CALLRAIL_ACCOUNT_ID = your_account_id
```

### 3. Start Development Server
```bash
wix dev
```

This opens the Wix Local Editor where you can build your site!

---

## 📅 Your 3-Day Timeline

### **Day 1: Foundation** (8-10 hours)
- Set up CMS collections
- Design homepage
- Connect backend files
- Add sample products

### **Day 2: Integrations** (10-12 hours)
- Build booking form
- Integrate ShopMonkey
- Integrate CallRail
- Test email notifications

### **Day 3: Launch** (10-12 hours)
- Add animations
- Mobile optimization
- SEO setup
- GO LIVE! 🎉

**📖 See `IMPLEMENTATION_GUIDE.md` for detailed day-by-day tasks**

---

## 🔑 Key Features

### ShopMonkey Integration
- ✅ Automatic customer creation
- ✅ Service order management
- ✅ Vehicle tracking
- ✅ Appointment scheduling

### CallRail Integration
- ✅ Call tracking & recording
- ✅ Form submission tracking
- ✅ Lead attribution
- ✅ Dynamic number insertion

### Website Features
- ✅ Product catalog with CMS
- ✅ Online booking system
- ✅ Contact forms
- ✅ Customer testimonials
- ✅ Shopping cart
- ✅ Mobile responsive
- ✅ SEO optimized

---

## 📚 Documentation Quick Links

| Document | Purpose |
|----------|---------|
| [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) | Step-by-step 3-day build plan |
| [CMS_COLLECTIONS_GUIDE.md](./CMS_COLLECTIONS_GUIDE.md) | Database setup & schemas |
| [CUSTOM_CODE_SNIPPETS.md](./CUSTOM_CODE_SNIPPETS.md) | Tracking scripts & analytics |

---

## 🛠️ Essential Commands

```bash
# Start local development
wix dev

# Preview your site
wix preview

# Deploy to production
wix publish

# Pull latest from Wix Studio
wix pull

# Push local changes to Wix
wix push
```

---

## 📋 Pre-Launch Checklist

### Setup (Do Once)
- [ ] API keys added to Secrets Manager
- [ ] CallRail tracking code added to Custom Code
- [ ] CMS collections created (Products, Services, Testimonials)
- [ ] Sample data added to collections

### Testing (Before Launch)
- [ ] Submit test booking → Check ShopMonkey
- [ ] Submit test form → Check CallRail
- [ ] Make test call → Verify CallRail tracking
- [ ] Test on mobile devices
- [ ] Test all forms work
- [ ] Verify email notifications

### Launch Day
- [ ] Connect custom domain
- [ ] SSL certificate active
- [ ] Google Analytics installed
- [ ] All content reviewed
- [ ] Final QA completed
- [ ] **PUBLISH!** 🚀

---

## 🎯 Next Steps

### Right Now:
1. Read `IMPLEMENTATION_GUIDE.md`
2. Configure Secrets Manager
3. Create CMS collections
4. Run `wix dev` and start building!

### Need Help?
- Check documentation files
- Review code comments
- Visit [Wix Forum](https://www.wix.com/forum)
- Check [ShopMonkey Docs](https://docs.shopmonkey.io)
- Check [CallRail Docs](https://apidocs.callrail.com)

---

## 🎨 Design Recommendations

### Areas for Animations
- Hero section fade-ins
- Product card hovers
- Scroll-triggered reveals
- Form success messages
- Button interactions

### Suggested Improvements
- Add video backgrounds
- Include customer reviews with photos
- Add live chat widget
- Create blog for SEO
- Add before/after galleries

---

## 📊 Success Metrics to Track

After launch, monitor:
- **Bookings**: Goal 10-20/week
- **Calls**: Track via CallRail
- **Traffic**: Aim for 1000+ visits/month
- **Conversion Rate**: Target 3-5%
- **Page Speed**: Keep under 3 seconds
- **Mobile Traffic**: Expect 60-70%

---

## 🔐 Important Notes

### Security
- ✅ Never commit API keys to Git (they're in Secrets Manager)
- ✅ Validate all user input
- ✅ Use HTTPS everywhere
- ✅ Review permissions.json regularly

### Performance
- ✅ Compress all images
- ✅ Use WebP format
- ✅ Enable lazy loading
- ✅ Minimize custom code

### SEO
- ✅ Add meta tags to all pages
- ✅ Use descriptive URLs
- ✅ Add alt text to images
- ✅ Create XML sitemap

---

## 🌟 Project Structure

```
CAR-Audio/
├── src/
│   ├── backend/           # Backend API integration code
│   │   ├── shopmonkey.jsw
│   │   ├── callrail.jsw
│   │   ├── email.jsw
│   │   ├── utils.jsw
│   │   └── permissions.json
│   ├── pages/             # Page-specific code
│   │   ├── Home.c1dmp.js
│   │   ├── Booking.c1dmp.js
│   │   └── Contact.c1dmp.js
│   └── public/            # Shared public files
├── IMPLEMENTATION_GUIDE.md     # 3-day build plan
├── CMS_COLLECTIONS_GUIDE.md    # Database setup
├── CUSTOM_CODE_SNIPPETS.md     # Tracking scripts
└── README.md                    # This file
```

---

## 💪 You've Got This!

Everything is set up and ready to go. Just follow the implementation guide and you'll have a fully functional car audio website in 3 days!

### Today's Action Items:
1. ✅ Configure Secrets Manager (10 min)
2. ✅ Create CMS collections (30 min)
3. ✅ Add CallRail tracking code (10 min)
4. ✅ Run `wix dev` and start building! (rest of day)

**Let's build something amazing! 🚀**

---

## 📞 Support

If you run into issues:
1. Check the troubleshooting section in `IMPLEMENTATION_GUIDE.md`
2. Review code comments in backend files
3. Test integrations individually
4. Consult Wix/ShopMonkey/CallRail documentation

---

**Made with ❤️ for CARAudio**

*Last Updated: November 11, 2025*
