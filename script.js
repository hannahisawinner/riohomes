document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const responseEl = document.getElementById("form-response");

  try {
    const res = await fetch("YOUR_SCRIPT_URL_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.result === "success") {
      responseEl.textContent = "✅ Message sent!";
      e.target.reset();
    } else {
      responseEl.textContent = "❌ Something went wrong.";
    }
  } catch (error) {
    console.error(error);
    responseEl.textContent = "⚠️ Error submitting the form.";
  }
});
