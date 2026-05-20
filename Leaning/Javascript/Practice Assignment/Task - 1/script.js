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


// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
// 2. Check the type of different variables using `typeof`.
// 3. Store your mobile number in a variable and check its type.
// 4. Create a variable with value `null` and check its type.
// 5. Create a bigint number and print it.

// var str = "Kaif"
// var num = 6268352345
// var check = true
// var empty =  null;
// var nothing ;
// var bigint = 223372036854775807n

// console.log(typeof(str))
// console.log(typeof(num))
// console.log(typeof(check))
// console.log(typeof(empty))
// console.log(typeof(nothing))
// console.log(typeof(bigint))



// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// let str = "50"
// console.log(typeof(str))
// let num = Number(str)
// console.log(typeof(num))

// 2. Convert the number `100` into a string.
// let num = 1000
// console.log(typeof(num))
// let str = String(num)
// console.log(typeof(str))

// 3. Convert `"true"` into a boolean.
// let str = "true"
// console.log(typeof(str))
// let bool = Boolean(str)
// console.log(typeof(bool))

// 4. Check the output of:
// - `"5" + 2`
// console.log("5" + 2)

// - `"5" - 2`
// console.log("5" - 2)

// - `true + 1`
// console.log(true + 1)

// 1. Create a variable with value `"123abc"` and convert it into a number.
// var value = "123abc"
// console.log(typeof(value))
// let num = Number(value)
// console.log(typeof(num))
// console.log(num)


// 2. Use `parseInt()` on `"500px"`.
// let val = "500600kaif"
// let change = parseInt(val)
// console.log(typeof(change))
// console.log(change)


// ## Operators

// 1. Add two numbers and print the result.
// 2. Find the remainder when 25 is divided by 4.
// 3. Find the square of a number using exponent operator.
// 4. Increment a variable using `++`.
// 5. Decrement a variable using `-`.
// 6. Use `+=` operator to increase a variable by 20.
// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.
// 10. Create two boolean variables and test `&&`, `||`, and `!`.










//Basic Age Confirmation Code
// let uName = prompt("Please Tell Me Your Name");
// let verify;

// if (uName) {
//   verify = confirm("Are You Sure This Is Your Name");
// }

// if (verify) {
//   console.log("You Will Be A Developer", uName);
// }
