const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = inputBox.value;
    todoList.appendChild(li);

    span.innerHTML = "\u00d7";
    span.className = "btn btn-danger";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function loadData() {
  todoList.innerHTML = localStorage.getItem("data");
}
loadData();
