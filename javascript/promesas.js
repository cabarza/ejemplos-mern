const promise = new Promise((resolve, reject) => {
    let randomNumber = Math.random() * 1000;
    randomNumber > 500 ? resolve(randomNumber) : reject(randomNumber);
});

console.log('INICIO');
promise
    .then(numero => {
        console.log('EXITO', numero)
    })
    .catch(error => {
        console.log('ERROR', error)
    });
console.log('TERMNINO');
