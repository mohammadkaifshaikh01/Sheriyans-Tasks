// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
// console.log("Hello JavaScript")

// 2. Print your name, age, and city using one `console.log()`.
// let name = "Kaif"
// let age = 22
// let city = "Gwalior"

// console.log(name , age , city)

// 3. Print a warning message using `console.warn()`.

// console.warn("This Is warning")
// 4. Print an error message using `console.error()`.

// console.error("This Is Error")
// 5. Use `console.table()` to display an array of 5 numbers.

// console.table(["K" , "A" , "I" , "F"])

// ---------------------------------

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.

// let studentName = "Kaif"

// 2. Create a variable `age` and print it.

// let age = 23

// console.log(age)
// 3. Create two variables and swap their values.

// let a = 10
// let b = 20
// let temp = a
//  a = b
//  b = temp

//  console.log("a" , a , "b" ,b)

// 4. Create a constant variable for `PI` and print it.

// const PI = 3.14159265359

// console.log("PI " ,PI)

// 5. Declare a variable without assigning a value and print it.

// let ass

// console.log(ass)

// 6. Create a variable `score` and increase it by 10.

// let score = 20

// score+=10

// console.log(score)

// 7. Create three variables for first name, last name, and full name.

// let firstName = "Mohammad"
// let lastName = "Kaif"
// let fullName = "Mohammad Kaif Shaikh"

// console.log(firstName,lastName,fullName)

//Name Verifcation begginer code



//Basic Age Confirmation Code
let uName = prompt("Please Tell Me Your Name");
let verify;

if (uName) {
  verify = confirm("Are You Sure This Is Your Name");
}

// console.log(verify);
if (verify) {
  console.log("You Will Be A Developer", uName);
}
