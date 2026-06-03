// ## 1. Array

// ### Intermediate

// Create an array of 5 favorite movies and print all values.
// let arr = ["3 Idiots" , "Off Campus" , "Sultan" , "BodyGuard" , "Heropanti"]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// for(let i = 0 ; i < arr.length ; i++){
//    console.log(arr[i])
// }
// **Hint:** Use indexing

// ### Hard

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
// let arr = ["string" , 55 , true ,["Kaif" , "Shaikh" , "True"]]
// console.log(arr[3][0])
// console.log(arr[3][1])
// console.log(arr[3][2])
// **Hint:** Mixed data types + nested indexing


// # 2. Indexing in Array

// ### Intermediate
// Print the first and last element of an array.
// let arr = [1,2,1,2,3,4,5,6,7,8,"last"]
// console.log(arr[0]) 
// // console.log(arr[arr.length - 1]) 
// console.log(arr.at(-1)) 

// **Hint:** Use `0` and `length - 1`

// ### Hard

// Swap the second and second-last element using indexing.

// let arr = ["First",2,1,2,3,4,5,6,7,8,"last"]
// let temp = arr[arr.length -1] // => temp = 1
// // console.log(temp)
// arr[arr.length-1] = arr[0]
// arr[0] = temp
// console.log(arr)
// // arr.at(-1) = temp
// // **Hint:** Use temporary variable



// # 3. Multi-Dimensional Arrays

// ### Intermediate

// Create a 2D array and print all first elements of inner arrays.
// let arr = [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9]
// ]
// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][0])
// **Hint:** Double indexing

// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index



// # 4. length

// ### Intermediate

// Find total elements in an array without counting manually.
// **Hint:** Use `.length`
// ### Hard
// Create a function that checks whether array length is even or odd.
// **Hint:** Use modulus operator
// let arr = [1,2,3,4,5,6,7,8]
// // console.log(arr.length) First 
// arr.length % 2 == 0 ? console.log("Even") : console.log("Odd")


// # 5. push()

// ### Intermediate

// Add 3 new elements at the end of array.
// let arr = [1,2,3,4,5,6]
// arr.push(7)
// arr.push(8)
// arr.push(9)
// console.log(arr)

// **Hint:** Use `push()`

// ### Hard

// Add elements dynamically inside loop from another array.
// let arr = [1,2,3,4,5,6]
// let res = []
// for(let i = 0 ; i < arr.length ; i++){
//    // console.log(arr[i])
//    res.push(arr[i])
// }
// console.log(res);
// **Hint:** Loop + push


// # 6. pop()

// ### Intermediate

// Remove last element and print removed value.
// let arr = [1,2,3,4,5,6]
// let res = arr.pop()
// console.log(res)

// **Hint:** Store `pop()` result

// ### Hard

// Keep removing elements until array becomes empty.
let arr = [1,2,3,4,5,6]
let i = 1
while( i < arr.length){
   console.log(arr[i])
   arr.pop()
   i++
}
console.log(arr)

// **Hint:** Use `while` loop