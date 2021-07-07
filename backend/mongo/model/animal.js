const mongoose = require("mongoose");

const AnimalSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "El nombre del animal es requerido"],
            minlength: [2, "No puede tener un nombre tan corto"]
        },
        cantidadPatas: {
            type: Number,
            required: [true, "Debe ingresar la cantidad de patas del animal"],
            max: [4, "No conozco animales con mas de 4 patas"]
        },
        color: String,
        tieneCola: Boolean
    },
    {
        timestamps: true
    }
);

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;