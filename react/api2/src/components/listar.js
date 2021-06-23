import {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Listar = (props) => {

    const [people, setPeople] = useState([]);
    const [pintar, setPintar] = useState(false);
    

    useEffect(() =>{
        // fetch('https://swapi.dev/api/people')
        // .then(response => {
        //     return response.json();
        // }).then(data => {
        //     setPeople(data.results);
        // }).catch(error => console.log(error));

        axios.get('https://swapi.dev/api/people')
        .then(response => {
            setPeople(response.data.results);
            setPintar(true);
        })
        .catch(error => console.log(error));

    }, []);

    const verPersona = (url) => {
        axios.get(url)
        .then(response => {
            console.log('Persona', response.data);
            props.setPerson(response.data);
            navigate("personas/ver")
        })
        .catch(error => console.log(error));
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estatura</th>
                        <th>Año Nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pintar && people.map((p, i) => <tr key={i}>
                                        <td>{p.name}</td>
                                        <td>{p.height}</td>
                                        <td>{p.birth_year}</td>
                                        <td><button type="button" onClick={e => verPersona(p.url)}>Ver</button></td>
                                </tr> )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Listar;