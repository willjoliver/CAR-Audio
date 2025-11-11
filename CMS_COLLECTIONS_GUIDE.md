# CARAudio - CMS Collections Setup Guide

This document provides JSON schemas and setup instructions for all CMS collections needed for the CARAudio website.

---

## 📊 Collection 1: Products

**Purpose:** Store all car audio products available for sale

### Create Collection Steps:
1. Go to CMS → Content Manager
2. Click "Create Collection"
3. Name it "Products"
4. Add the following fields:

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| title | Text | Product name | Required |
| description | Rich Text | Full product description | |
| shortDescription | Text | Brief description for cards | Max 150 chars |
| price | Number | Product price in USD | Required, Min: 0 |
| compareAtPrice | Number | Original price (for sales) | Min: 0 |
| image | Image | Main product image | Required |
| gallery | Gallery | Additional product images | |
| category | Text | Product category | Required |
| brand | Text | Manufacturer/brand name | |
| sku | Text | Stock keeping unit | Unique |
| inStock | Boolean | Availability status | Required, Default: true |
| stockQuantity | Number | Items available | Min: 0 |
| featured | Boolean | Show on homepage | Default: false |
| rating | Number | Average customer rating | Min: 0, Max: 5 |
| reviewCount | Number | Number of reviews | Min: 0, Default: 0 |
| slug | Text | URL-friendly name | Required, Unique |
| specs | Rich Text | Technical specifications | |
| warranty | Text | Warranty information | |
| installation | Text | Installation difficulty | |

### Sample Data Entry:

```json
{
  "title": "Alpine S-Series S-S65 6.5\" Component Speakers",
  "description": "<p>Upgrade your sound with Alpine's S-Series component speakers...</p>",
  "shortDescription": "Premium 6.5\" component speakers with silk dome tweeters",
  "price": 199.99,
  "compareAtPrice": 249.99,
  "image": "/products/alpine-s65.jpg",
  "category": "Speakers",
  "brand": "Alpine",
  "sku": "ALP-SS65",
  "inStock": true,
  "stockQuantity": 12,
  "featured": true,
  "rating": 4.5,
  "reviewCount": 127,
  "slug": "alpine-s-series-s65-component-speakers",
  "specs": "<ul><li>Power: 80W RMS / 240W Peak</li><li>Frequency: 70Hz-29kHz</li></ul>",
  "warranty": "1 Year Manufacturer Warranty",
  "installation": "Intermediate"
}
```

### Categories to Use:
- Speakers
- Subwoofers
- Amplifiers
- Head Units
- Installation Accessories
- Sound Deadening
- Security Systems

---

## 📊 Collection 2: Services

**Purpose:** Store installation and service offerings

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| serviceName | Text | Name of service | Required |
| description | Rich Text | Detailed description | Required |
| shortDescription | Text | Brief summary | Max 100 chars |
| price | Number | Starting price | Required, Min: 0 |
| duration | Text | Estimated time | e.g., "2-3 hours" |
| image | Image | Service illustration | |
| featured | Boolean | Show on homepage | Default: false |
| category | Text | Service category | Required |
| difficulty | Text | Complexity level | |
| includes | Rich Text | What's included | |
| slug | Text | URL-friendly name | Required, Unique |

### Sample Data Entry:

```json
{
  "serviceName": "Premium Speaker Installation",
  "description": "<p>Professional installation of component or coaxial speakers...</p>",
  "shortDescription": "Expert speaker installation with sound optimization",
  "price": 149.99,
  "duration": "2-3 hours",
  "image": "/services/speaker-install.jpg",
  "featured": true,
  "category": "Installation",
  "difficulty": "Professional",
  "includes": "<ul><li>Speaker mounting</li><li>Wiring</li><li>Sound tuning</li></ul>",
  "slug": "premium-speaker-installation"
}
```

---

## 📊 Collection 3: Testimonials

**Purpose:** Store customer reviews and testimonials

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| customerName | Text | Customer's name | Required |
| review | Text | Testimonial text | Required, Max: 500 chars |
| rating | Number | Star rating | Required, Min: 1, Max: 5 |
| photo | Image | Customer photo (optional) | |
| serviceType | Text | What service they used | |
| location | Text | City, State | |
| vehicleInfo | Text | Their vehicle | e.g., "2021 Toyota Camry" |
| approved | Boolean | Show on website | Required, Default: false |
| featured | Boolean | Highlight testimonial | Default: false |
| date | Date | Review date | |

### Sample Data Entry:

```json
{
  "customerName": "Michael Rodriguez",
  "review": "Amazing service! The team installed a full sound system in my truck and it sounds incredible. Professional work and fair pricing.",
  "rating": 5,
  "photo": "/testimonials/michael-r.jpg",
  "serviceType": "Complete Audio System",
  "location": "Austin, TX",
  "vehicleInfo": "2020 Ford F-150",
  "approved": true,
  "featured": true,
  "date": "2024-11-01"
}
```

---

## 📊 Collection 4: FAQs (Optional)

**Purpose:** Frequently Asked Questions

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| question | Text | FAQ question | Required |
| answer | Rich Text | Detailed answer | Required |
| category | Text | FAQ category | Required |
| order | Number | Display order | Min: 0 |
| helpful | Number | Helpful count | Default: 0 |

---

## 📊 Collection 5: Cart (Optional - if not using Wix Stores)

**Purpose:** Shopping cart items

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| productId | Text | Product reference | Required |
| userId | Text | User identifier | |
| quantity | Number | Item quantity | Required, Min: 1 |
| addedDate | Date & Time | When added | Required |
| sessionId | Text | Session identifier | |

---

## 📊 Collection 6: Bookings (Optional)

**Purpose:** Store booking records (backup to ShopMonkey)

### Fields Schema:

| Field Name | Type | Description | Settings |
|------------|------|-------------|----------|
| confirmationNumber | Text | Order number | Required, Unique |
| customerName | Text | Full name | Required |
| customerEmail | Email | Email address | Required |
| customerPhone | Text | Phone number | Required |
| vehicleInfo | Text | Vehicle details | |
| serviceType | Text | Requested service | Required |
| scheduledDate | Date | Appointment date | Required |
| scheduledTime | Text | Appointment time | Required |
| status | Text | Booking status | Default: "Pending" |
| notes | Text | Special requests | |
| shopmonkeyId | Text | ShopMonkey order ID | |
| createdDate | Date & Time | Booking created | Auto |

---

## 🔄 Collection Relationships

### Products → Reviews
- Create a "Reviews" collection linked to Products
- Each review references a product ID

### Services → Bookings
- Bookings reference service names
- Track which services are most popular

---

## 📝 Collection Permissions

Set appropriate permissions in CMS Settings:

### Products Collection:
- **Read:** Anyone
- **Create:** Admin only
- **Update:** Admin only
- **Delete:** Admin only

### Testimonials Collection:
- **Read:** Anyone (only approved: true)
- **Create:** Admin only
- **Update:** Admin only
- **Delete:** Admin only

### Bookings Collection:
- **Read:** Admin only
- **Create:** Anyone (via forms)
- **Update:** Admin only
- **Delete:** Admin only

---

## 🎨 Content Guidelines

### Product Images:
- Size: 1200x1200px minimum
- Format: JPG or WebP
- File size: < 500KB
- Background: White or transparent

### Service Images:
- Size: 800x600px
- Format: JPG or WebP
- Style: Professional photography

### Testimonial Photos:
- Size: 200x200px
- Format: JPG
- Optional: Placeholder if no photo

---

## 🚀 Initial Data to Add

### Must-Have Products (Add 10-12):
1. Component speakers (2-3 options)
2. Subwoofers (2-3 options)
3. Amplifiers (2-3 options)
4. Head units/Receivers (2-3 options)
5. Installation kits
6. Wiring accessories

### Must-Have Services (Add 5-8):
1. Speaker Installation
2. Subwoofer Installation
3. Amplifier Installation
4. Head Unit Installation
5. Complete System Installation
6. Sound Deadening
7. Remote Start Installation
8. Backup Camera Installation

### Must-Have Testimonials (Add 6-10):
- Mix of different service types
- Various locations
- Different vehicle types
- All should be approved: true
- 2-3 should be featured: true

---

## 💾 Backup & Export

Regular backup schedule:
1. Weekly: Export all collections to CSV
2. Monthly: Full database backup
3. Before major updates: Complete export

### Export Process:
1. Go to CMS → Content Manager
2. Select collection
3. Click "..." → "Export to CSV"
4. Save file with date stamp

---

## 🔍 SEO Optimization for Collections

### Products:
- Use descriptive titles with keywords
- Include model numbers in titles
- Fill all meta fields
- Use consistent naming

### Services:
- Clear, benefit-focused titles
- Location keywords in descriptions
- Include pricing transparency

---

## 📊 Analytics Tracking

Track these metrics for collections:

- **Products:** Views, add-to-cart rate, purchases
- **Services:** Page views, booking conversion
- **Testimonials:** Display rate, click-through
- **FAQs:** Search queries, helpful votes

---

## ✅ Collection Setup Checklist

- [ ] Products collection created
- [ ] 10+ products added
- [ ] Product images uploaded
- [ ] Services collection created
- [ ] 6+ services added
- [ ] Testimonials collection created
- [ ] 6+ testimonials added (approved)
- [ ] FAQs collection created (optional)
- [ ] All collections have proper permissions
- [ ] Sample data tested in repeaters
- [ ] Mobile display verified
- [ ] Search functionality tested

---

This completes the CMS setup. All collections are now ready to be connected to your page code!
