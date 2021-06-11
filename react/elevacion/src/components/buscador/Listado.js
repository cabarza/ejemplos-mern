
const Listado = (props) => {

    return (
        <ul>
            {
                props.listado.map((l, i) => <li key={i}>{l}</li>)
            }
        </ul>
    );
}

export default Listado;