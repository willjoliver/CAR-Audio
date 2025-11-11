/**
 * Contact Page Code - CARAudio
 * 
 * Handles contact form submissions with CallRail tracking.
 * 
 * Page Elements Required:
 * - #contactForm
 * - #nameInput, #emailInput, #phoneInput, #messageInput
 * - #submitBtn
 * - #successMessage, #errorMessage
 * 
 * @page Contact
 */

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';
import { trackFormSubmission } from 'backend/callrail';
import { sendContactNotification } from 'backend/email';
import { formatPhoneNumber, sanitizeInput } from 'backend/utils';

$w.onReady(function () {
  
  // Setup form
  setupFormValidation();
  
  // Form submission
  if ($w("#contactForm")) {
    $w("#contactForm").onSubmit(async (event) => {
      event.preventDefault();
      await handleContactSubmission();
    });
  }
  
  // Phone formatting
  if ($w("#phoneInput")) {
    $w("#phoneInput").onBlur(() => {
      const formatted = formatPhoneNumber($w("#phoneInput").value);
      $w("#phoneInput").value = formatted;
    });
  }
  
  // Setup call tracking
  setupCallTracking();
  
});

/**
 * Setup form validation
 */
function setupFormValidation() {
  // Email validation
  if ($w("#emailInput")) {
    $w("#emailInput").onCustomValidation((value, reject) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        reject("Please enter a valid email address");
      }
    });
  }
  
  // Phone validation (optional field)
  if ($w("#phoneInput")) {
    $w("#phoneInput").onCustomValidation((value, reject) => {
      if (value && value.trim() !== '') {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length !== 10 && cleaned.length !== 11) {
          reject("Please enter a valid phone number");
        }
      }
    });
  }
}

/**
 * Handle contact form submission
 */
async function handleContactSubmission() {
  // Show loading
  $w("#submitBtn").disable();
  $w("#submitBtn").label = "Sending...";
  
  try {
    // Collect and sanitize form data
    const formData = {
      name: sanitizeInput($w("#nameInput").value),
      email: sanitizeInput($w("#emailInput").value),
      phone: $w("#phoneInput") ? sanitizeInput($w("#phoneInput").value) : '',
      message: sanitizeInput($w("#messageInput").value),
      subject: $w("#subjectInput") ? sanitizeInput($w("#subjectInput").value) : 'General Inquiry'
    };
    
    // Track in CallRail
    await trackFormSubmission({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      formUrl: wixLocation.url,
      landingPageUrl: wixWindow.referrer || wixLocation.url
    });
    
    // Send notification email to admin
    await sendContactNotification(formData);
    
    // Show success message
    showSuccess();
    
    // Reset form
    $w("#contactForm").reset();
    
  } catch (error) {
    console.error('Contact form error:', error);
    showError('Failed to send message. Please try again or call us directly.');
    
  } finally {
    // Re-enable button
    $w("#submitBtn").enable();
    $w("#submitBtn").label = "Send Message";
  }
}

/**
 * Show success message
 */
function showSuccess() {
  if ($w("#successMessage")) {
    $w("#successMessage").show("FadeIn");
    
    setTimeout(() => {
      $w("#successMessage").hide();
    }, 5000);
  }
  
  // Hide form temporarily
  if ($w("#contactForm")) {
    $w("#contactForm").hide();
    setTimeout(() => {
      $w("#contactForm").show("FadeIn");
    }, 3000);
  }
}

/**
 * Show error message
 * @param {string} message - Error message
 */
function showError(message) {
  if ($w("#errorMessage")) {
    if ($w("#errorText")) {
      $w("#errorText").text = message;
    }
    $w("#errorMessage").show("SlideInFromTop");
    
    setTimeout(() => {
      $w("#errorMessage").hide();
    }, 5000);
  }
}

/**
 * Setup CallRail phone tracking
 */
function setupCallTracking() {
  // Add tracking class to phone numbers
  if ($w("#phoneNumber")) {
    $w("#phoneNumber").html = '<a href="tel:+15551234567" class="callrail-phone">(555) 123-4567</a>';
  }
  
  if ($w("#emergencyPhone")) {
    $w("#emergencyPhone").html = '<a href="tel:+15551234567" class="callrail-phone">(555) 123-4567</a>';
  }
}
