const Persona = require('./clases');

caminar = (objeto, funcion) => {
    console.log(`${objeto.nombre} ${funcion()}`);
}

caminarHombre = () => {
    return 'es hombre y está caminando.';
}

caminarMujer = () => {
    return 'es mujer y está caminando.';
}

caminarAdolecente = () => {
    return 'es adolecente y está caminando.';
}

const juanita = new Persona('Juanita', 'Perez', 'nn@nn.cl');
const pepito = new Persona('Pepito', 'Palote', 'pp@pp.cl');

caminar(juanita, caminarMujer);

caminar(pepito, caminarHombre);

