let formOpen = document.querySelector("#formOpen");
let formClose = document.querySelector("#formClose");
let formDiv = document.querySelector(".formDiv");
let form = document.querySelector(".form");
let tasksCard = document.querySelector(".tasks");
let submitButton = document.querySelector("#submitButton");
let formHeading = document.querySelector(".formHeading");
let taskArray = [];
let updateIndex = null;
let theme = document.querySelector(".themeToggle")
let themeCheck = false
let navbar = document.querySelector(".navbar")

// ===============================================
//Showing Tasks In Ui
// ================================================
let userInterFace = () => {
   tasksCard.innerHTML = "";
   taskArray.forEach((elem) => {
      // console.log(elem);
      let taskCardContent = document.createElement("div");
      taskCardContent.className = "tasks-card";
      taskCardContent.setAttribute("data-id", elem.id);
      taskCardContent.setAttribute("data-category", elem.priority);

      let taskCardText = document.createElement("div");
      taskCardText.className = "text";

      let taskCardName = document.createElement("h3");
      taskCardName.textContent = elem.taskName;
      let taskCardPriority = document.createElement("p");
      taskCardPriority.className = elem.priority;

      let updateButton = document.createElement("button");
      updateButton.className = "update";
      updateButton.textContent = "Update";


      if(themeCheck){
         taskCardContent.className = "tasks-card-dark"
         taskCardText.className = "textDark"
         console.log("Dark")
      }else{
         taskCardContent.className = "tasks-card"
         taskCardText.className = "text"
      }

      if (elem.status === "Completed") {
         taskCardPriority.textContent = "Completed";
         taskCardPriority.className = "completedStatus";
         taskCardName.classList.add("completedTask");
         updateButton.disabled = true;

      } else {
         taskCardPriority.textContent = elem.priority;
      }

      taskCardText.appendChild(taskCardName);
      taskCardText.appendChild(taskCardPriority);

      let buttons = document.createElement("div");
      buttons.className = "btns";



      updateButton.addEventListener("click", () => {
         console.log("Button Clicked");
         updateTask(elem.id);
      });

      let deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
         // console.log("Button Clicked")
         deleteTask(elem.id);
      });

      let statusButton = document.createElement("button");
      statusButton.className = "status";
      statusButton.textContent = "Complete";

      statusButton.addEventListener("click", () => {
         completeTask(elem.id);

      });

      buttons.appendChild(updateButton);
      buttons.appendChild(deleteButton);
      buttons.appendChild(statusButton);

      taskCardContent.appendChild(taskCardText);
      taskCardContent.appendChild(buttons);

      tasksCard.append(taskCardContent);
   });
};

// ===============================================
// Form Open
// ================================================
formOpen.addEventListener("click", () => {
   formDiv.style.display = "flex";
});

// ===============================================
// Form Close
// ================================================
formClose.addEventListener("click", () => {
   formDiv.style.display = "none";
});

// ===============================================
// Adding Task
// ================================================
form.addEventListener("submit", (event) => {
   event.preventDefault();

   // console.log(event.target[0].value)
   // console.log(event.target[1].value)

   let taskName = event.target[0].value;
   let priority = event.target[1].value;
   // let id = setAttribute('id' , Date.now())

   if (taskName.trim() === "" || priority.trim() === "") {
      alert("All Field Are Mandotry")
      return;
   }

   let obj = {
      id: Date.now(),
      taskName,
      priority,
      status: "Pending",
   };

   if (updateIndex !== null) {
      taskArray[updateIndex] = obj;
      updateIndex = null;
   } else {
      taskArray.push(obj);
   }

   userInterFace();
   form.reset();
   formDiv.style.display = "none";
});

// ===============================================
//Delete Functionality
// ================================================
const deleteTask = (elem) => {
   console.log("Funcito");
   taskArray = taskArray.filter((e) => e.id !== elem);

   userInterFace();
};

// ===============================================
// Update Functionality
// ================================================

const updateTask = (id) => {
   // console.log("End")
   formDiv.style.display = "flex";
   formHeading.textContent = "Update Task";
   submitButton.textContent = "Update Task";
   const updateData = taskArray.find((elem) => elem.id === id);
   updateIndex = taskArray.findIndex((elem) => elem.id === id);
   console.log(updateData);

   form[0].value = updateData.taskName;
   form[1].value = updateData.priority;
};

// ===============================================
//Complete Task
// ================================================
const completeTask = (elem) => {
   const taskCo = taskArray.find((e) => e.id === elem);
   taskCo.status = "Completed";
   userInterFace();

};


// ===============================================
//Change Theme
// ================================================
theme.addEventListener('click', () => {

   if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark")
      form.classList = "form"
      navbar.classList = "navbar"
      theme.textContent = "Dark Mode"
      themeCheck = false
      userInterFace()
   } else {
      document.body.classList.add("dark");
      navbar.classList = "darkNav"
      form.classList = "formDark"
      theme.textContent = "Light Mode";
      themeCheck = true
      userInterFace()
   }

})

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


