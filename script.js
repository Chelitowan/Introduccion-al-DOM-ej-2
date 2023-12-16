// funcion para agregar tarea

// Función para agregar una nueva tarea
function addTask() {
    var newTaskInput = document.getElementById('newTask');
    var taskList = document.getElementById('taskList');

    // Obtener el valor del nuevo input
    var taskText = newTaskInput.value;

    // Validar que el input no esté vacío
    if (taskText.trim() !== '') {
        // Crear un nuevo elemento de lista (li)
        var newTaskItem = document.createElement('li');

        // Agregar el texto de la tarea al elemento de lista
        newTaskItem.textContent = taskText;

        // Agregar la tarea a la lista
        taskList.appendChild(newTaskItem);

        // Limpiar el input
        newTaskInput.value = '';

        // Agregar evento de clic para marcar como completada
        newTaskItem.addEventListener('click', function () {
            newTaskItem.classList.toggle('completed');
        });

        // Agregar evento de clic para eliminar la tarea
        newTaskItem.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            taskList.removeChild(newTaskItem);
        });
    }
}
