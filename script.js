    const contactForm = document.getElementById('contact-form');
    const responseEl = document.getElementById('form-response');

    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append('formType', 'contact');
      formData.append('name', contactForm.name.value);
      formData.append('email', contactForm.email.value);
      formData.append('phone', contactForm.phone.value);
      formData.append('message', contactForm.message.value);
    
      try {
        const res = await fetch('https://script.google.com/macros/s/AKfycbyuATD6ZuwyKYMXO0yZpsJfBxeqdd2KwEEM11WgwxJKJ7-4NLlXLTwElkPFgMpzRj4J/exec', {
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
        console.error(error);
        responseEl.textContent = "⚠️ Error submitting the form.";
      }
    });













