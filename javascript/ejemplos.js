// Condiciones
let arreglo = [1,2,3,4,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let booleano = true;
let nombre = 'CD';
let objeto = {
    nombre: 'Coding',
    apellido: 'Dojo'
};

if( (arreglo && arreglo.length == 3) 
    || nombre == 'JUAN' 
    || (booleano && nombre == 'CD')) {
    console.log('El largo del arreglo es 3');
} else if(arreglo && arreglo.length < 3) {
    console.log('El largo del arreglo es menor a 3');
} else {
    console.log('El largo del arreglo es mayor a 3');
}

switch(nombre) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'CD':
        console.log('CD');
        break;
    default:
        console.log('NINGUNO DE LAS ANTERIORES');
}

//Lógica Binaria ( Condiciones )
// V && V == V
// V && F == F
// F && F == F
// F && V == F

// V & V == V
// V & F == F
// F & F == F
// F & V == F


// V || V == V
// V || F == V
// F || F == F
// F || V == V

// V | V == V
// V | F == V
// F | F == F
// F | V == V

// !V == F
// !F == V

// V && V && F == F
// F && V && V && V && V && V && V && V && V == F
// V && V && V && V && V && V && F && V && V && V && V && V == F
// F || F || V || F || F || F == V
// (F && V) || (V && V && F) || (V || F || V) == V



for(let i = 0; i<10; i++) {
    console.log(i);
}

for(let o in objeto) {
    console.log(objeto[o]);
}
console.log('Antes del for 1');
for(let o of arreglo) {
    console.log(o);
}
console.log('Después del for 1');
console.log('Antes del for 2');
arreglo.forEach(o => console.log(o));
console.log('Después del for 2');
let i = 0;
while(i < 0) {
    console.log('WHILE ', i);
    i++;
}

do {
    i = 0;
    console.log('DO-WHILE ', i);
}while(i < 0);

while (true) {
    console.log('WHILE ', i);
    
    if(i == 10) {
        break;
    } else {
        sleep(100);
    }
    i++;
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

i = 0;
while (true) {
    i++;
    console.log('WHILE ', i);
    
    if(i == 10) {
        break;
    } else if(i % 2 == 0) {
        continue;
    } else {
        sleep(2000);
    }
}