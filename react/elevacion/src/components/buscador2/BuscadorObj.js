import { useState } from 'react';
import Filtro from '../filtro/Filtro';
import ListadoObj from './ListadoObj';
import estilos from './BuscadorObj.module.css'; 

const objetos = [
    {
        id: 1,
        nombre: 'Gato'
    },
    {
        id: 2,
        nombre: 'Perro'
    },
    {
        id: 3,
        nombre: 'León'
    },
    {
        id: 4,
        nombre: 'Tigre'
    }
]

const estilo = {
    backgroundColor:'grey',
    color:'white'
}

const BuscadorObj = (props) => {
    const [filter, setFilter] = useState('');
    const [datos, setDatos] = useState(objetos);

    const buscar = () => {
        setDatos(objetos.filter(o => o.id == filter || o.nombre.indexOf(filter) >= 0));
    }

    const limpiar = () => {
        setDatos([]);
        setFilter('')
    }

    return (
        <div>
            <h1 className={estilos.alineacion} style={estilo}> Bucador de Animales </h1>
            <Filtro filtro={filter} setFiltro={setFilter} buscar={buscar} limpiar={limpiar}/>
            <ListadoObj listado={datos} />
        </div>
    );
}

export default BuscadorObj;