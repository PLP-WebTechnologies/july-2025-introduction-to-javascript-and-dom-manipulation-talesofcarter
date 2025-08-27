// Part 1 Check discount eligibility
function discountOffer(season, totalSpend) {
  if (season === "summer" && totalSpend > 5000) {
    console.log("You are eligible for 15% discount");
  } else {
    console.log("Sorry! Try again next season.");
  }
}

// DOM Manipulation - Part 2, 3, and 4
const taskList = [];
const button = document.getElementById("add-task-btn");

function displayTask() {
  let taskElement = "";

  taskList.forEach((task) => {
    const html = `<li>${task}</li>`;
    taskElement += html;
  });

  document.querySelector(".js-task-list").innerHTML =
    taskElement;
}

function addTask() {
  const inputContent = document.querySelector(
    ".input-content"
  );
  const task = inputContent.value;
  taskList.push(task);
  inputContent.value = "";

  displayTask();
}

button.addEventListener("click", () => {
  addTask();
});
