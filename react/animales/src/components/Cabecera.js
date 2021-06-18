import { useContext } from "react";
import MiContexto from "../context/MiContexto";
import { Link } from "@reach/router";

const Cabecera = (props) => {
    const miContexto = useContext(MiContexto);
    return (
        <div className="text-center" style={{backgroundColor:"darkblue", color: "white"}}>
            <h1>Animales ({miContexto.cantidadAnimales})</h1>
            <Link to="/">Personas</Link>&nbsp;
            <Link to="/animales">Animales</Link>
        </div>
    );
}

export default Cabecera;