const Animal = require("../model/animal");

module.exports.listar = (req, res) => {
    Animal.find()
        .then(respuesta => res.json({datos: respuesta}))
        .catch(error => res.json({error: error}));
}

module.exports.obtenerPorId = (req, res) => {
    Animal.findById(req.params.id)
    .then(respuesta => res.json({datos: respuesta}))
    .catch(error => res.json({error: error}));
}

module.exports.crear = (req, res) => {
    Animal.create(req.body)
    .then(respuesta => res.json({datos: respuesta}))
    .catch(error => res.json({error: error}));
}

module.exports.actualizar = (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body)
    .then(respuesta => res.json({datos: respuesta}))
    .catch(error => res.json({error: error}));
}

module.exports.eliminar = (req, res) => {
    Animal.findByIdAndDelete(req.params.id)
    .then(respuesta => res.json({datos: respuesta}))
    .catch(error => res.json({error: error}));
}