let archive = JSON.parse(localStorage.getItem("archive")) || [];
const backButton = document.getElementById("backButton");
const archiveList = document.getElementById("archiveList");
const users = ["none","luke","ethan","both"];

document.addEventListener("DOMContentLoaded", 
function () {
    backButton.addEventListener("click", back);
    displayTasks();
});

function back() {
    window.location.href = 'todo.html';
}

function displayTasks() 
{
    archiveList.innerHTML = "";
    archive.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
            <div class="archive-container">
                <span class="todo-item" id="archive-${index}"">${item.text}</span>
                <span class="todo-note" id="date-${index}"><i>Completed On: ${item.date} </i>By:</span>
                <img class="todo-img" id="icon-${index}" src=" ${users[item.assignedTo]}.webp" alt="${users[item.assignedTo]}" width=30, height=30)">
            </div>
        `;
        archiveList.appendChild(p);
    });
}
function deleteArchive() {
    archive = [];
    
}