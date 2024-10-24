let task = ["comprar", "Estudiar", "limpiar casa"];

console.log("Lista de tareas:", task);

task.push("Ir a la escuela");

task.splice(3, 1);

task.push("ir a casa");

//-----------------usando Foreach---------------------//
task = ["comprar", "Estudiar"];

task.forEach((task, index) => {
    console.log(`Tarea ${index}: ${task}`);
});