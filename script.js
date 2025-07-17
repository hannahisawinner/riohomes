// Navbar hamburger menu toggle
function openMenu() {
  document.getElementById("overlayMenu").classList.add("active");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.getElementById("overlayMenu").classList.remove("active");
  document.body.classList.remove("menu-open");
}





// Script for submitting the Contact Form
const contactForm = document.getElementById('contact-form');
const responseEl = document.getElementById('form-response');

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  // Prepare data using URLSearchParams to avoid CORS preflight
  const data = new URLSearchParams();
  data.append('formType', 'contact');
  data.append('name', contactForm.name.value);
  data.append('email', contactForm.email.value);
  data.append('phone', contactForm.phone.value);
  data.append('interest', contactForm.focus.value); // <== "focus" is the select's name
  data.append('message', contactForm.message.value);

  try {
    const res = await fetch('https://script.google.com/macros/s/AKfycbwtnQr1-U1lbLIQ2_93lQRtDENZjsYpzV52YpEDwEe-9b4B8zt9t9KjuDnu6ONmv29b/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    });

    const result = await res.json();
    if (result.result === 'success') {
      responseEl.textContent = "✅ Message sent successfully!";
      contactForm.reset();
    } else {
      responseEl.textContent = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    console.error('Form submission failed:', error);
    responseEl.textContent = "⚠️ Error submitting the form: " + error.message;
  }
});






















