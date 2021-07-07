const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require('./routes/animal.routes')(app);


mongoose.connect('mongodb://127.0.0.1/animales', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado a mi BD'))
    .catch(err => console.error('Error al conectarse a la BD', error));

app.listen( 3001, () => console.log(`Express levantó en el puerto: 3001`) );