const simpsons = [{
    nombre: 'Omero',
    apellido: 'Simpson',
    email: 'omero@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Marge',
    apellido: 'Bouvier',
    email: 'marge@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Bart',
    apellido: 'Simpson',
    email: 'bart@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Lisa',
    apellido: 'Simpson',
    email: 'lisa@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
},
{
    nombre: 'Magie',
    apellido: 'Simpson',
    email: 'marge@mail.cl',
    direccion: {
        calle: 'Avenida Siempreviva',
        numero: 742,
        ciudad: 'Springfield',
        estado: 'Sin Información',
        pais: 'USA'
    }
}
]

const [omero, ...resto] = simpsons;

console.log('Omero: ', omero);
console.log('Los Simpsons sin Omero: ', resto);


const barney = {
    nombre: 'Barney',
    apellido: 'Gumble',
    email: null
}

const barneyModificado = {
    ...barney,
    email: 'barney@mail.cl'
}

const propiedad = 'email';
const valor = 'barney.gumble@mail.cl'

const barneyModificado2 = {
    ...barney,
    [propiedad]: valor
}


console.log('Barney antes ', barney);
console.log('Barney después', barneyModificado);
console.log('Barney después 2', barneyModificado2);

const losSimsonsMasBarney = [...simpsons, barney];
console.log('Los Simpsons mas Barney', losSimsonsMasBarney);

const barneyMasLosSimsons = [barney, ...simpsons];
console.log('Barney mas Los Simpsons', barneyMasLosSimsons);





