const tipos = [{codigo: 'perro', nombre: 'Perro'}, {codigo: 'gato', nombre: 'Gato'}, {codigo: 'cuye', nombre: 'Cuye'}, {codigo: 'huron', nombre:'Hurón'}];

module.exports.listarTiposAnimales = (req, res) => {
    res.json({ data: tipos });
}