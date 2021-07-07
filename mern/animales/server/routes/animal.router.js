const AnimalController = require("../controllers/animal.controller");

module.exports = app => {
    app.get("/api/animales", AnimalController.listar);
    app.get("/api/animales/:id", AnimalController.buscar);
    app.post("/api/animales", AnimalController.crear);
    app.put("/api/animales/:id", AnimalController.editar);
    app.delete("/api/animales/:id", AnimalController.elimnar);
}
