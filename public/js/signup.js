async function signupEventHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name").value.trim();
  const institution = document.querySelector("#institutionName").value.trim();
  const response = await fetch("/api/users/signup", {
    method: "post",
    body: JSON.stringify({
      email,
      password,
      name,
      institution,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#signup-submit")
  .addEventListener("click", signupEventHandler);
