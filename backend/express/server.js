const express = require("express");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


var objs = []


app.get('/api/test', (req, res) =>{
    res.json(objs);
});

app.get('/api/test/:posicion', (req, res) =>{
    const posicion = req.params.posicion; 
    if(posicion < objs.length) {
        res.json(objs[posicion]);
    } else {
        res.json({'error': 'No existe el elemento consultado'})
    }
});

app.post('/api/test', (req, res) => {
    if(req.body) {
        objs.push(req.body);
        res.json({'ok': 'Objeto agregado exitósamente'})
    } else {
        res.json({'error': 'Debe enviar un objeto válido'})
    }
});

app.put('/api/test/:posicion', (req, res) => {
    if(req.body) {
        const posicion = req.params.posicion;
        if(posicion < objs.length) {
            objs.splice(posicion, 1, req.body)
            res.json({'ok': 'Objeto actualizado exitósamente'})
        } else {
            res.json({'error': 'No existe el elemento a actualizar'})
        }
    } else {
        res.json({'error': 'Debe enviar un objeto válido'})
    }
});

app.delete('/api/test/:posicion', (req, res) => {
    const posicion = req.params.posicion;
    if(posicion < objs.length) {
        objs.splice(posicion, 1)
        res.json({'ok': 'Objeto eliminado exitosamente'})
    } else {
        res.json({'error': 'No existe el elemento a eliminado'})
    }
});

app.listen( 3001, () => console.log(`Express levantó en el puerto: 3001`) );