const UsuarioController = require("../controllers/usuario.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/usuarios", authenticate, UsuarioController.listar);
    app.get("/api/usuarios/:id", authenticate, UsuarioController.buscar);
    app.post("/api/usuarios", UsuarioController.crear);
    app.put("/api/usuarios/:id", authenticate, UsuarioController.editar);
    app.delete("/api/usuarios/:id", authenticate, UsuarioController.elimnar);


    app.post("/api/login", UsuarioController.login);
}
