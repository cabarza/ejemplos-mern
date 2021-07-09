const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del animal es requerido"]
    },
    tipo: {
        type: String,
        required: [true, "Debe seleccionar el tipo de animal"]
    },
    color: {
        type: String,
        required: [true, "Debe seleccionar el color del animal"]
    },
    tamanio: String,
    fecha: Date
}, {timestamps: true});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;

