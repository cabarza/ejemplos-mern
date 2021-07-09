const TiposAnimales = require("../controllers/tipos-animal.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/tipos_animales", authenticate, TiposAnimales.listarTiposAnimales);
}