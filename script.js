const contactForm = document.getElementById('contact-form');
const responseEl = document.getElementById('form-response');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

const formData = new FormData();
    formData.append('formType', 'contact');
    formData.append('name', contactForm.name.value);
    formData.append('email', contactForm.email.value);
    formData.append('phone', contactForm.phone.value);
    formData.append('focus', contactForm.focus.value);
    formData.append('message', contactForm.message.value);
    
    try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbwtnQr1-U1lbLIQ2_93lQRtDENZjsYpzV52YpEDwEe-9b4B8zt9t9KjuDnu6ONmv29b/exec', {
          method: 'POST',
          body: formData
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


// Open/Close Navbar Hamburger Overlay Menu
function openMenu() {
    document.getElementById("overlayMenu").classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    document.getElementById("overlayMenu").classList.remove("active");
    document.body.classList.remove("menu-open");
}











