document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    // Placeholder — Replace with working endpoint if needed
    await fetch('https://example.com/submit', {
      method: 'POST',
      body: formData,
    });

    document.getElementById('form-response').textContent = '✅ Message sent successfully!';
    form.reset();
  } catch (error) {
    console.error(error);
    document.getElementById('form-response').textContent = '⚠️ Error submitting the form.';
  }
});
