const funcion = () => {
    console.log("Esto es un callback");
}

console.log('INICIO');
setTimeout(funcion, 1000);

setTimeout(() => {
    console.log("Esto es un callback anónimo");
}, 1000);