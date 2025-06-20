//El tipado dinámico en JavaScript permite que las variables puedan cambiar de tipo en tiempo de ejecución.
// Esto significa que una variable puede contener un valor de un tipo en un momento y luego cambiar

let numero= 42; // variable sin tipo
let nombre = 'hola mundo'; // variable sin tipo
let verdadero = true; // variable sin tipo
let undef; // variable sin tipo, no se ha inicializado
let nulo = null; // variable sin tipo

//no se podra crear variables que se llamen typeof, ya que es una palabra reservada
console.log(typeof numero); 
console.log(typeof nombre); 
console.log(typeof verdadero); 
console.log(typeof undef); 
console.log(typeof nulo); //en consola se mostrara object, es un error de javascript, ya que null no es un objeto, es un tipo primitivo