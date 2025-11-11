/**
 * Booking Page Code - CARAudio
 * 
 * Handles the complete booking flow with ShopMonkey integration.
 * 
 * Page Elements Required:
 * - #bookingForm
 * - #firstNameInput, #lastNameInput, #emailInput, #phoneInput
 * - #vehicleYear, #vehicleMake, #vehicleModel
 * - #serviceDropdown, #datePicker, #timeSlotDropdown
 * - #notesInput, #submitBookingBtn
 * - #confirmationSection, #confirmationNumber
 * 
 * @page Booking
 */

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';
import { createCompleteBooking } from 'backend/shopmonkey';
import { trackFormSubmission } from 'backend/callrail';
import { sendBookingConfirmation } from 'backend/email';
import { formatPhoneNumber, generateOrderNumber } from 'backend/utils';

let selectedServices = [];

$w.onReady(function () {
  
  // Initialize form
  setupServiceSelection();
  setupDatePicker();
  setupFormValidation();
  
  // Form submission
  if ($w("#bookingForm")) {
    $w("#bookingForm").onSubmit(async (event) => {
      event.preventDefault();
      await handleBookingSubmission();
    });
  }
  
  // Phone formatting
  if ($w("#phoneInput")) {
    $w("#phoneInput").onBlur(() => {
      const formatted = formatPhoneNumber($w("#phoneInput").value);
      $w("#phoneInput").value = formatted;
    });
  }
  
});

/**
 * Setup service selection
 */
function setupServiceSelection() {
  const services = [
    { id: 'speaker_install', name: 'Speaker Installation', price: 199 },
    { id: 'subwoofer_install', name: 'Subwoofer Installation', price: 299 },
    { id: 'amplifier_install', name: 'Amplifier Installation', price: 399 },
    { id: 'head_unit_install', name: 'Head Unit Installation', price: 249 },
    { id: 'backup_camera', name: 'Backup Camera', price: 299 },
    { id: 'remote_start', name: 'Remote Start', price: 399 }
  ];
  
  // Populate service dropdown
  if ($w("#serviceDropdown")) {
    $w("#serviceDropdown").options = services.map(s => ({
      label: `${s.name} - $${s.price}`,
      value: s.id
    }));
    
    $w("#serviceDropdown").onChange(() => {
      selectedServices = [$w("#serviceDropdown").value];
    });
  }
}

/**
 * Setup date picker
 */
function setupDatePicker() {
  if (!$w("#datePicker")) return;
  
  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  $w("#datePicker").minDate = tomorrow;
  
  // Set maximum date to 60 days out
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  $w("#datePicker").maxDate = maxDate;
  
  // Disable Sundays
  $w("#datePicker").disabledDays = [0];
  
  // Load time slots when date selected
  $w("#datePicker").onChange(() => {
    loadTimeSlots();
  });
}

/**
 * Load available time slots
 */
function loadTimeSlots() {
  if (!$w("#timeSlotDropdown")) return;
  
  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM'
  ];
  
  $w("#timeSlotDropdown").options = timeSlots.map(time => ({
    label: time,
    value: time
  }));
}

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
  
  // Phone validation
  if ($w("#phoneInput")) {
    $w("#phoneInput").onCustomValidation((value, reject) => {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length !== 10 && cleaned.length !== 11) {
        reject("Please enter a valid phone number");
      }
    });
  }
}

/**
 * Handle booking form submission
 */
async function handleBookingSubmission() {
  // Show loading
  $w("#submitBookingBtn").disable();
  $w("#submitBookingBtn").label = "Processing...";
  
  try {
    // Collect form data
    const bookingData = {
      firstName: $w("#firstNameInput").value,
      lastName: $w("#lastNameInput").value,
      email: $w("#emailInput").value,
      phone: $w("#phoneInput").value,
      vehicle: {
        year: $w("#vehicleYear").value,
        make: $w("#vehicleMake").value,
        model: $w("#vehicleModel").value
      },
      services: selectedServices,
      scheduledDate: $w("#datePicker").value.toISOString(),
      scheduledTime: $w("#timeSlotDropdown").value,
      orderNotes: $w("#notesInput").value || '',
      customerNotes: `Website booking on ${new Date().toLocaleDateString()}`
    };
    
    // Create booking in ShopMonkey
    const bookingResult = await createCompleteBooking(bookingData);
    
    if (!bookingResult.success) {
      throw new Error(bookingResult.error || 'Booking failed');
    }
    
    // Track in CallRail
    await trackFormSubmission({
      name: `${bookingData.firstName} ${bookingData.lastName}`,
      email: bookingData.email,
      phone: bookingData.phone,
      formUrl: wixLocation.url,
      landingPageUrl: wixWindow.referrer || wixLocation.url,
      service: selectedServices.join(', '),
      vehicle: `${bookingData.vehicle.year} ${bookingData.vehicle.make} ${bookingData.vehicle.model}`
    });
    
    // Send confirmation email
    const orderNumber = bookingResult.data.confirmationNumber || generateOrderNumber();
    await sendBookingConfirmation({
      customerName: `${bookingData.firstName} ${bookingData.lastName}`,
      customerEmail: bookingData.email,
      orderNumber: orderNumber,
      scheduledDate: new Date(bookingData.scheduledDate).toLocaleDateString(),
      scheduledTime: bookingData.scheduledTime,
      serviceName: selectedServices.join(', '),
      vehicleInfo: `${bookingData.vehicle.year} ${bookingData.vehicle.make} ${bookingData.vehicle.model}`
    });
    
    // Show confirmation
    showConfirmation(orderNumber);
    
  } catch (error) {
    console.error('Booking error:', error);
    showError(error.message || 'Booking failed. Please try again.');
    
    // Re-enable button
    $w("#submitBookingBtn").enable();
    $w("#submitBookingBtn").label = "Book Installation";
  }
}

/**
 * Show booking confirmation
 * @param {string} orderNumber - Confirmation number
 */
function showConfirmation(orderNumber) {
  // Hide form
  if ($w("#bookingForm")) {
    $w("#bookingForm").hide();
  }
  
  // Show confirmation section
  if ($w("#confirmationSection")) {
    if ($w("#confirmationNumber")) {
      $w("#confirmationNumber").text = orderNumber;
    }
    $w("#confirmationSection").show("FadeIn");
  }
  
  // Scroll to top
  wixWindow.scrollTo(0, 0);
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
