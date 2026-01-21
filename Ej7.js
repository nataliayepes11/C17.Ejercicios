/* Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
let entrada = "Rosa, Tulipán, Orquídea, Lirio"; */

let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(entrada) {
    //1. Quite los espacios en blanco alrededor de cada flor.
    let flores = entrada.split(",").map(flor => flor.trim());

    // 2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
    let existeMargarita = flores.some(flor => flor === "Margarita");
    if (existeMargarita) {
        flores.push("Azucena");
    }

    // 3. Reemplazar "Orquídea" por "Clavel"
    flores = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);

    // 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
    let indiceGirasol = flores.findIndex(flor => flor === "Girasol");
    if (indiceGirasol === -1) {
        flores.unshift("Girasol");
    }

    // Devuelva una cadena de flores en orden alfabético separadas por puntos.
    let resultado = flores.sort().join(".");

    return resultado;
};

console.log(gestionarFloreria(entrada));
    