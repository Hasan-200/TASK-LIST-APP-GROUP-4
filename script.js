// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const prioritySelect = document.getElementById("prioritySelect");
const dueDateInput = document.getElementById("dueDateInput");

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  // Create task card
  const card = document.createElement("div");
  card.className = "task-list-card";

  // Task info
  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const taskName = document.createElement("span");
  taskName.className = "task-name";
  taskName.textContent = taskText;

  const priorityBadge = document.createElement("span");
  priorityBadge.className = "priority-badge " + (priority === "High" ? "high" : "low");
  priorityBadge.textContent = priority;

  const dueDateSpan = document.createElement("span");
  dueDateSpan.className = "due-date";
  dueDateSpan.textContent = dueDate ? "Due: " + dueDate : "";

  taskInfo.appendChild(taskName);
  taskInfo.appendChild(priorityBadge);
  taskInfo.appendChild(dueDateSpan);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => card.remove();

  card.appendChild(taskInfo);
  card.appendChild(deleteBtn);

  taskList.appendChild(card);

  // Clear inputs
  taskInput.value = "";
  prioritySelect.value = "Normal";
  dueDateInput.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => { if(e.key === "Enter") addTask(); });