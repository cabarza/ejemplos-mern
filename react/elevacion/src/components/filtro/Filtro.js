
const Filtro = (props) => {

    const buscar = () => {
        props.buscar();
    }

    const limpiar = () => {
        props.limpiar();
    }

    return (
        <div style={{border: "1px solid green"}}>
            <input type="text" value={props.filtro} onChange={e => props.setFiltro(e.target.value)} />
            <button type="button" onClick={buscar} style={{marginLeft:"5px"}}>Buscar</button>
            <button type="button" onClick={limpiar} style={{marginLeft:"5px"}}>Limpiar</button>
        </div>
    )
}

export default Filtro;