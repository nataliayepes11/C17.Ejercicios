/* Ejercicio 2: Análisis y Modificación de Cadenas de Texto
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar 
todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que significa que 
reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por guiones.
*/

const prompt = require("prompt-sync")();

let oracion = prompt("Por favor ingresá una oración... ");

function procesarOracion (oracion) {
    let espaciosBlanco = oracion.trim();
    console.log("Si sacamos los espacios en blanco tu oración queda así: " + espaciosBlanco);
    
    let divididaPorPalabras = espaciosBlanco.split(" ");
    console.log("Tu oración separa por palabras se ve así: " + divididaPorPalabras);
    
    let todasLasAPorArroba = divididaPorPalabras.map(palabra => palabra.replace(/a/g, "@"));
    console.log("Reemplazamos todas las `a` por @, mirá: " + todasLasAPorArroba);
    
    let primeraPosicionJavascript = espaciosBlanco.indexOf("javascript");
    console.log("El indice donde aparece `javascript` es: " + primeraPosicionJavascript);

    let cadenaDePalabras = todasLasAPorArroba.join("-");
    console.log("Tu oración separada por guiones se ve así: " + cadenaDePalabras);
}
procesarOracion(oracion);