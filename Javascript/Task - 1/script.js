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


// ## Conditionals

// 1. Check whether a number is positive or negative.
// let number = Number(prompt("Enter Your Number..!" ))
// if(number < 0){
//    console.log("Negative Number")
// }else{
//    console.log("Positive Number")
// }


// 2. Check whether a number is even or odd.
// let number = Number(prompt("Enter Your Number..!" ))
// if(number %2 == 0){
//    console.log("Even Number")
// }else{
//    console.log("Odd Number")
// }


// 3. Check whether a person is eligible to vote.
// let age = Number(prompt("Enter Your Age To Check Your are Eligible Or Not..!" ))
// if(age >= 18){
//    console.log("Your are Eligible")
// }else{
//    console.log("You are Not Eligible")
// }


// 4. Find the largest among two numbers.
// let number1 = Number(prompt("Enter Your First Number..!" ))
// let number2 = Number(prompt("Enter Your Second Number..!" ))
// let number3 = Number(prompt("Enter Your Third Number..!" ))
// if(number1 > number2){
//    console.log(`${number1} is larger than ${number2}`)
// }else if (number2 > number1){
//    console.log(`${number2} is larger than ${number1}`)
// }else{
//    console.log("Both Are Equal")
// }


// 5. Find the largest among three numbers.
// let number1 = Number(prompt("Enter Your First Number..!" ))
// let number2 = Number(prompt("Enter Your Second Number..!" ))
// let number3 = Number(prompt("Enter Your Third Number..!" ))
// let number1 = 10
// let number2 = 100
// let number3 = 10
// if(number1 > number2 && number1 > number3){
//    console.log(`${number1} is larger than ${number2} and ${number3}`)
// }else if (number2 > number1 && number2 > number3){
//    console.log(`${number2} is larger than ${number1} and ${number3}`)
// } else if(number3 > number1 && number3 > number2){
//    console.log(`${number3} is larger than ${number1} and ${number2}`)
// }
// else{
//    console.log("All Are Equal")
// }


// 6. Check whether a year is a leap year.
// let year = 1900
// if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
//    console.log("Year Is Leap Year")
// }else{
//    console.log("Year Is Not Leap Year")
// }
// console.log(2024 % 400 == 0)

// 7. Check whether a number is divisible by both 3 and 5.
// let num = 15
// if(num % 3 == 0 && num % 5 == 0){
//    console.log(`num is divisible by both 3 and 5`)
// }else{
//    console.log(`num is not divisible by both 3 and 5`)
// }

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// let grade = 75
// if( grade > 90){
//    console.log("A")
// }else if(grade > 75 && grade < 91){
//    console.log("B")
// }else if(grade >= 50 && grade < 76){
//    console.log("C")
// }else{
//    console.log("Fail")
// }

// 1. Check whether a character is a vowel or consonant.
// let char = "a"
// if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//    console.log("Vowel")
// }else{
//    console.log("Consonant")
// }


// 2. Create a calculator using `switch` statement.
// let num1 = 10
// let num2 = 20
// let operator = "/"

// switch (operator) {
//    case "+":
//       console.log(num1 + num2)
//       break
//    case "-":
//       console.log(num1 - num2)
//       break 
//    case "*":
//       console.log(num1 * num2)
//       break
//    case "/":
//       console.log(num1 / num2)
//       break
//    default:
//       console.log("Invalid Operator")

// }

// 3. Print the day name based on a number (1–7).
// let day = 8
// switch(day){
//    case 1:
//       console.log("Monday")
//       break
//    case 2:
//       console.log("Tuesday")
//       break
//    case 3:
//       console.log("Wednesday")
//       break
//    case 4:
//       console.log("Thursday")
//       break
//    case 5:
//       console.log("Friday")
//       break
//    case 6:
//       console.log("Saturday")
//       break
//    case 7:
//       console.log("Sunday")
//       break
//    default:
//       console.log("Invalid Day")

// }

// 4. Check whether a username is `"admin"` and password is `"1234"`.
// let isAdmin = true
// let password = "15234"

// if(isAdmin && password == "1234"){
//    console.log("Welcome Admin")
// }else{
//    console.log("You Are Not A Admin")
// }


// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy.
// let str = ""
// if(str){
//    console.log("True")
// }else{
//    console.log("False")
// }


// 2. Check whether `0` is truthy or falsy.
// let num = 0
// if(num){
//    console.log("True")
// }else{
//    console.log("False")
// }

// 3. Check whether `[]` is truthy or falsy.
// let arr = []
// if(arr){
//    console.log("True")
// }else{
//    console.log("False")
// }


// 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.\
// let variable = null
// if(variable){
//    console.log("Valid")
// }else{
//    console.log("Invalid")
// }


// ## Ternary Operator

// 1. Check whether a number is even or odd using ternary operator.
// let  num = 11
// let result = (num % 2 == 0) ? "Even" : "Odd"
// console.log(result)

// 2. Check whether age is above 18 using ternary operator.
// let age = 17
// let result = (age>=18) ? "Adult" : "Minor"
// console.log(result);


// 3. Find the greater number between two values using ternary operator.
// let num1 = 122
// let num2 =122
// let result = (num1 > num2) ? "Num1 Big" : (num2 > num1) ? "Num2 Big" : "Equal"
// console.log(result);


// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// let name = "Mohammad Kaif"
// let age = 22
// let city = "Gwalior"
// let profession  = "Full Stack Developer"
// console.log(`Hello My Self ${name}, Im ${age} Year Old , Lives In ${city} & Im A ${profession}`)

// 2. Calculate the area of a rectangle.
// let width = 20
// let length = 30
// let areaOfRectangle = length * width
// console.log(areaOfRectangle)


// 3. Calculate the simple interest.
// let principle = 1000
// let rate = 10
// let time = 2
// let si =    
// console.log(si)


// 4. Convert temperature from Celsius to Fahrenheit.
// let celcius = 5
// let change = (celcius * 9/5) + 32
// console.log(`The Fahrenheit of ${celcius} degree celcius is ${change} Fahrenheit`);


// 5. Convert kilometers into meters.
// let kilometers = 5
// let meter = kilometers * 1000
// console.log(meter,"meters")

// 6. Calculate total marks and percentage of 5 subjects.
// let maths = 85
// let english = 40
// let hindi = 55
// let physics = 58
// let sanskrit = 50
// let total = maths + english + hindi + physics +sanskrit
// let percentage = (total / 500) * 100
// console.log(percentage);



// 7. Calculate electricity bill based on units consumed.
// let unit = 401
// if (unit > 0 && unit <= 100){
//    console.log("Your Bill Is" , unit * 4.2)
// }
// else if(unit> 100 && unit <= 200){

//    console.log("Your Bill Is" , unit * 6)
// }
// else if(unit > 200 && unit <= 400){
//    console.log("Your Bill Is" , unit * 8)
// }else{
//    console.log("Your Bill Is" , unit * 13)
// }



// 8. Create a username generator using first name and birth year.
// let firstName = "Kaif"
// let dob = "31/12/2002"
// dob = dob.split("/").join("")
// let username = firstName + dob
// console.log(username)
// console.log(dob)


// 9. Check whether a string starts with a specific letter.
// let str = "Kaif"
// str = str.toLowerCase()
// if(str.charAt(0) == "a" || str.charAt(0) == "b" || str.charAt(0) == "k" || str.charAt(0) == "c" || str.charAt(0) == "d"){

//    console.log("Start With String")
// }else{

//    console.log("Not Start With String")
// }



// 10. Count the total characters in a sentence excluding spaces.
// let str = "Mohammad Kaif Shaikh"
// let count = 0
// for (let i = 0; i < str.length; i++) {
//    if (str[i] != " ") {
//       count += 1
//    }
// }
// console.log(count)




// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater..
// let num1  = Number(prompt("Please Enter Your First Number"))
// let num2  = Number(prompt("Please Enter Your Second Number"))
// if(num1 > num2){
//    console.log("Num1" , num1)
// }else{
//    console.log("Num2" , num2)
// }


// 2. Check whether a number lies between 10 and 50.
// let num = 15
// if(num >= 10 && num<=50){
//    console.log(num ,"number lies between 10 to 50")
// }else{
//    console.log("Not")
// }


// 3. Check whether a password length is greater than 8.
// let password = "Kaifiya3112"
// if(password.length <= 8){
//    console.log("password  length must be greater than 8")
// }else{
//    console.log("User Registered Successfully")
// }

// 4. Check if a person can drive:
// - age > 18
// - has license = true
// let age = 17
// let hasLicense = false

// if (age >= 18) {
//    if (hasLicense) {
//       console.log("You Can Drive")
//    } else {
//       console.log("Dont Have License")
//    }
// } else {
//    console.log("User Is Not Eligible")
// }


// 1. Check whether a number is divisible by 2, 3, or both.
// let num = 18
// if(num % 2 == 0 && num % 3 ==0){
//    console.log("divisible")
// }else{
//    console.log("no")
// }

// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.

// let time = 25

// if(time < 12){
//    console.log("Good Morning")
// }else if(time >= 12 && time <= 18){
//    console.log("Good Afternoon")
// }else if(time > 18 && time < 25){
//    console.log("Good Evening")
// }else{
//    console.log("Invalid")
// }


// 3. Find whether a number is a multiple of 10.
// let num = 55
// if(num % 10 == 0){
//    console.log("divisible")
// }else{

//    console.log("not divisible")
// }

// 4. Create a simple discount calculator.
// let price = 10000
// let discount = 20
// let finalDiscount = discount/100
// // console.log(finalDiscount)
// let calculateDiscount = price * finalDiscount
// // console.log(calculateDiscount)

// let final = price - calculateDiscount
// console.log("After Applied" , discount + "$ discount" , "Your New Price Is" , final)


// 5. Check whether a product is in stock.
// let product = "Jockey Underwear"
// let inStock = true

// if (product) {
//    if (inStock) {
//       console.log("product in stock available")
//    } else {

//       console.log("product not in stock available")
//    }
// } else {

//    console.log("product Not ")
// }

// 6. Calculate final bill after GST.
// let price = 2000
// let gst = 18

// let findGst = (price * gst) / 100
// let finalPrice = price + findGst
// console.log(finalPrice)



// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.
function otpGenerator(val){
let otp = ""
for(let i  = 1 ; i <= val ; i++){
  otp += Math.floor(Math.random()*10)
}
// console.log(typeof(otp))
return otp
}



console.log(otpGenerator(6))
// otpGenerator(6)


// 2. Reverse a 3-letter string manually.
// 3. Find the last character of a string.
// 4. Convert a full name into uppercase initials.
// 5. Check whether two strings are equal ignoring case sensitivity.
// 6. Create a simple login validation system.
// 7. Find whether a number is a 2-digit or 3-digit number.
// 8. Create a mini ATM balance checker.
// 9. Simulate a traffic light system using `switch`.
// 10. Build a small marksheet generator using variables and conditionals.


//Basic Age Confirmation Code
// let uName = prompt("Please Tell Me Your Name");
// let verify;

// if (uName) {
//   verify = confirm("Are You Sure This Is Your Name");
// }

// if (verify) {
//   console.log("You Will Be A Developer", uName);
// }
