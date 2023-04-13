document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});
let taskObjArray = []

function addingEventListeners() {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", handleFormSubmit)
  document.getElementById("sort-tasks").addEventListener("change", sortTasks)

}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target["new-task-description"].value
  const priorityLevel = parseInt(e.target.priority.value)

  const taskObj = {task, priorityLevel}
  taskObjArray.push(taskObj);

  sortTasks()
  displayTasks()
}

function displayTasks() {
  const taskUl = document.getElementById("tasks");
  taskUl.innerHTML = ""

  taskObjArray.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.textContent = task.task + "  "
    taskLi.style.color = setPriorityColor(task.priorityLevel);
    taskUl.appendChild(taskLi);
  
    const btn = document.createElement("button");
    btn.addEventListener("click", (e) => deleteTask(e, task))
    btn.textContent = "🗑️";
    btn.style.fontSize = "15px";
    btn.style.borderColor = "white";
    taskLi.appendChild(btn)

  })



}

function deleteTask(e) {
  taskObjArray = taskObjArray.filter((obj) => obj.task !== task.task)
  e.target.parentNode.remove()
}

document.querySelector("h1").style.color = "white";
document.querySelector("label").style.color = "white";
document.getElementById("main-content").style.backgroundColor = "#e600a8";
 
function setPriorityColor(priorityLevel) {
  if(priorityLevel === 1) {
    return "#7A334C"
  } else if(priorityLevel === 2) {
    return "#6495ED"
  } else {
    return "#9564ED";
  }
}

function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if(sortTasksSelect.value === "h-1") {
    taskObjArray.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArray.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  displayTasks()
}