class Persona {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    caminar = () =>{
        console.log('Caminar Generico');
    }

    dormir = () => {
        console.log('Dormir Generico');
    }

    comer = () => {
        console.log('Comer Generico');
    }
}

class Alienigena extends Persona {
    constructor(nombre, apellido, email, planeta) {
        super(nombre, apellido, email);
        this.planeta = planeta;
    }

    mostrarPlaneta() {
        console.log(this.planeta);
    }
}

class Hombre extends Alienigena {
    constructor(nombre, apellido, email, conBarba) {
        super(nombre, apellido, email, 'Marte');
        this.conBarba = conBarba;
    }

    dormir = () => {
        console.log(`${this.nombre} ya esta durmiendo`);
    }

    levantarse = () => {
        console.log(`${this.nombre} se está levantando`);
    }
}

class Mujer extends Persona {
    constructor(nombre, apellido, email, colorCabello) {
        super(nombre, apellido, email);
        this.colorCabello = colorCabello;
    }

    caminar = () => {
        // Funciones flechas no pueden invocar a super, esto es una restricción por el scope de la función flecha
        console.log(`${this.nombre} salió a caminar`);
    }
}

class Adolecente extends Persona {
    constructor(nombre, apellido, email, tipoMusica) {
        super(nombre, apellido, email);
        this.tipoMusica = tipoMusica;
    }
}

module.exports = Persona;



const p = new Persona('Persona 1', 'Apellido 1', 'generico@persona.cl');
p.caminar();

const m = new Mujer('Juanita', 'Perez', 'jp@mail.cl', 'Castaño');
m.caminar();

const h = new Hombre('Julio', 'Verne', 'jv@mail.cl', false);
h.dormir();
h.levantarse();
h.mostrarPlaneta();