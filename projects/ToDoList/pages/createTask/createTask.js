document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.task-create_form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = this.taskTitle.value;
        const description = this.textarea.value;
        const dateEnd = this.dateEnd.value;
        const newTask = {
            id: Date.now(),
            title,
            description,
            dateStart: new Date().toISOString().split('T')[0],
            dateEnd,
            completed: false
        };
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        window.location.href = '/projects/ToDoList/index.html';
    });
});