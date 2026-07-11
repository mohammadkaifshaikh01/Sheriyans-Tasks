let formOpen = document.querySelector("#formOpen");
let formClose = document.querySelector("#formClose");
let formDiv = document.querySelector(".formDiv");
let form = document.querySelector("form");
let tasksCard = document.querySelector(".tasks");
let taskArray = [];

let userInterFace = () => {

   tasksCard.innerHTML = "";
   taskArray.forEach((elem) => {
      // console.log(elem);


      let taskCardContent = document.createElement('div')
      taskCardContent.className = "taskCard"
      taskCardContent.setAttribute('data-id' ,elem.id)
      taskCardContent.setAttribute('data-category' ,elem.priority)

      let taskCardText = document.createElement('div')
      taskCardText.className = "text"

      let taskCardName = document.createElement('h3')
      taskCardName.textContent = elem.taskName
      let taskCardPriority = document.createElement('p')
      taskCardPriority.className = elem.priority
      taskCardPriority.textContent = elem.priority

      taskCardText.appendChild(taskCardName)
      taskCardText.appendChild(taskCardPriority)

      let buttons = document.createElement('div')
      buttons.className = "btns"

      let updateButton = document.createElement('button')
      updateButton.id = "update"
      updateButton.textContent = "Update"

      let deleteButton = document.createElement('button')
      deleteButton.id = "delete"
      deleteButton.textContent = "Delete"

      deleteButton.addEventListener('click' , () =>{
         console.log("Button Clicked")
         deleteTask(elem.id)
      })

      let statusButton = document.createElement('button')
      statusButton.id = "status"
      statusButton.textContent = "Complete"

      statusButton.addEventListener('click' , () =>{
         completeTask(elem.id)
      })

      buttons.appendChild(updateButton)
      buttons.appendChild(deleteButton)
      buttons.appendChild(statusButton)


      taskCardContent.appendChild(taskCardText)
      taskCardContent.appendChild(buttons)

      tasksCard.append(taskCardContent)


   });
};

formOpen.addEventListener("click", () => {
   formDiv.style.display = "flex";
});

formClose.addEventListener("click", () => {
   formDiv.style.display = "none";
});

// Adding Task
form.addEventListener("submit", (event) => {
   event.preventDefault();

   // console.log(event.target[0].value)
   // console.log(event.target[1].value)

   let taskName = event.target[0].value;
   let priority = event.target[1].value;
   // let id = setAttribute('id' , Date.now())

   let obj = {
      id : Date.now(),
      taskName,
      priority,
      status : "Pending"
   };

   taskArray.push(obj);
   userInterFace();
   form.reset();
   formDiv.style.display = "none";
});



//Delete Functionality
const deleteTask = (elem) => {
   console.log("Funcito")
   taskArray = taskArray.filter((e) => e.id !== elem) 
  
   userInterFace()  
}


const statusButton = (elem) => {
   
}



// =======================================
// Old Ui Code
// ======================================
// let userInterFace = () => {

//    tasksCard.innerHTML = "";
//    taskArray.forEach((elem) => {
//       console.log(elem);


//       let taskCard = document.createElement('div')
//       taskCard.className = "taskCard"

//       let taskCardText = document.createElement('div')
//       taskCardText.className = "text"

//       let taskCardName = document.createElement('h3')
//       taskCardName.textContent = elem.taskName
//       let taskCardPriority = document.createElement('p')
//       taskCardPriority.textContent = elem.priority

//       let buttons = document.createElement('div')
//       buttons.className = "btns"

//       let updateButton = document.createElement('button')
//       updateButton.id = "update"

//       let deleteButton = document.createElement('button')
//       deleteButton.id = "delete"

//       let statusButton = document.createElement('button')
//       statusButton.id = "status"

//             tasksCard.innerHTML += `
//                <div class="tasks-card">
//                   <div class="text">
//                      <h3>${elem.taskName}</h3>
//                      <p class=${elem.priority}>${elem.priority}</p>
//                   </div>
//                   <div class="btns">
//                      <button id="update">Edit</button>
//                      <button id="delete">Delete</button>
//                      <button id="status">Complete</button>
//                   </div>
//                </div>
//       `;
//    });
// };