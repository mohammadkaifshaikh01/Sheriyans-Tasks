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
// let arr = [1,2,3,4,5,6]
// while( arr.length > 0){
//   let ans =  arr.pop()
// //   console.log(ans)
// }
// console.log(arr)

// **Hint:** Use `while` loop


// # 7. unshift()

// ### Intermediate

// Add one username at beginning of array.


// var arr = [1,2,3,4,5,6,]
// arr.unshift("Kaif")
// console.log(arr)

// **Hint:** Use `unshift()`

// ### Hard
// Insert multiple elements at beginning without replacing existing ones.
// var arr = [1,2,3,4,5,6,]
// arr.unshift(10,20,30)
// console.log(arr)
// **Hint:** Multiple arguments


// # 8. shift()

// ### Intermediate

// Remove first element from array.
// let arr = ["first",2,6,8,4]
// console.log(arr.shift())

// **Hint:** Use `shift()`

// ### Hard

// Remove first element repeatedly until only 2 elements remain.
// let arr = [1,2,3,4,5,6]
// while(arr.length-1 >= 2){
//    arr.shift()
// }
// console.log(arr)
// **Hint:** Loop + length check

// # 9. splice()

// ### Intermediate

// Remove 2 elements from middle of array.

// **Hint:** `splice(start, deleteCount)`
// let arr = [1,2,3,4,5,6]
// console.log(arr.splice(2,2))

// ### Hard

// Replace 3 middle elements with 5 new values.
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.splice(2,3,"kaif","Shaikh",8,9,10))
// console.log(arr)
// **Hint:** Use insertion with splice


// # 10. reverse()

// ### Intermediate

// Reverse an array using method.

// let arr  =  [10,9,8,7,6,5]
// arr.reverse()
// console.log(arr)

// **Hint:** Use `reverse()`

// ### Hard

// Reverse only first half of array.
// let arr = [10,9,8,7,6,5,4]
// let half = Math.floor( arr.length /2)
// console.log(half)
// let firsthalf = arr.splice(0,half)
// let temp = firsthalf[2]
// firsthalf[2] = firsthalf[0]
// firsthalf[0] = temp
// console.log(firsthalf)


// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr);
// var half = Math.floor(arr.length / 2);
// for (let i = 0; i < Math.floor(half / 2); i++) {
//   let temp = arr[i];
//   arr[i] = arr[half - 1 - i];
//   arr[half - 1 - i] = temp;
// }
// console.log(arr);

// **Hint:** Manual swapping



// # 11. sort()

// ### Intermediate

// Sort numbers in ascending order.

// **Hint:** Compare function

// ### Hard

// Sort array so even numbers come first and odd later.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = []
// let arr3 = []
// let rev ;

// for(let i = 0 ; i < arr.length; i++){
//    if(arr[i] % 2 == 0){
//       arr2.push(arr[i])
//    }else{
//  arr3.push(arr[i])
//    }
// }
// // console.log(arr)
// rev = [...arr2 ,...arr3]
// console.log(rev)


//Second Approach
// arr.sort((a,b)=>{
//    return (a % 2) - (b%2)
// })
// console.log(arr)

// **Hint:** Custom compare logic



// # 12. slice()

// ### Intermediate

// Extract first 4 elements into new array.

// let arr = [1,2,3,4,5,6]
// var ans = arr.slice(0,4)
// console.log(ans)

// **Hint:** Use `slice()`

// ### Hard

// Create a copy excluding first and last element.

// // let arr = [1,2,3,4,5,6]
// var ans = arr.slice(1,arr.length-1)
// console.log(ans)
// console.log(arr)

// **Hint:** Use start and end indexes

// ---

// # 13. concat()

// ### Intermediate

// Merge two arrays.
// let arr = [1,2,3]
// let ar2 = [4,5,6]
// let ans = arr.concat(ar2)
// console.log(ans)

// **Hint:** Use `concat()`

// ### Hard
// Merge 3 arrays and remove duplicate values.
// let ar1 = [1,2,3]
// let ar2 = [4,5,6]
// let arr3 = [1,5,8]
// let arr = ar1.concat(ar2).concat(arr3)
// console.log(arr)
// let ans = []
// for(let i = 0 ; i < arr.length  ; i++){
//    if(!ans.includes(arr[i])){
//       ans.push(arr[i])
//    }
// }
// console.log(ans)

// // **Hint:** Combine + loop/includes


// # 14. includes()

// ### Intermediate

// Check whether `"apple"` exists in array.
// let arr = ["apple" , "mango" , "bananan" , "guava"]
// console.log(arr.includes("kaif"))

// **Hint:** Use boolean result

// ### Hard

// Check if all elements of one array exist inside another.

// **Hint:** Loop + includes
let arr = [1,2,3,4,5,6]
let arr1 = [1,20,30]
for(let i = 0 ; i < arr1.length  ; i++){
  if( arr.includes(arr1[i])){
   console.log("true") 
  }else{
   
 console.log("false")
  }
}

// ---

// # 15. indexOf()

// ### Intermediate

// Find index of `"Rahul"` in array.

// **Hint:** Use `indexOf()`

// ### Hard

// Find all positions of repeated number `5`.

// **Hint:** Loop through entire array