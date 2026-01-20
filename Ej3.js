/* Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas: */

let productos = [
    { nombre: "Agenda", precio: 20000 },
    { nombre: "Resaltador", precio: 1000 },
    { nombre: "Lapicera", precio: 1500 }
];

function gestionarProductos(productos) {

//1. Añada un nuevo producto al array.    
    productos.push({ nombre: "Cuaderno", precio: 3000 });  
    console.log("Listado actualizado (después de push):", productos);

//2. Elimine el último producto del array.    
    productos.pop();  
    console.log("Listado actualizado (después de pop):", productos);

/* 3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex */
    let indiceProducto = productos.findIndex(producto => producto.nombre === "Lapicera");
    console.log("Índice de la Lapicera es:", indiceProducto);
    
/* 4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some */
    let existeProductoMayor50 = productos.some(producto => producto.precio > 50);
    console.log("¿Hay precio mayor a 50?:", existeProductoMayor50);

// 5. Devuelva una cadena de nombres de productos separados por comas.
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");
    console.log("Lista de productos:", nombresProductos);
    
};
gestionarProductos(productos);
