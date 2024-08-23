// Retrieve from local storage or initialize an empty array
let todo = JSON.parse(localStorage.getItem("todo")) || [];
let archive = JSON.parse(localStorage.getItem("archive")) || [];

const date = new Date();
const todoInput = document.getElementById("input-field");
const todoList = document.getElementById("todoList");
const LukeButton = document.getElementById("lukebtn");
const EthanButton = document.getElementById("ethanbtn");
const BothButton = document.getElementById("bothbtn");
document.getElementById("archiveBtn").addEventListener("click", function () {window.location.href = 'archive.html';});

const users = ["none","luke","ethan","both"];

//Initialize

document.addEventListener("DOMContentLoaded", 
function () {
    LukeButton.addEventListener("click", function () {addTask(1);});
    EthanButton.addEventListener("click", function () {addTask(2);});
    BothButton.addEventListener("click", function () {addTask(3);});
    displayTasks();
});

function addTask(assign) 
{
    const newTask = todoInput.value.trim();
    if(newTask !== "")
    {
        todo.push({
            text: newTask,
            assignedTo: assign,
            notes: "Notes",
        });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}
function displayTasks() 
{
    todoList.innerHTML = "";
    todo.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
            <div class="todo-container">
                <input type="checkbox" class="todo-checkbox" id="input-${index}">
                <span class="todo-item" id="todo-${index}" onclick = "editTask(${index})">${item.text}</span>
                <span class="todo-note" id="notes-${index}" onclick = "editNotes(${index})"><i>${item.notes}</i></span>
                <img class="todo-img" id="icon-${index}" src="${users[item.assignedTo]}.webp" alt="${users[item.assignedTo]}" width=30, height=30, onclick = "swapAssignees(${index})">
            </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener("change", () => {
            removeTask(index);
        });
        todoList.appendChild(p);
    });
}

function saveToLocalStorage()
{
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("archive", JSON.stringify(archive));
}

function removeTask(index)
{
    //save item to archive
    archive.push({
        text: todo[index].text,
        assignedTo: todo[index].assignedTo,
        date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    });

    todo.splice(index, 1);
    saveToLocalStorage();
    displayTasks();
}

function swapAssignees(index) 
{
    todo[index].assignedTo += 1;
    if(todo[index].assignedTo >= users.length)
    {
        todo[index].assignedTo = 1;
    }
    saveToLocalStorage();
    displayTasks();
    return;
}

function editTask(index)
{
    const todoItem = document.getElementById(`todo-${index}`);
    const existingText = todo[index].text;
    const inputElement = document.createElement("input");

    inputElement.value = existingText;
    todoItem.replaceWith(inputElement);

    inputElement.focus();

    inputElement.addEventListener("blur", function() {
        submitEditedName(inputElement, index);
    });
    inputElement.addEventListener("keydown", function (event) {
        if(event.key == "Enter")
        {
            submitEditedName(inputElement, index);
        }
    });
}

function submitEditedName(inputElement, index) {
    const updatedText = inputElement.value.trim();
    if(updatedText) {
        todo[index].text = updatedText;
        saveToLocalStorage();
    }
    displayTasks();
}

function editNotes(index)
{
    const todoItem = document.getElementById(`notes-${index}`);
    const existingText = todo[index].notes;
    const inputElement = document.createElement("input");

    inputElement.value = existingText;
    todoItem.replaceWith(inputElement);

    inputElement.focus();

    inputElement.addEventListener("blur", function() {
        submitEditedNotes(inputElement, index);
    });
    inputElement.addEventListener("keydown", function (event) {
        if(event.key == "Enter")
        {
            submitEditedNotes(inputElement, index);
        }
    });
}

function submitEditedNotes(inputElement, index) {
    const updatedText = inputElement.value.trim();
    if(updatedText) {
        todo[index].notes = updatedText;
        saveToLocalStorage();
    }
    displayTasks();
}
