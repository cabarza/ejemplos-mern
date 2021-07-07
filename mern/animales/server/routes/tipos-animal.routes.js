const TiposAnimales = require("../controllers/tipos-animal.controller");

module.exports = app => {
    app.get("/api/tipos_animales", TiposAnimales.listarTiposAnimales);
}