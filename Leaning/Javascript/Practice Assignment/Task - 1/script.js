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
// let num1 = 10
// let num2 = 20
// console.log(num1+num2)

// 2. Find the remainder when 25 is divided by 4.
// let num = 25
// let solve = num % 4
// console.log(solve)

// 3. Find the square of a number using exponent operator.
// let square = 10
// let ans = square ** 2
// console.log(ans)

// 4. Increment a variable using `++`.
// let a = 1
// console.log(a++)

// 5. Decrement a variable using `-`.
// let a = 2
// a--
// console.log(a)
// console.log(a--)
// console.log(a)

// 6. Use `+=` operator to increase a variable by 20.
// let a = 20
// a+=20
// console.log(a)

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// let num1 = 20
// let num2 = 20
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 <= num2)
// console.log(num1 >= num2)

// 8. Check if two values are strictly equal using `===`.
// 9. Compare `"10"` and `10` using both `==` and `===`.
// let a = 10
// let b = "10"
// console.log(a == b)
// console.log(a === b)

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
// let a = true
// let b = false
// console.log(a && b)
// console.log(a || b)
// console.log(!a)


// ## Strings
// let name = "Kaif Alfiya Shaikh JavaScript"

// 1. Create a string and print its length.
// let b = name.length
// console.log(b)

// 2. Convert a string into uppercase.
// console.log(name.toUpperCase())

// 3. Convert a string into lowercase.
// console.log(name.toLowerCase())

// 4. Check if a string includes the word `"JavaScript"`.
// console.log(name.includes("JavaScript"))

// 5. Extract the word `"JavaScript"` from `"Kaif Alfiya Shaikh JavaScript"`.
// console.log(name.slice(19 , 29))

// 6. Replace `"apple"` with `"mango"` in a sentence.
// console.log(name.replace("JavaScript" , "Python"))

// 7. Split `"HTML,CSS,JS"` into an array.
// let language = "HTML,CSS,JS"
// let ans = language.split(",")
// console.log(ans)

// 8. Remove extra spaces from a string.
// let name = "Kaif "
// console.log(name.trim(" "))

// 9. Repeat the word `"Hi"` 5 times.
// console.log(name.repeat(5))


// 10. Print the first character of a string.
// console.log(name.charAt(0))

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
// let age = 20
// console.log(`My name is ${name} and I am ${age} years old`)


// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// let num = 4.4
// console.log(Math.round(num))

// 2. Find the square root of 81.
// let num1 = 81
// console.log(Math.sqrt(num1))

// 3. Find the maximum number from `10, 20, 5, 99`.
// console.log(Math.max(10, 20, 5, 99))

// 4. Generate a random number between 1 and 10.
// console.log(Math.random()*10)

// 5. Convert `"99.99"` into an integer.
// console.log(Number(99.99))

// 6. Check whether `25` is an integer or not.
// console.log(Number.isInteger(25))

// 7. Use `toFixed(2)` on `3.141592`.
// console.log(3.141592.toFixed(2))





//Basic Age Confirmation Code
// let uName = prompt("Please Tell Me Your Name");
// let verify;

// if (uName) {
//   verify = confirm("Are You Sure This Is Your Name");
// }

// if (verify) {
//   console.log("You Will Be A Developer", uName);
// }
