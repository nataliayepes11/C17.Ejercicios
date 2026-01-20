// Ejercicio 5: Manipulación de Arrays y Cadenas

let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

//A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
function procesarFrases(frases) {

    /*1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase*/
    let frasesModificadas = frases.map(frase => {
        let minuscula = frase.toLowerCase();

//2. Divida cada frase en palabras.        
        let palabras = minuscula.split(" ");

//3. Reemplace las palabras "malo" por "bueno".
        let reemplazo = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);

//4. Combine las palabras de cada frase en una nueva cadena separada por espacios.        
        return reemplazo.join(" ");
    });
    
//5. Devuelva un nuevo array con las frases modificadas.
    return frasesModificadas;
};

console.log(procesarFrases(frases));
