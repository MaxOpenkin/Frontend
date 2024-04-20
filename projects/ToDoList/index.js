document.addEventListener('DOMContentLoaded', function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        const tasksList = document.querySelector('.task-item_list');
        tasksList.innerHTML = ''; // Очистка списка задач
        tasks.filter(task => !task.completed).forEach(task => {
            const taskElement = `
                <div class="task-item">
                    <h2 class="task-item_title">${task.title}</h2>
                    <p class="task-item_content">${task.description.substring(0, 50)}...</p>
                    <span class="task-item_dateStart">${task.dateStart}</span>
                    <span class="task-item_dateEnd">${task.dateEnd}</span>
                    <a href="./pages/itemTask/itemTask.html?id=${task.id}" class="task-item_open">Открыть задачу</a>
                </div>
            `;
            tasksList.innerHTML += taskElement;
        });
    }

    renderTasks();

    const searchInput = document.querySelector('.input_search');
    searchInput.addEventListener('input', function () {
        const filteredTasks = tasks.filter(task =>
            task.title.includes(this.value) || task.description.includes(this.value)
        );
        renderTasks(filteredTasks);
    });
});