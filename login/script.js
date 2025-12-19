document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  try {
    // Simuleer een API call (vervang /api/login door jouw echte endpoint)
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error("Serverfout of netwerkprobleem");
    }

    const data = await response.json();

    if (data.success) {
      message.style.color = "green";
      message.textContent = "Login geslaagd. Welkom, " + username + "!";
      // eventueel redirect: window.location.href = "/dashboard.html";
    } else {
      message.style.color = "red";
      message.textContent = "Gebruiker niet gevonden. Registreer een nieuw account.";
    }
  } catch (error) {
    message.style.color = "red";
    message.textContent = "Er ging iets mis: " + error.message;
  }
});
