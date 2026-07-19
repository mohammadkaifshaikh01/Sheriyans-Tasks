// Taking Element From HTML File
let formOpenButton = document.querySelector(".formOpenButton");
let formBar = document.querySelector(".formBar");
let formClose = document.querySelector(".formClose");
let form = document.querySelector("form");
let notes = document.querySelector(".notes");
let submitButton = document.querySelector(".submitButton");
let notesArray = JSON.parse(localStorage.getItem("notes")) || [];
let searchInput = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");
let isUpdate = null;

// Form Open Functionality
formOpenButton.addEventListener("click", () => {
  formBar.style.display = "flex";
  submitButton.innerHTML = "Add Note";
  console.log("Button click");
});

// Form Close Functionality
formClose.addEventListener("click", () => {
  formBar.style.display = "none";
  // console.log("Button click");
});

//Adding Notes In Local Storage
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event)
  // console.log(form)

  let noteName = event.target[0].value;
  let noteDescription = event.target[1].value;
  // console.log(noteName)
  if (noteName.trim() == "" || noteDescription.trim() == "") {
    alert("All Fields Are Mandotry");
    return;
  }

  let obj = {
    id: Date.now(),
    noteName,
    noteDescription,
    createdAt: new Date().toLocaleString(),
  };

  if (isUpdate !== null) {
    notesArray[isUpdate] = obj; // Updating Data In Notes Array
    localStorage.setItem("notes", JSON.stringify(notesArray)); // Setting Notes Array In Local Storage
    //stringify() converts object to string
    isUpdate = null;
  } else {
    // Adding Data In Notes Array
    notesArray.push(obj);
    // Setting Notes Array In Local Storage
    localStorage.setItem("notes", JSON.stringify(notesArray));
    //stringify() converts object to string
  }

  // console.log(notesArray);
  form.reset();
  formBar.style.display = "none";
  userInterFace();
});

//Showing Data In Ui
let userInterFace = (data = notesArray) => {
  notes.innerHTML = "";
  if (data.length === 0) {
    notes.innerHTML = "<h2>No Notes Found</h2>";
    return;
  }
  data.forEach((elem) => {
    notes.innerHTML += ` <div class="note">
            <div class="note-part-one">
               <h1>${elem.noteName}</h1>
               <p>${elem.noteDescription}</p>
               <p>${elem.createdAt}</p>
            </div>
            <div class="note-part-two">
               <button onClick="updateNote(${elem.id})"  class="updateButton">Update</button>
               <button onClick="deleteNote(${elem.id})" class="deleteButton">Delete</button>
            </div>
         </div>`;
  });
};
userInterFace();

//Update Functionality
let updateNote = (elem) => {
  // console.log("Update Id" , elem)
  formBar.style.display = "flex";
  submitButton.innerHTML = "Update Note";
  const updateNote = notesArray.find((e) => e.id === elem);
  isUpdate = notesArray.findIndex((e) => e.id === elem);
  form[0].value = updateNote.noteName;
  form[1].value = updateNote.noteDescription;
};

//Delete Functionality
let deleteNote = (elem) => {
  notesArray = notesArray.filter((e) => e.id !== elem);
  localStorage.setItem("notes", JSON.stringify(notesArray));
  userInterFace();
};

//Search Functionality
searchButton.addEventListener("click", () => {
  let value = searchInput.value.toLowerCase();

  if (value === "") {
    userInterFace();
    return;
  }

  let filteredNotes = notesArray.filter((elem) =>
    elem.noteName.toLowerCase().includes(value),
  );
  userInterFace(filteredNotes);
  // console.log(value)
});
