document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const responseEl = document.getElementById('form-response');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
      name: contactForm.elements["name"].value,
      email: contactForm.elements["email"].value,
      phone: contactForm.elements["phone"].value,
      message: contactForm.elements["message"].value
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbyuATD6ZuwyKYMXO0yZpsJfBxeqdd2KwEEM11WgwxJKJ7-4NLlXLTwElkPFgMpzRj4J/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.result === "success") {
        responseEl.textContent = "✅ Message sent!";
        contactForm.reset();
      } else {
        responseEl.textContent = "❌ Something went wrong.";
      }
    } catch (error) {
      console.error(error);
      responseEl.textContent = "⚠️ Error submitting the form.";
    }
  });
});

