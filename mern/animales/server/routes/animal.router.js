const AnimalController = require("../controllers/animal.controller");
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/animales", authenticate, AnimalController.listar);
    app.get("/api/animales/:id", authenticate, AnimalController.buscar);
    app.post("/api/animales", authenticate, AnimalController.crear);
    app.put("/api/animales/:id", authenticate, AnimalController.editar);
    app.delete("/api/animales/:id", authenticate, AnimalController.elimnar);
}
