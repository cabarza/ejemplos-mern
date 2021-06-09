import react, { useState } from 'react';
import { Button } from "reactstrap";

const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    password: ''
}

const Main = (props) => {

    const [inputs, setInputs] = useState(initialState);

    const actualizarFormulario = (e) => {
        console.log(e);
        const input = e.target.name;
        const value = e.target.value;
        setInputs({
            ...inputs,
            [input]: value
        });
    }

    const holaFuncion = () => {
        alert(inputs.nombre + " " + inputs.apellido + " " + inputs.email);
    }

    return (
        <>
            <div style={{height:"100px", with:"100%", textAlign:"center", backgroundColor:"green", color:"white"}}>
                <h1>{props.titulo}</h1>
                <p>{props.subTitulo}</p>
            </div>
            <form action={holaFuncion}>
                <input name="nombre" type="text" value={inputs.nombre} onChange={actualizarFormulario} placeholder="Nombre" required minLength="5"/>
                <br/>
                <input name="apellido" type="text" value={inputs.apellido} onChange={actualizarFormulario} placeholder="Apellido"/>
                <br/>
                <input name="email" type="email" value={inputs.email} onChange={actualizarFormulario} placeholder="Email"/>
                <br/>
                <input name="password" type="password" value={inputs.password} onChange={actualizarFormulario} placeholder="Password" required minLength="6" maxLength="10"/>
                <br/>
                <Button name="boton" type="submit" color="primary">Submit</Button>
            </form>
            {props.children}
        </>
    )
}

export default Main;