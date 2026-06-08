// let price = [100,250,500,150,700]
// let result = price.filter((elem)=>{
//  return elem > 300
// })
// console.log(result)

// Question - 2
// let marks = [80,90,70,85,95]
// let sum = marks.reduce((acc , val) => acc += val )
// let average = sum/marks.length
// console.log(average)

// Question - 3

// let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1, 2, 2, 2, 2];
// var obj = {};
// for (let i = 0; i <= numbers.length - 1; i++) {
//   // console.log(numbers[i])
//   if (obj[numbers[i]]) {
//     obj[numbers[i]] += 1;
//   } else {
//     obj[numbers[i]] = 1;
//   }
// }
// // console.log(obj)
// let frequency = 0;
// let mostFrequecy = 0;
// for (let key in obj) {
//   // console.log(obj[key])
//   if (obj[key] > frequency) {
//     frequency = obj[key];
//     mostFrequecy = key;
//   }
// }
// console.log(mostFrequecy);

// Question - 4

// let user= {
// name:"Ritik",
// age:20
// };
// user.age = 21
// console.log(user)

// Question - 5

// let user= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };
// let rest = Object.entries(user)
// for(let [key , value] of rest){
//    console.log(value)
// }

// Question - 6

// let employees = {
//    aman: 25000,
//    ritik: 50000,
//    priya: 45000
// };
// let salary = 0
// // let obj = {}
// let obj = []
// for(let key in employees){
//    // console.log(key , employees[key])
//    if(employees[key] > salary){
//       salary = employees[key]
//       // obj = {name : key,
//       //    salary : employees[key]
//       // }
//        obj =[key ,employees[key]]
//    }
// }
// // console.log(obj.name)
// console.log(obj[0])

// Question - 7

// function greet(name){
// return `Hello ${name}`
// }
// console.log(greet("Kaif"))

// Question - 8

// function calculateDiscount(price){
// let discount = price * (10 / 100)
// let finalPrice = price - discount
// return finalPrice
// }

// console.log(calculateDiscount(500))

// Question - 9

// function sum(...numbers){
// return numbers.reduce((acc , value) => acc+=value , 0)
// }

// console.log(sum(1,2,3,4,5))

// Question - 10
// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];
// function getAdults(user){
// let ans = user.filter((elem)=> elem.age >= 18)
// return ans
// }
// console.log(getAdults(users))

// Question - 11
// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];

// function getCartTotal(cart){
//    let total = cart.reduce((acc , elem) =>{
//         return acc+= elem.price * elem.qty
//    },0)
//    return total
// }
// console.log(getCartTotal(cart))


// Question - 12

let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

function generateStudentReport(students) {
return students.map((std) => {
  let sum = std.marks.reduce((acc, val)=> acc + val ,0)
  // console.log(sum)
  let avg = sum / std.marks.length

  let grd ;
   if (avg >= 80) {
      grd = "A";
    } else if (avg >= 60) {
      grd = "B";
    } else {
      grd = "C";
    }

  return {
    studentName : std.name,
    average : avg,
    grade : grd
  }
})
}

console.log(generateStudentReport(students));