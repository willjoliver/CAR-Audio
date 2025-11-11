/**
 * Home Page Code - CARAudio
 * 
 * Main functionality for the CARAudio home page including
 * hero animations, product showcases, and dynamic content.
 * 
 * Page Elements Required:
 * - #heroSection, #heroTitle, #heroSubtitle
 * - #featuredProducts (repeater)
 * - #ctaButton, #bookNowBtn
 * - #testimonialsRepeater
 * - #headerPhone, #cartBadge
 * 
 * @page Home
 */

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import wixData from 'wix-data';

$w.onReady(function () {
  
  // Initialize page
  initializeAnimations();
  loadFeaturedProducts();
  loadTestimonials();
  setupButtonHandlers();
  setupCallTracking();
  
});

/**
 * Initialize page animations
 */
function initializeAnimations() {
  // Fade in hero elements
  if ($w("#heroTitle")) {
    $w("#heroTitle").show("FadeIn", { duration: 800 });
  }
  
  if ($w("#heroSubtitle")) {
    setTimeout(() => {
      $w("#heroSubtitle").show("FadeIn", { duration: 600 });
    }, 400);
  }
  
  if ($w("#ctaButton")) {
    setTimeout(() => {
      $w("#ctaButton").show("FadeIn", { duration: 600 });
    }, 800);
  }
}

/**
 * Setup button click handlers
 */
function setupButtonHandlers() {
  // CTA button - scroll to products
  if ($w("#ctaButton")) {
    $w("#ctaButton").onClick(() => {
      if ($w("#productsSection")) {
        $w("#productsSection").scrollTo();
      } else {
        wixLocation.to("/products");
      }
    });
  }
  
  // Book Now button - go to booking page
  if ($w("#bookNowBtn")) {
    $w("#bookNowBtn").onClick(() => {
      wixLocation.to("/booking");
    });
  }
  
  // Shop Now button
  if ($w("#shopNowBtn")) {
    $w("#shopNowBtn").onClick(() => {
      wixLocation.to("/products");
    });
  }
}

/**
 * Load featured products from CMS
 */
async function loadFeaturedProducts() {
  if (!$w("#featuredProducts")) return;
  
  try {
    const results = await wixData.query("Products")
      .eq("featured", true)
      .limit(4)
      .find();
    
    if (results.items.length > 0) {
      $w("#featuredProducts").data = results.items;
      
      $w("#featuredProducts").onItemReady(($item, itemData) => {
        // Set product data
        if ($item("#productImage")) {
          $item("#productImage").src = itemData.image;
        }
        if ($item("#productTitle")) {
          $item("#productTitle").text = itemData.title;
        }
        if ($item("#productPrice")) {
          $item("#productPrice").text = `$${itemData.price.toFixed(2)}`;
        }
        
        // Add hover animation
        if ($item("#productCard")) {
          $item("#productCard").onMouseIn(() => {
            $item("#productCard").show("Bounce", { duration: 300 });
          });
        }
        
        // View product details
        if ($item("#viewDetailsBtn")) {
          $item("#viewDetailsBtn").onClick(() => {
            wixLocation.to(`/product-page?product=${itemData._id}`);
          });
        }
        
        // Add to cart
        if ($item("#addToCartBtn")) {
          $item("#addToCartBtn").onClick(async () => {
            await addToCart(itemData);
          });
        }
      });
    }
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

/**
 * Load customer testimonials
 */
async function loadTestimonials() {
  if (!$w("#testimonialsRepeater")) return;
  
  try {
    const results = await wixData.query("Testimonials")
      .eq("approved", true)
      .limit(6)
      .find();
    
    if (results.items.length > 0) {
      $w("#testimonialsRepeater").data = results.items;
      
      $w("#testimonialsRepeater").onItemReady(($item, itemData) => {
        if ($item("#customerName")) {
          $item("#customerName").text = itemData.customerName;
        }
        if ($item("#testimonialText")) {
          $item("#testimonialText").text = itemData.review;
        }
        if ($item("#testimonialRating")) {
          $item("#testimonialRating").rating = itemData.rating || 5;
        }
      });
    }
  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}

/**
 * Add product to cart
 * @param {object} product - Product data
 */
async function addToCart(product) {
  try {
    await wixData.insert("Cart", {
      productId: product._id,
      quantity: 1,
      addedDate: new Date()
    });
    
    // Show notification
    showNotification("Added to cart!");
    
    // Update cart badge
    updateCartCount();
    
  } catch (error) {
    console.error("Add to cart error:", error);
    showNotification("Error adding to cart");
  }
}

/**
 * Update cart count badge
 */
async function updateCartCount() {
  if (!$w("#cartBadge")) return;
  
  try {
    const results = await wixData.query("Cart").find();
    const count = results.items.length;
    
    $w("#cartBadge").text = count.toString();
    if (count > 0) {
      $w("#cartBadge").show();
    }
  } catch (error) {
    console.error("Cart count error:", error);
  }
}

/**
 * Show notification message
 * @param {string} message - Notification text
 */
function showNotification(message) {
  if ($w("#notification")) {
    if ($w("#notificationText")) {
      $w("#notificationText").text = message;
    }
    $w("#notification").show("SlideInFromTop");
    
    setTimeout(() => {
      $w("#notification").hide("SlideOutToTop");
    }, 3000);
  }
}

/**
 * Setup CallRail phone tracking
 */
function setupCallTracking() {
  // Add tracking class to phone elements
  if ($w("#headerPhone")) {
    $w("#headerPhone").html = '<a href="tel:+15551234567" class="callrail-phone">(555) 123-4567</a>';
  }
  
  if ($w("#footerPhone")) {
    $w("#footerPhone").html = '<a href="tel:+15551234567" class="callrail-phone">(555) 123-4567</a>';
  }
}erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
