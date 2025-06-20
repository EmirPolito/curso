let user = {
    id: 1,
    name: "Emir",
    age: 18
};

for (let propiedad in user){
    console.log(propiedad, user['propiedad']);
}

let animales = ['Oso','Dragon','Perro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}