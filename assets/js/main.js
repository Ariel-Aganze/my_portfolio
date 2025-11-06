// This file can contain additional JavaScript functionality
// Currently, our main JavaScript is inline in the HTML file for simplicity

// Add any additional scripts here if needed

// Security measures
// XSS protection
function sanitizeInput(input) {
  return input.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

// Example of form input sanitization
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Get form inputs
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Sanitize inputs
      nameInput.value = sanitizeInput(nameInput.value);
      emailInput.value = sanitizeInput(emailInput.value);
      messageInput.value = sanitizeInput(messageInput.value);
      
      // Form processing happens here (currently handled by inline script)
    });
  }
});