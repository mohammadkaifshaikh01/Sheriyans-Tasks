let loginPage = document.querySelector("#loginPage");
let registerPage = document.querySelector("#registerPage");
let showRegisterForm = document.querySelector("#showRegister");
let showLoginForm = document.querySelector("#showLogin");
let registerUsername = document.querySelector('#registerUsername')
let registerPassword = document.querySelector('#registerPassword')

//Show Register Form
showRegisterForm.addEventListener("click", () => {
  console.log("Click");
  registerPage.style.display = "flex";
  loginPage.style.display = "none";
});

//Show Login Form
showLoginForm.addEventListener("click", () => {
  console.log("Click");
  registerPage.style.display = "none";
  loginPage.style.display = "flex";
});



