// # Part 1: Variables, Functions & Conditions

// Q1. Create a function that returns the sum of two numbers.

// function add(a,b){
// return a + b
// }
// console.log(add(10,20))
// // Output: 30


// Q2. Create a function that returns the square of a number.

// function square(sq){
// return sq *  sq
// }
// console.log(square(5))

// Q3. Create a function that checks whether a number is Even or Odd.

// function checkEvenOdd(number){
// return number % 2 == 0 ? "Even" : "Odd"
// }
// console.log(checkEvenOdd(6))


// Q4. Create a function that returns the larger number among two numbers.
// function max(a,b){
// if(a > b){
//    return a
// }else{
//    return b
// }
// }
// console.log(max(50,20))


// Q5. Create a function that checks if a person is eligible to vote.x`
// function isEligible(age){
// if(age >= 18){
//    return "eligible"
// }else{
//    return "not eligible"
// }
// }
// console.log(isEligible(18));




// # Part 2: Loops

//Q6. Print numbers from 1 to 50 using a loop.
// let n = 51
// for(let i = 1; i < n ; i++){
//    console.log(i)
// }


//Q7. Print all even numbers between 1 and 100.
// let n = 101
// for(let i = 1; i < n ; i++){
//    if( i % 2 == 0){
//       console.log(i)
//    }
// }


// Q8. Find the sum of numbers from 1 to 100.
// function sumOfNumber(n){
// let sum = 0
// for(let i = 0 ; i < n ; i++){
//    sum+=i
// }
// return sum
// }
// console.log(sumOfNumber(101))


// Q9. Print the multiplication table of a number.
// function multiplication(n){
//  for(let i = 1 ; i <= 10 ; i++){
//    console.log(`${n} X ${i} = ${n*i}`)
// }
// }
// multiplication(10)


// Q10. Count how many digits are present in a number.
// function countDigits(n){
// let ans = 0
// while(n > 0){
//    let second = n % 10
//    ans+=1
//    n = Math.floor(n/10)
//    // console.log(n)
// }
// return ans
// }
// let n = 123456
// console.log(countDigits(n));


// Part 3: Strings
// Q11. Reverse a string.

// function reverseString(str){
//    let rev = ""
// for(let i = str.length-1 ; i>=0 ; i--){
//    rev+=str[i]
// }
// return rev
// }
// console.log(reverseString("hello"))


// Q12. Count vowels in a string
// function countVowels(str){
// let str1 = str.split("")
// let count = 0
// // console.log(str1);
// for(let i = 0 ; i < str1.length ; i++){
//    if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
//       count++
//    }
// }
// return count
// }
// console.log(countVowels("javascript"))


// Q13. Check whether a string is a palindrome.
// function isPalindrome(str){
//    let rev = ""
// for(let i = str.length-1 ; i>=0 ; i--){
//    rev+=str[i]
// }
// if(str === rev){
//    return "palindrome"
// }else{
//    return "Not"
// }
// // return rev
// }
// console.log(isPalindrome("kaif"))


// // Q14. Convert the first letter of every word to uppercase.
// function capitalize(str){
// str1 = str.split(" ")
// // console.log(str1);
// for(let i = 0 ; i < str1.length ; i++){
//    if(i == indexOf(0)){
//       str1[i].toUpperCase()
//    }
//    console.log(str1[i])
// }

// }

// capitalize("hello world")


// Q15. Count how many times a character appears in a string.
// function countChar(char , app){
// let count = 0
// for(let i = 0 ; i < char.length ; i++){
//    if(char[i] == app){
//       count++
//    }
// }
// return count
// }
// console.log(countChar("kaif" , "a"))


// Part 4: Arrays

// Q16. Find the largest number in an array.


// Q17. Find the smallest number in an array.

// Q18. Find the sum of all array elements.

// Q19. Return only even numbers from an array.

// Q20. Remove duplicate values from an array.




//  🎯 Bonus Task (For Fast Learners)

// Build a **Student Marks Calculator**.

// Input:

// [50, 60, 70, 80, 90]

// Output:

// Highest Marks: 90
// Lowest Marks: 50
// Average Marks: 70
// Total Marks: 350