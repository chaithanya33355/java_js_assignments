document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);
        taskInput.value = "";
    });
});
