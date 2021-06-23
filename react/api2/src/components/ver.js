import {navigate} from '@reach/router';
import { useEffect } from 'react';


const Ver = (props) => {

    const volver = () => {
        navigate('/personas')
    }

    useEffect(() =>{
        console.log('LLEGO!!!!', props.person);

    }, []);

    return (
        <>
            <label>Nombre</label> <p>{props.person.name}</p>
            <label>Estatura</label> <p>{props.person.height}</p>
            <label>Peso</label> <p>{props.person.mass}</p>
            <label>Color de pelo</label> <p>{props.person.hair_color}</p>
            <label>Color de piel</label> <p>{props.person.skin_color}</p>
            <button type="button" onClick={volver}>Volver</button>
        </>
    )
}

export default Ver;