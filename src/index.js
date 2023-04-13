document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

function addingEventListeners() {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", handleFormSubmit)

}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target["new-task-description"].value
  const priorityLevel = parseInt(e.target.priority.value)

  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  taskLi.textContent = `${task}   `
  taskLi.style.color = setPriorityColor(priorityLevel);
  taskUl.appendChild(taskLi);
  const btn = document.createElement("button");
  btn.addEventListener("click", deleteTask)
  btn.textContent = "🗑️";
  btn.style.fontSize = "15px";
  btn.style.borderColor = "white";
  taskLi.appendChild(btn)



}

function deleteTask(e) {
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