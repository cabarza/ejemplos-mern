import { useState } from 'react';
import Filtro from '../filtro/Filtro';
import Listado from './Listado';

const Buscador = (props) => {
    const { items } = props;
    const [filter, setFilter] = useState('');
    const [datos, setDatos] = useState(items);

    const buscar = () => {
        if(filter.length === 0) {
            limpiar();
        } else {
            setDatos(items.filter(i => i.indexOf(filter) >= 0));
        }
    }

    const limpiar = () => {
        setDatos([]);
        setFilter('')
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1> Bucador de Strings </h1>
            <Filtro filtro={filter} setFiltro={setFilter} buscar={buscar} limpiar={limpiar}/>
            <Listado listado={datos} />
        </div>
    );
}

export default Buscador;