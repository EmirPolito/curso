let pairs = [
    [1, { name: "Emir" }],
    [2, { name: "Luis" }],
    [3, { name: "Maria" }],
];

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

function toCollection(array) {
    let Collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        Collection[idx].id = elemento[0];
    }
    return Collection;

}


let resultado = toCollection(pairs);
console.log(resultado);