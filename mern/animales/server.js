const express = require("express");
const cors = require("cors");
const app = express();


require("./server/config/mongoose.config");

app.use(cors({credential: false, origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./server/routes/tipos-animal.routes")(app);
require("./server/routes/animal.router")(app);

const server = app.listen(3001, () => console.log("Server listo"));