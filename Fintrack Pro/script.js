let loginPage = document.querySelector("#loginPage");
let registerPage = document.querySelector("#registerPage");
let showRegisterForm = document.querySelector("#showRegister");
let showLoginForm = document.querySelector("#showLogin");
let registerUsername = document.querySelector("#registerUsername");
let registerPassword = document.querySelector("#registerPassword");


//User Data Array
let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

//Register Form Elements
let registerForm = document.querySelector("#registerForm");
//Login Form Elements
let loginForm = document.querySelector("#loginForm");

//Logo
let logo = document.querySelector(".logo")

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

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userName = event.target[0].value;
  let password = event.target[1].value;

  if (userName.trim() === "" || password.trim() === "") {
    alert("All Field Are Mandotry");
    return;
  }

  let obj = {
    id: Date.now(),
    userName,
    password,
  };
  usersData.push(obj);

  localStorage.setItem("usersData", JSON.stringify(usersData));

  registerForm.reset();
  alert("User Registered Successfully.....")
  registerPage.style.display = "none";
  loginPage.style.display = "flex";
});


loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // console.log(event.target)
  let value = event.target[0].value
  
  let check = usersData.find((elem) => elem.userName === value)
  if(check){
    alert("Login Successfully")
    loginPage.style.display = "none";
    logo.style.display = "none";
  }else{
    alert("You Are Not Registered")
     registerPage.style.display = "flex";
  }


  loginForm.reset()
})