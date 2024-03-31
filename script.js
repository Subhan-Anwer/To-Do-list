const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata(); // Call savedata after adding a task
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata(); // Call savedata after toggling a task
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata(); // Call savedata after removing a task
  }
});

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
  
function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Call showTask on page load to display saved data
