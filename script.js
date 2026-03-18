// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// SEARCH FUNCTION
function searchTasks() {
    const filter = searchInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
        const text = tasks[i].firstChild.textContent.toLowerCase();

        if (text.includes(filter)) {
            tasks[i].style.display = "flex";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

// Listen for typing in search box
searchInput.addEventListener("keyup", searchTasks);