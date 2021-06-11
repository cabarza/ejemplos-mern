
const ListadoObj = (props) => {

    return (
        <ul>
            {
                props.listado.map((l, i) => <li key={i}>{l.id} - {l.nombre}</li>)
            }
        </ul>
    );
}

export default ListadoObj;