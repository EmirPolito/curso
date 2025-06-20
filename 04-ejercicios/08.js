
let array = [{
    id: 1,
    name: "Emir",
}, {
    id: 2,
    name: "Luis",
}, {
    id: 3,
    name: "Maria",
}];


let pares = [
    [1, { id: 1, name: "Emir" }],
    [2, { id: 2, name: "Luis" }],
    [3, { id: 3, name: "Maria"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}


let resultado = toPairs(array)
console.log(resultado);