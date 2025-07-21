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

function showMessage(message, color = 'green') {
  responseEl.textContent = message;
  responseEl.style.color = color;
  responseEl.classList.remove('hidden');

  // Hide after 5 seconds with fade out
  setTimeout(() => {
    responseEl.classList.add('hidden');
    setTimeout(() => {
      responseEl.textContent = '';
      responseEl.classList.remove('hidden'); // Reset for future use
    }, 500); // allow fade-out transition
  }, 3000);
}

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  // Prepare data using URLSearchParams to avoid CORS preflight
  const data = new URLSearchParams();
  data.append('formType', 'contact');
  data.append('name', contactForm.name.value);
  data.append('email', contactForm.email.value);
  data.append('phone', contactForm.phone.value);
  data.append('interest', contactForm.interest.value); 
  data.append('message', contactForm.message.value);

  try {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyHRrDVt2dXcvzWEqVJM0uhwXuLNkKYmY7cZF_Tk7rM0HRI_7Brw_ASPIM_UES6c4Hg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    });

    const result = await res.json();
    if (result.result === 'success') {
      contactForm.reset();
      showMessage("✅ Message sent successfully!");
    } else {
      showMessage("❌ Something went wrong. Please try again.", 'darkred');
    }
  } catch (error) {
    console.error('Form submission failed:', error);
    showMessage("⚠️ Error submitting the form: " + error.message, 'darkred');
  }
});






















