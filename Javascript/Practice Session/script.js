// let price = [100,250,500,150,700]
// let result = price.filter((elem)=>{
//  return elem > 300
// })

// console.log(result)


// let marks = [80,90,70,85,95]
// let sum = marks.reduce((acc , val) => acc += val ) 
// let average = sum/marks.length
// console.log(average)


// Question - 3

let numbers= [1,2,3,2,4,2,5,1,1,1,2,2,2,2];
var obj = {}

for(let i = 0 ; i <= numbers.length-1 ; i++){
// console.log(numbers[i])
if(obj[numbers[i]]){
   obj[numbers[i]] += 1
}else{
  obj[numbers[i]] = 1
}
}
// console.log(obj)
let frequency = 0
let mostFrequecy = 0
for(let key in obj){
   // console.log(obj[key])
   if(obj[key] > frequency){
      frequency = obj[key]
      mostFrequecy = key
   }
}
console.log(mostFrequecy)
