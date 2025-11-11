# CARAudio - Custom Code Snippets

This file contains all custom code snippets to add to your Wix Studio site.

---

## 🔧 Add to Site Settings → Custom Code

### 1. Add to HEAD Section

#### CallRail Tracking Script

```html
<!-- CallRail Call Tracking & Form Tracking -->
<script>
  (function(c,a){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  c.callrail=c[a]})(window,'callrail');
  
  callrail('config', 'YOUR_CALLRAIL_ACCOUNT_ID', {
    formCapture: {
      enabled: true,
      selectors: [
        '#bookingForm',
        '#contactForm',
        '#quoteForm',
        'form[name="contact"]',
        'form[name="booking"]'
      ]
    },
    swap: {
      format: '(###) ###-####',
      callback: function(phoneNumber) {
        console.log('CallRail number swapped:', phoneNumber);
      }
    }
  });
</script>
<script async src="//cdn.callrail.com/companies/YOUR_COMPANY_ID/tracker.js"></script>

<!-- Replace:
  YOUR_CALLRAIL_ACCOUNT_ID with your actual account ID
  YOUR_COMPANY_ID with your actual company ID
-->
```

#### Google Analytics (Optional)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Replace GA_MEASUREMENT_ID with your Google Analytics ID -->
```

#### Facebook Pixel (Optional)

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>

<!-- Replace YOUR_PIXEL_ID with your actual Facebook Pixel ID -->
```

---

### 2. Add to BODY - END Section

#### Enhanced CallRail Event Tracking

```html
<script>
// Track booking conversions
document.addEventListener('DOMContentLoaded', function() {
  
  // Track booking form submission
  if (window.callrail) {
    window.callrail('onReady', function() {
      
      // Track successful booking
      window.trackBookingConversion = function(orderNumber, value) {
        if (typeof gtag === 'function') {
          gtag('event', 'purchase', {
            transaction_id: orderNumber,
            value: value,
            currency: 'USD',
            items: [{
              item_name: 'Installation Booking',
              price: value
            }]
          });
        }
        
        if (typeof fbq === 'function') {
          fbq('track', 'Purchase', {
            value: value,
            currency: 'USD'
          });
        }
      };
      
      // Track contact form submission
      window.trackContactForm = function() {
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission'
          });
        }
        
        if (typeof fbq === 'function') {
          fbq('track', 'Lead');
        }
      };
      
    });
  }
  
});
</script>
```

#### Live Chat Widget (Optional - Tawk.to)

```html
<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>

<!-- Replace YOUR_TAWK_ID with your Tawk.to widget ID -->
```

---

## 🎨 Add to Site Styles (Optional)

### Custom CSS for CallRail Phone Numbers

```css
/* Add to Site Design → Custom CSS */

/* Style CallRail phone numbers */
.callrail-phone {
  color: #FF6B35;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.callrail-phone:hover {
  color: #E55A2B;
  text-decoration: underline;
}

/* Ensure phone numbers are visible on mobile */
@media (max-width: 768px) {
  .callrail-phone {
    font-size: 18px;
    display: inline-block;
    padding: 10px 15px;
    background: #FF6B35;
    color: white;
    border-radius: 5px;
    text-align: center;
  }
}
```

### Loading Animation

```css
/* Loading spinner for forms */
.loading-spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #FF6B35;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 📱 Mobile Detection Script

```html
<script>
// Detect mobile devices
(function() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    document.body.classList.add('mobile-device');
    
    // Make phone numbers clickable
    var phoneElements = document.querySelectorAll('.callrail-phone');
    phoneElements.forEach(function(el) {
      el.setAttribute('href', 'tel:' + el.textContent.replace(/\D/g, ''));
    });
  }
})();
</script>
```

---

## 🔔 Browser Notification Permission (Optional)

```html
<script>
// Request notification permission for updates
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(function() {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }, 5000); // Ask after 5 seconds on site
  }
}

document.addEventListener('DOMContentLoaded', requestNotificationPermission);
</script>
```

---

## 🎯 Exit Intent Popup Trigger

```html
<script>
// Detect exit intent and show special offer
var exitIntentShown = false;

document.addEventListener('mouseout', function(e) {
  if (e.clientY < 0 && !exitIntentShown) {
    exitIntentShown = true;
    
    // Show exit intent popup (you'll need to create this in Wix)
    if (typeof $w !== 'undefined' && $w('#exitIntentPopup')) {
      $w('#exitIntentPopup').show();
    }
    
    // Track exit intent
    if (typeof gtag === 'function') {
      gtag('event', 'exit_intent', {
        event_category: 'Engagement',
        event_label: 'Exit Intent Triggered'
      });
    }
  }
});
</script>
```

---

## 📊 Enhanced Analytics Tracking

```html
<script>
// Custom event tracking
window.trackCustomEvent = function(category, action, label, value) {
  // Google Analytics
  if (typeof gtag === 'function') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // Facebook Pixel
  if (typeof fbq === 'function') {
    fbq('trackCustom', action, {
      category: category,
      label: label,
      value: value
    });
  }
  
  // CallRail (if applicable)
  if (window.callrail) {
    console.log('Event tracked:', category, action, label);
  }
};

// Track button clicks
document.addEventListener('click', function(e) {
  var button = e.target.closest('button');
  if (button) {
    var buttonText = button.textContent.trim();
    trackCustomEvent('Button', 'click', buttonText);
  }
});

// Track scroll depth
var scrollTracked = {25: false, 50: false, 75: false, 100: false};

window.addEventListener('scroll', function() {
  var scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  Object.keys(scrollTracked).forEach(function(milestone) {
    if (scrollPercent >= milestone && !scrollTracked[milestone]) {
      scrollTracked[milestone] = true;
      trackCustomEvent('Scroll', 'depth', milestone + '%');
    }
  });
});
</script>
```

---

## 🔒 Security Headers (Add via Wix Settings)

These should be configured in Wix Studio Settings → Advanced → HTTP Headers:

```
Content-Security-Policy: default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.callrail.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## ✅ Implementation Checklist

- [ ] CallRail script added to HEAD
- [ ] Google Analytics added (if using)
- [ ] Facebook Pixel added (if using)
- [ ] Event tracking scripts added to BODY
- [ ] Mobile detection script added
- [ ] Custom CSS added (if needed)
- [ ] Live chat widget added (if using)
- [ ] All YOUR_XXX_ID placeholders replaced with actual IDs
- [ ] Scripts tested in preview mode
- [ ] Tracking verified in dashboards
- [ ] Mobile functionality tested

---

## 🧪 Testing Your Custom Code

### Test CallRail:
1. Open browser dev tools (F12)
2. Go to Console tab
3. You should see CallRail initialization messages
4. Submit a form and check Network tab for CallRail API calls

### Test Google Analytics:
1. Install Google Analytics Debugger extension
2. Open dev tools → Console
3. Look for GA tracking confirmations
4. Check Real-Time reports in GA dashboard

### Test Facebook Pixel:
1. Install Facebook Pixel Helper extension
2. Visit your site
3. Click extension icon
4. Verify pixel is firing correctly

---

Save this file for reference and update placeholder IDs with your actual tracking IDs!
