const arreglo = Object.freeze([1, 2, 3]);

const arreglo2 = [4, 5, 6].concat(arreglo);

console.log(arreglo, arreglo2);

let arreglo3 = arreglo.slice(0, arreglo.length - 1);

console.log(arreglo3);

arreglo2.sort((a, b) => b - a);

console.log(arreglo2);

arreglo3 = arreglo2.map(n => n**2);

console.log(arreglo3);

const impares = arreglo2.filter(n => n%2 !== 0);

console.log(impares);

const uno = arreglo2.find(n => n === 1);

const indiceDeUno = arreglo2.findIndex(n => n === 1);

arreglo2.splice(indiceDeUno, 1);

console.log(uno, indiceDeUno, arreglo2);

const total = arreglo2.reduce((n, total) => n+total);

console.log(total);
