async function loginFormHandler(event) {
  event.preventDefault();
  console.log("hello");

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      const json = await response.json();
      alert(json.message);
    }
  }
}

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
