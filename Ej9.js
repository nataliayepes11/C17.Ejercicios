/* Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. 
Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:
let list = [12, 3, 5, 7, 1, 22, 47, 100];
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. 
Luego, respondan las siguientes preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?
*/

let list = [12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort(list) {
    let n = list.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                let auxiliar = list[j];
                list[j] = list[j + 1];
                list[j + 1] = auxiliar;
            }
        }
    }

    return list;
}

function busquedaBinaria(list, elemento) {
    let inicio = 0;
    let fin = list.length - 1;

    while (inicio <= fin) {
        let mitad = Math.floor((inicio + fin) / 2);

        if (list[mitad] === elemento) {
            return mitad;
        }

        if (list[mitad] < elemento) {
            inicio = mitad + 1;
        } else {
            fin = mitad - 1;
        }
    }

    return -1;
}

let listaOrdenada = bubbleSort(list);

console.log("Lista ordenada:", listaOrdenada);
console.log("Posición del 12:", busquedaBinaria(listaOrdenada, 12));
console.log("Posición del 5:", busquedaBinaria(listaOrdenada, 5));
console.log("Posición del 22:", busquedaBinaria(listaOrdenada, 22));
console.log("Posición del 100:", busquedaBinaria(listaOrdenada, 100));
