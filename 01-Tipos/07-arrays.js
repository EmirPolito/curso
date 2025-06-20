//Los arreglos son un tipo de dato que permite almacenar múltiples valores en una sola variable.
// Los arreglos son objetos especiales que tienen un índice numérico y pueden contener cualquier tipo de


//[,,,,] a esto se conoce como un arreglo literal, la consola sale ordenado
let animales = ['perro', 'gato', 'loro', 'pez'];

//para imprimir el arreglo en consola, se puede hacer de la siguiente manera
console.log(animales);

//para acceder a un elemento específico del arreglo, se puede hacer de la siguiente manera
console.log(animales[0]); // 'perro'

//para agregar un nuevo elemento al arreglo, se puede hacer de la siguiente manera
animales[2] = 'dragon';
console.log(animales); // ['perro', 'gato', 'dragon', 'pez']

// en consola aparecera que todo esto es un 'object'
console.log(typeof animales); // 'object'

//esto devuelve la cantidad de elementos que tiene el arreglo
console.log(animales.length);