const AnimalController = require("../controller/animal.controller");

module.exports = app => {
    app.get('/api/animales', AnimalController.listar);
    app.get('/api/animales/:id', AnimalController.obtenerPorId);
    app.post('/api/animales', AnimalController.crear);
    app.put('/api/animales/:id', AnimalController.actualizar);
    app.delete('/api/animales/:id', AnimalController.eliminar);
}