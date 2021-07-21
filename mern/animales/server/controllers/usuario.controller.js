const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');

module.exports.listar = (req, res) => {
    Usuario.find()
        .then(r => res.json({ data: r }))
        .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
};

module.exports.buscar = (req, res) => {
    Usuario.findById(req.params.id)
        .then(r => res.json({ data: r }))
        .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
};

module.exports.crear = (req, res) => {
    Usuario.findOne({ email: req.body.email })
        .then(resp => {
            if (resp) {
                res.json({ error: true, mensaje: "El correo electrónico ya está registrado" });
            } else {
                Usuario.create(req.body)
                    .then(r => res.json({ data: r }))
                    .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
            }
        })
};

module.exports.editar = (req, res) => {
    Usuario.findByIdAndUpdate(req.params.id, req.body)
        .then(r => res.json({ data: r }))
        .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
};

module.exports.elimnar = (req, res) => {
    Usuario.findByIdAndDelete(req.params.id)
        .then(r => res.json({ data: r }))
        .catch(error => res.json({ error: error, mensaje: "Ocurrió un error" }));
};

module.exports.login = (req, res) => {
    Usuario.findOne({ email: req.body.email })
        .then(resp => {
            if (resp == null) {
                res.json({ error: true, mensaje: "Usuario no existe" });
            } else {
                bcrypt.compare(req.body.password, resp.password)
                    .then(isValid => {
                        if (isValid) {
                            const logguedUser = {
                                _id: resp._id,
                                nombre: resp.nombre,
                                email: resp.email
                            };
                            const newToken = jwt.sign(logguedUser, secret);
                            res.cookie("usertoken", newToken, secret, {
                                httpOnly: true
                            }).json({ msg: "success!", data: logguedUser });
                        } else {
                            res.json({ error: true, mensaje: "Contraseña no valida" });
                        }
                    })
                    .catch(error => res.json({ error: error, mensaje: "Usuario o contraseña no válidos" }))
            }
        })
        .catch(error => res.json({ error: error, mensaje: "Usuario o contraseña no válidos" }))
}