document.addEventListener('DOMContentLoaded', function () {
    const taskId = new URLSearchParams(window.location.search).get('id');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === parseInt(taskId));

    if (task) {
        document.querySelector('.task-item_title').textContent = task.title;
        document.querySelector('.task-item_content').textContent = task.description;
        document.querySelector('.task-item_dateStart').textContent = `Создано: ${task.dateStart}`;
        document.querySelector('.task-item_dateEnd').textContent = `Событие: ${task.dateEnd}`;

        document.querySelector('.task-item_edit').addEventListener('click', function () {
            // Показываем форму редактирования
            const editForm = document.querySelector('.task-edit_form');
            editForm.style.display = 'block';
        
            // Заполняем форму текущими данными задачи
            const taskId = new URLSearchParams(window.location.search).get('id');
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const task = tasks.find(t => t.id === parseInt(taskId));
        
            document.querySelector('.edit_title').value = task.title;
            document.querySelector('.edit_description').value = task.description;
            document.querySelector('.edit_dateEnd').value = task.dateEnd.split('T')[0]; // Убедитесь, что формат даты совпадает
        });
        
        document.querySelector('.save_edit').addEventListener('click', function () {
            // Сохраняем изменения
            const updatedTitle = document.querySelector('.edit_title').value;
            const updatedDescription = document.querySelector('.edit_description').value;
            const updatedDateEnd = document.querySelector('.edit_dateEnd').value;
        
            const taskId = new URLSearchParams(window.location.search).get('id');
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const taskIndex = tasks.findIndex(t => t.id === parseInt(taskId));
        
            tasks[taskIndex] = {...tasks[taskIndex], title: updatedTitle, description: updatedDescription, dateEnd: updatedDateEnd};
            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            // Скрываем форму и обновляем отображение задачи
            document.querySelector('.task-edit_form').style.display = 'none';
            window.location.reload(); // или вызовите renderTasks если это применимо
        });
        
        document.querySelector('.cancel_edit').addEventListener('click', function () {
            // Просто скрываем форму
            document.querySelector('.task-edit_form').style.display = 'none';
        });

        document.querySelector('.task-item_delete').addEventListener('click', function () {
            if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
                const updatedTasks = tasks.filter(t => t.id !== parseInt(taskId));
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                window.location.href = '/projects/ToDoList/index.html';
            }
        });

        document.querySelector('.task-item_status').addEventListener('click', function () {
            task.completed = true;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            window.location.href = '/projects/ToDoList/pages/archive/archive.html';
        });
    }
});