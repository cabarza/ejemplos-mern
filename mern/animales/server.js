const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
const { crearUsuarioInicial } = require('./server/controllers/usuario.controller');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


require("./server/config/mongoose.config");

app.use( cookieParser() );

app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/file', upload.single('file'), function (req, res, next) {
    console.log('FILE',req.file);
    res.json({ok: true});
})

require("./server/routes/usuario.router")(app);
require("./server/routes/tipos-animal.routes")(app);
require("./server/routes/animal.router")(app);

crearUsuarioInicial();


const server = app.listen(8000, () => console.log("Server listo"));

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log(socket.id);
    socket.broadcast.emit("bienvenida_event", {mensaje: "Bienvenido a Animales", fecha: new Date()});

    socket.on("adoptar_event", data => {
        console.log("adoptar_event", socket.id, data);
        socket.broadcast.emit("adopcion_realizada", data);
    });
});