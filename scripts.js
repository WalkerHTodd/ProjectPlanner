let projects = [];
let currentProjectIndex = null;

const projectsList = document.getElementById("projects-list");
const taskSection = document.getElementById("task-section");
const projectSection = document.getElementById("project-section");
const projectTitle = document.getElementById("project-title");
const taskList = document.getElementById("task-list");

document.getElementById("add-project-btn").onclick = () => {
  const name = prompt("Enter project name:");
  if (name) {
    projects.push({ name, tasks: [] });
    renderProjects();
  }
};

document.getElementById("add-task-btn").onclick = () => {
  const taskName = prompt("Enter task:");
  if (taskName) {
    projects[currentProjectIndex].tasks.push({ name: taskName, status: "To Do" });
    renderTasks();
  }
};

document.getElementById("back-btn").onclick = () => {
  taskSection.classList.add("hidden");
  projectSection.classList.remove("hidden");
};

function renderProjects() {
  projectsList.innerHTML = "";
  projects.forEach((project, index) => {
    const btn = document.createElement("button");
    btn.textContent = project.name;
    btn.onclick = () => openProject(index);
    projectsList.appendChild(btn);
  });
}

function openProject(index) {
  currentProjectIndex = index;
  projectTitle.textContent = projects[index].name;
  renderTasks();
  projectSection.classList.add("hidden");
  taskSection.classList.remove("hidden");
}

function renderTasks() {
  taskList.innerHTML = "";
  const tasks = projects[currentProjectIndex].tasks;
  tasks.forEach((task, i) => {
    const div = document.createElement("div");
    div.textContent = `${task.name} [${task.status}]`;
    taskList.appendChild(div);
  });
}

renderProjects();
