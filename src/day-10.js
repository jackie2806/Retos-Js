
  /* ES6 y ES7/
/*Ejercicio*/

/* En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
Ejemplo 1:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]

Ejemplo 2:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}] */

function createTaskPlanner() {
    const tasks = [];
  
    return {
      addTask(task) {
        task.completed = false; // Agregar la propiedad "completed" con valor falso
        tasks.push(task);
      },
      removeTask(value) {
        tasks.splice(
          tasks.findIndex(task => task.id === value || task.name === value),
          1
        );
      },
      getTasks() {
        return tasks;
      },
      getPendingTasks() {
        return tasks.filter(task => !task.completed);
      },
      getCompletedTasks() {
        return tasks.filter(task => task.completed);
      },
      markTaskAsCompleted(value) {
        const task = tasks.find(task => task.id === value || task.name === value);
        if (task) task.completed = true;
      },
      getSortedTasksByPriority() {
        return [...tasks].sort((a, b) => a.priority - b.priority);
      },
      filterTasksByTag(tag) {
        return tasks.filter(task => task.tags.includes(tag));
      },
      updateTask(taskId, updates) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
          Object.assign(task, updates);
        }
      }
    };
  }
  