/**
 * Simple Email Notification Script
 * Copy this to your Google Form's Script Editor
 * 
 * Setup:
 * 1. Open your form → Extensions → Apps Script
 * 2. Delete existing code and paste this
 * 3. Update COORDINATOR_EMAIL below
 * 4. Click Save
 * 5. Click clock icon → Add Trigger → onFormSubmit → From form → On form submit
 */

// ============================================
// CONFIGURATION - UPDATE THIS!
// ============================================

const COORDINATOR_EMAIL = 'market-coordinator@school-domain.edu';

// ============================================
// EMAIL NOTIFICATION
// ============================================

/**
 * Sends email to coordinator when form is submitted
 * Works for both vendor and volunteer forms
 */
function onFormSubmit(e) {
  try {
    // Get form responses
    const responses = e.values;
    const timestamp = responses[0];
    const email = responses[1];
    
    // Get form name to identify which form was submitted
    const form = FormApp.getActiveForm();
    const formTitle = form.getTitle();
    
    // Determine if vendor or volunteer form
    const isVendor = formTitle.toLowerCase().includes('vendor');
    
    // Build email subject and body based on form type
    let subject, body;
    
    if (isVendor) {
      // Vendor form submission
      const businessName = responses[2] || 'Unknown';
      const contactName = responses[3] || 'Unknown';
      
      subject = `New Vendor Application: ${businessName}`;
      body = `
New vendor application received!

Business: ${businessName}
Contact: ${contactName}
Email: ${email}
Submitted: ${timestamp}

View responses:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;
      
    } else {
      // Volunteer form submission
      const name = responses[2] || 'Unknown';
      
      subject = `New Volunteer: ${name}`;
      body = `
New volunteer signup!

Name: ${name}
Email: ${email}
Submitted: ${timestamp}

View responses:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
`;
    }
    
    // Send email to coordinator
    MailApp.sendEmail(COORDINATOR_EMAIL, subject, body);
    
    // Log success
    console.log('Email sent successfully to:', COORDINATOR_EMAIL);
    
  } catch (error) {
    // Log any errors
    console.error('Failed to send email:', error);
  }
}

// ============================================
// TEST FUNCTION
// ============================================

/**
 * Test that emails are working
 * Run this manually to verify setup
 */
function testEmail() {
  try {
    MailApp.sendEmail(
      COORDINATOR_EMAIL,
      'Test - Market System Working',
      'This is a test email. Your form notifications are set up correctly!'
    );
    
    // Show success message
    SpreadsheetApp.getUi().alert('Test email sent to: ' + COORDINATOR_EMAIL);
    
  } catch (error) {
    SpreadsheetApp.getUi().alert('Error: ' + error.message);
  }
}