const Animal = require("../models/animal.model");

module.exports.listar = (req, res) => {
    const filtros = {};
    if(req.query.nombre) {
        filtros.nombre = req.query.nombre;
    }
    Animal.find(filtros)
        .then(r => res.json({data: r}))
        .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};

module.exports.buscar = (req, res) => {
    Animal.findById(req.params.id)
    .then(r => res.json({data: r}))
    .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};

module.exports.crear = (req, res) => {
    console.log(req.body);
    Animal.create(req.body)
        .then(r => res.json({data: r}))
        .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};

module.exports.editar = (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body)
        .then(r => res.json({data: r}))
        .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};

module.exports.elimnar = (req, res) => {
    Animal.findByIdAndDelete(req.params.id)
        .then(r => res.json({data: r}))
        .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};