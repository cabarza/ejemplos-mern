
const Listado = (props) => {

    return (
        <ul  style={{border: "1px solid black"}}>
            {
                props.listado.map((l, i) => <li key={i}>{l}</li>)
            }
        </ul>
    );
}

export default Listado;