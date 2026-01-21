/* Ejercicio 6: Autos y más autos...
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista 
predefinida de marcas de autos: let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan"*/

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
function gestionarAutos(entrada) {

//1. Quite los espacios en blanco alrededor de cada marca.    
    let marcas = entrada.split(",").map(marca => marca.trim());

//2. Verifique si existe la marca "Tesla".    
    let existeTesla = marcas.some(marca => marca === "Tesla");

//3. Reemplace todas las marcas "Ford" por "BMW".
    marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

//4. Encuentre el índice de la marca "Chevrolet".    
    let indiceChevrolet = marcas.findIndex(marca => marca === "Chevrolet");

//5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”   
    let ordenadas = marcas.sort().join(".");

    return {
        existeTesla,
        indiceChevrolet,
        ordenadas
    };
};

console.log(gestionarAutos(entrada));
