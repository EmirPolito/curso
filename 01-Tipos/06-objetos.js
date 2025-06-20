//Los objetos son una colección de propiedades y métodos que representan un conjunto de datos relacionados.
// Los objetos pueden contener otros objetos, arreglos y funciones.


//variables declaradas
let nombre = 'Homer Simpson';
let caricatura = 'Los Simpsons';
let edad = 39;

//objeto, en consola se muestra como un objeto pero desorganizado
let personaje = {
    nombre: 'Homer Simpson',
    caricatura: 'Los Simpsons',
    edad: 39,
};

console.log(personaje);

//para acceder a una propiedad específica del objeto con 'personaje.edad'
//otra forma de acceder a las propiedades del objeto es con 'personaje['nombre']'
console.log(personaje['nombre']); 

//para agregar una nueva propiedad al objeto, se puede hacer de la siguiente manera
personaje.peso = 80;

//para eliminar una propiedad del objeto, se puede hacer de la siguiente manera
delete personaje.edad;