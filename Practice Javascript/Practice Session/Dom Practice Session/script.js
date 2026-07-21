// Question 1 — Change Heading Text
// <h1 id="title">Welcome</h1>
// let h1 = document.querySelector('#title')
// h1.textContent = "Welcome to JavaScript DOM"

// Question 2 — Change Background Color
// let button = document.querySelector('#btn')
// button.addEventListener('click' , () =>{
//    document.body.style.backgroundColor = "blue"
// })

// Question 3 — Display Input Value
// let input = document.querySelector('input')
// let button = document.querySelector('button')
// let p = document.querySelector('#output')
// button.addEventListener('click' , () =>{
//    p.innerHTML = input.value
// })

// Question 4 — Hide and Show Text
// let p = document.querySelector('#message')
// let button = document.querySelector('.btn')

// button.addEventListener('click', () => {
//    console.log("ckc")
//    if (p.style.display === "block") {
//       p.style.display = "none"
//    } else {
//       p.style.display = "block"
//    }
// })

// Question 5 — Add New List Item
// let list = document.querySelector('#list')
// let btn = document.querySelector('button')

// btn.addEventListener('click' , () =>{
//    let li = document.createElement('li')
//    li.textContent = "Banana"
//    list.appendChild(li)
//    console.log(li)
// })

// Question 6 — Remove a Card

// let card = document.querySelector('.card')
// let btn = document.querySelector('button')
// btn.addEventListener('click' , () =>{
//    btn.parentElement.remove()
// })

// Question 7 — Counter App

// let h1 = document.querySelector(".h");
// let count = 0;
// let increment = document.querySelector(".inc");
// let decrement = document.querySelector(".dec");

// increment.addEventListener("click", () => {
//   count += 1;
//   h1.textContent = count;
// });
// decrement.addEventListener("click", () => {
//   if (count === 0) {
//     return;
//   }
//   count -= 1;

//   h1.textContent = count;
// });

// Question 8 — Live Character Counter

// let textarea = document.querySelector('textarea')
// let p = document.querySelector('p')

// textarea.addEventListener('input' , () =>{
//    let value = textarea.value.length
//    p.innerHTML = `Character : ${value}`
// })

// Question 9 — Todo List

// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// let ul = document.querySelector('ul')
// btn.addEventListener('click' , () =>{
//    let result = input.value
//    let li = document.createElement('li')
//    li.textContent = result
//    ul.appendChild(li)
//    // console.log(result)
//    input.value = ""
// })

// Question 10 — Image Gallery

// let images = [
//   "https://static.vecteezy.com/system/resources/thumbnails/051/953/787/small/a-majestic-lion-rests-on-a-rock-under-dramatic-clouds-showcasing-its-powerful-presence-photo.jpg",
//   "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
//   "https://d1jyxxz9imt9yb.cloudfront.net/medialib/4350/image/s768x1300/AdobeStock_123823873_433578_reduced.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLDfnvm6uHlq8K4i2WUsOus7NSbkSfmtQ_xajfiD43RK2w0iyPUTjgPU&s=10",
// ];

// let img = document.querySelector("#image");
// let button = document.querySelector("button");

// let index = 0;
// img.src = images[0];
// button.addEventListener("click", () => {
//   index++;

//   if (index >= images.length) {
//     index = 0;
//   }

//   img.src = images[index];
// });


// Question 11 — Dark Mode Toggle
// let box = document.querySelector('.box')
// let button = document.querySelector('.btn')
// let text = document.querySelector('.text')

// button.addEventListener('click', () => {
//   box.classList.toggle("boxDark")
//   if (box.classList.contains("boxDark")) {
//     button.style.backgroundColor = "black"
//     button.textContent = "☀️ Light Mode"
//     text.style.color = "white"
//   } else {
//     button.style.backgroundColor = "#db2938"
//     button.textContent = "🌙 Dark Mode"
//     text.style.color = "black"
//   }

// })

// Question 12 — Mini Student Manager (Interview Level)
let studentArray = []
let name = document.querySelector('.name')
let course = document.querySelector('.course')
let add = document.querySelector('.add')
let students = document.querySelector('#students')
let totalStudents = document.querySelector("#totalStudents");


add.addEventListener('click' , () => {
  let studentName = name.value
  let courseName = course.value

  if(studentName.trim() === "" || courseName.trim() ===""){
    alert("All Fields Are Mandotry")
    return 
  }

  let obj = {
    studentName,
    courseName
  }
  
  studentArray.push(obj)
  name.value = ""
  course.value = ""
  
  userInterFace()

  // console.log(obj)
  // console.log(studentName)
  // console.log(courseName)
})


let userInterFace = () =>{
  students.innerHTML = ""
  studentArray.forEach((elem, index) => {
    students.innerHTML += `
     <div class="student-card">
    <div class="student-info">
      <h3 class="student-name">${elem.studentName}</h3>
      <p class="student-course">${elem.courseName}</p>
    </div>

    <button onClick="deleteButton(${index})" class="delete-btn">Delete</button>
  </div>
    `
    totalStudents.innerHTML = studentArray.length

  })
}

const deleteButton = (ind) =>{
studentArray.splice(ind , 1)
userInterFace()
}