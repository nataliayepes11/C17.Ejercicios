/* Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, 
edad y un array de notas (con 5 notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.
*/


let estudiante = {
    nombre: "Natalia",
    edad: 45,
    notas: [4, 6, 7, 8, 9]
};

function procesarEstudiante(estudiante) {
    estudiante.notas.push(10);  // quedarían 4, 6, 7, 8, 9, 10
    estudiante.notas.shift();  // ahora serían 6, 7, 8, 9, 10

let suma = estudiante.notas.reduce((acumulador, nota) => acumulador + nota, 0); // 6+7+8+9+10 = 40
let promedio = suma / estudiante.notas.length; // 40/5=8

let mayusculas = estudiante.nombre.toUpperCase(); // NATALIA

return { 
    nombre: mayusculas,
    promedio: promedio
};

}
console.log(procesarEstudiante(estudiante));

