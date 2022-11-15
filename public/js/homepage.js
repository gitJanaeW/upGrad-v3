async function loginRedirect() {
  document.location.replace("/login");
}
async function signupRedirect() {
  document.location.replace("/signup");
}

document
  .querySelector("#homepage-signup")
  .addEventListener("click", signupRedirect);

document
  .querySelector("#homepage-login")
  .addEventListener("click", loginRedirect);
