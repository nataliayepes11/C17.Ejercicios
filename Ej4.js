/* Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar 
deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.*/

const prompt = require('prompt-sync')();

let listaNombres = prompt("Ingresá nombres separados por coma: ");
//Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
function transformarYAnalizarNombres(listaNombres) {

//1. Quite los espacios en blanco alrededor de cada nombre.
    let nombres = listaNombres.split(",");
    let nombresLimpios = nombres.map(nombre => nombre.trim());

//2. Verifique si existe el nombre "Juan".    
    let existeJuan = nombresLimpios.includes("Juan");
    console.log("¿Existe Juan?:", existeJuan)

//3. Reemplace todos los nombres "María" por "Ana".
    let reemplazo = nombresLimpios.map(nombre => nombre === "Maria" ? "Ana" : nombre);

//4. Encuentre el índice del nombre "Pedro".
    let indicePedro = reemplazo.findIndex(nombre => nombre === "Pedro");
    console.log("Índice de Pedro:", indicePedro);

/*5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*/    
    let ordenados = [...reemplazo].sort().join(".");
    console.log("Nombres finales:", ordenados);
};

transformarYAnalizarNombres(listaNombres);
