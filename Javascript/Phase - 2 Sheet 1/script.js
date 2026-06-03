// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// function greet(name){
// console.log("Hello" , name)
// }
// greet("Kaif")

// 2. Create a function `add(a, b)` that returns the sum.
// function add(a,b){
//    return `Sum ${a + b}`
// }
// console.log(add(5,10))

// 3. Write a function to calculate the square of a number.
// function square(val){
//    return `Square ${val * val}`
// }
// console.log(square(5))

// 4. Create a function that checks whether a number is even or odd.
// function checkEvenOdd(val){
//    return val % 2 == 0 ? "Even" : "Odd"
// }
// console.log(checkEvenOdd(6))


// 5. Write a function that converts Celsius to Fahrenheit.
// function changeCelciusFahrenheit(cel){
// return `celcius to Fahreneeit ${(cel * 9/5) + 32}`
// }
// console.log(changeCelciusFahrenheit(20))

// 6. Create a function with default parameter `"Guest"`.
// function greet(user = "Guest"){
//  return `Hello ${user}`
// }

// console.log(greet())


// 7. Write a function that returns the greater of two numbers.
// function maxNumber(a,b){
//  return Math.max(a,b)
// }
// console.log(maxNumber(99 , 85))


// 8. Create a function to calculate area of rectangle.
// function areaOfRectangle(w ,l){
// return (w * l)
// }
// console.log(areaOfRectangle(10 , 20))

// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// function isAdult(age){
// if(age >= 18){
//    return "Adult"
// }else{
//    return "Minor"
// }
// }
// console.log(isAdult(18))

// 10. Create a function to reverse a string.
// function revString(str){
//    var rev = ""
// for(let i = str.length-1 ; i >= 0 ; i--){
//    rev+=str[i]
// }
// return rev
// }
// console.log(revString("Alfiya"))




// ## Intermediate Level

// 1. Write a function expression for multiplication.
// let multiplication = function(num , num1){
// return num * num1
// }
// console.log(multiplication(5 , 10))

// 2. Convert a normal function into an arrow function.
// let multiplication = (num , num1) =>{
// return num * num1
// }
// console.log(multiplication(5 , 10)).


// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// let multiplication = (...rest) =>{
//    let num = 0
// for(let i = 0 ; i <= rest.length-1 ; i++){
//    num+=rest[i]
// }
// return num
// }
// console.log(multiplication(5,10 ,30,40,50,60,70))

// 4. Write a function that counts vowels in a string.
// function countVowels(str){
//    let vowel = 0
//    for(let i = 0 ; i < str.length ; i++){
//       // console.log(i);/
//       if(str[i] == "a" || str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u"){
//          vowel++
//       }
//    }
//    return vowel
// }
// console.log(countVowels("kaif"))

// 5. Create a function that checks if a string is palindrome.
// function isPalindrome(str){
//    // console.log(str.length-1)
//    let rev = ""
//    for(let i = str.length-1 ; i >= 0 ; i--){
//       rev+=str[i]
//    }
// // console.log(rev);
// // console.log(str);
//    if(rev == str) return true
//    else return false
// }
// console.log(isPalindrome("madams"));


// 6. Write a callback function example using `setTimeout`.
// setTimeout(function(){
//    console.log("Hello Im Soldier Boy")
// },3000)

// 7. Create a higher-order function that executes another function twice.
// function higherOrder(call){
// console.log("Hello Higher Order")
// call()
// call()
// }

// function callBack(){
//    console.log("Hello Call Back")
// }
// higherOrder(callBack)


// 8. Write a function that returns another function.
// function higherOrder(call){
// return call
// }
// function callBack(){
//   console.log("executes")
// }
// console.log(higherOrder(callBack))

// 9. Create a pure function for subtraction.
// function subtraction(a,b){
// return a - b
// }
// console.log(subtraction(10,50))

// 10. Create an impure function using global variable modification.
// var count = 0
// function global(n){
// for(let i  =  0 ; i < n ; i++){
//    count++
// }
// return count
// }

// console.log(global(10))
// console.log(global(10))


// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
// function factorial(n){
// let result = 1
// for(let i = 1 ; i <= n ; i++){
//    result*=i
// }
// return result
// }
// console.log(factorial(6))

// 2. Write recursive Fibonacci function.
// function Fibonacci(a,b){
// console.log(a+b)
// }

// Fibonacci(0 ,1)

// 3. Create a function that finds power using recursion.
// 4. Create an IIFE that prints `"Executed"`.
// (function(){
//    console.log("executes")
// }())
// 5. Write a function that memoizes factorial calculation.
// 6. Create a closure counter function.
// function counter(){
//    let count = 0
//    return function timer() {
//   count+=1
//   return count
// }
// }

// let councct = counter()
// console.log(councct())
// console.log(councct())
// console.log(councct())


// 7. Write a function currying example for addition.
// function currying(a){
// return function(b) {
//   return function(c) {
//     return a + b + c
//   }
// }
// }
// console.log(currying(2)(5)(8))


// 8. Create debounce function logic.
// 9. Create throttle function logic.
// 10. Write a function that executes only once.

let hasExcuted = function(a){
  return a + a
}
console.log(hasExcuted(5))
console.log(hasExcuted(5))

// 11. Create custom implementation of `map`.
// 12. Create custom implementation of `filter`.
// 13. Create custom implementation of `reduce`.
// 14. Create custom `forEach`.