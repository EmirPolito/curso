// Las funciones son bloques de código reutilizables que pueden recibir parámetros y devolver un valor.
// Se definen con la palabra clave `function`, seguida del nombre de la función, paréntesis y llaves.


// Definición de una función
function saludar() {// usamos la palabra reservada function lo que indiquemos a la derecha lo tomara como el nombre de esta funcion y ese nombre es el que escribiremos para llamar a todo lo que viene en {}.
    console.log('¡Hola, mundo!');
}

//para llamar a la función, simplemente se escribe su nombre seguido de paréntesis
saludar(); // '¡Hola, mundo!'


function sumar() {
    return 2 + 2;//return es una palabra reservada que indica que la función devolverá un valor. En este caso, la función devolverá el resultado de la suma 2 + 2.
} 

// La función `sumar` no recibe parámetros, pero devuelve el resultado de la suma de 2 + 2.
let resultado = sumar(); // Llamamos a la función y guardamos el resultado en una variable
console.log(resultado); // 4
