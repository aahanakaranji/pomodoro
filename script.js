// Tasks array to track DOM elements
const tasks = [];
const taskIds = [];
let count = 1;

document.getElementById("addTask").addEventListener("click", () => {
  const enteredTask = document.getElementById("taskInput").value.trim();
  if (!enteredTask) return; // Create checkbox

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox" + count; // Create label

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = enteredTask;
  label.style.marginLeft = "10px"; // Wrap them in a list item

  const listItem = document.createElement("li");
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.style.marginBottom = "10px";

  document.getElementById("taskList").appendChild(listItem);

  tasks.push(label);
  taskIds.push(checkbox);
  count++;

  document.getElementById("taskInput").value = "";
});

document.getElementById("removeCompleted").addEventListener("click", () => {
  for (let i = 0; i < taskIds.length; i++) {
    if (taskIds[i].checked) {
      taskIds[i].parentElement.style.display = "none";
    }
  }
});

document.getElementById("timerSelect").addEventListener("change", () => {
  const selection = document.getElementById("timerSelect").value;
  let minutes;

  switch (selection) {
    case "25":
      minutes = 25;
      break;
    case "5":
      minutes = 5;
      break;
    case "15":
      minutes = 15;
      break;
    default:
      minutes = 0;
  }

  if (minutes > 0) {
    localStorage.setItem("selectedTime", minutes);
    window.location.href = "timer.html";
  }
});
