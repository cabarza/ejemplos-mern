const { populate } = require("../models/animal.model");
const Animal = require("../models/animal.model");
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');

module.exports.listar = (req, res) => {
    const filtros = {};
    if(req.query.nombre) {
        filtros.nombre = req.query.nombre;
    }
    Animal.find(filtros).populate('propietario')
        .then(r => res.json({data: r}))
        .catch(error => res.json({error: error, mensaje: "Ocurrió un error"}));
};

module.exports.buscar = (req, res) => {
    Animal.findById(req.params.id).populate('propietario')
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

module.exports.adoptar = (req, res) => {
    Animal.findById(req.params.id)
    .then(animal => {
        jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
            if (err) {
              res.status(401).json({verified: false});
            } else {
              animal.propietarioId = payload._id;
              animal.fecha = new Date();
              Animal.findByIdAndUpdate(animal._id, animal, {useFindAndModify: true})
                .then(r => res.json({data: r}))
                .catch(error => res.json({error: error, mensaje: "Ocurrió un error al adoptar"}));
            }
          });
    })
    .catch(error => res.json({error: error, mensaje: "No existe el animal"}));
}