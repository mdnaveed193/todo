// function toggleTask(checkbox) {
//     const listItem = checkbox.parentElement;
//     if (checkbox.checked) {
//         listItem.classList.add("completed");
//     } else {
//         listItem.classList.remove("completed");
//     }
// }

// function toggleTask(checkbox) {
//     let listItem;

//     // Check if it's a custom checkbox
//     if (checkbox.parentElement.classList.contains("custom-checkbox")) {
//         listItem = checkbox.closest("li"); // Find the closest <li> for custom checkboxes
//     } else {
//         listItem = checkbox.parentElement; // Normal checkboxes
//     }

//     if (checkbox.checked) {
//         listItem.classList.add("completed");
//     } else {
//         listItem.classList.remove("completed");
//     }
// }
function toggleTask(checkbox) {
  let listItem = checkbox.closest("li"); // Find the closest <li>

  if (listItem) {
    if (checkbox.checked) {
      listItem.classList.add("completed");
      saveData();
    } else {
      listItem.classList.remove("completed");
      saveData();
    }
  }
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
      alert("You must write something!");
      return;
    }
  
    // Create a new list item
    let li = document.createElement("li");
  
    // Set the innerHTML for the list item with the custom checkbox and task text
    li.innerHTML = `
      <label class="custom-checkbox">
          <input type="checkbox" onchange="toggleTask(this)">
          <span class="checkmark"></span>
          ${inputBox.value}
    
          <span class="cross" onclick="deleteTask(this)">&times;</span>
                    </label>
    `;
  
    // Append the list item to the container
    listContainer.appendChild(li);
  
    // Clear input field
    inputBox.value = "";
    saveData();
  }


  
// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML)
// }
// function  showTask(){
//     listContainer.innerHTML=localStorage.getItem("data")

// }
// showTask();

function deleteTask(cross) {
    let listItem = cross.closest("li");
    listItem.remove();
    saveData();
}

// Function to save tasks to local storage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to load saved tasks from local storage
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

// Load tasks when page loads
loadTasks();