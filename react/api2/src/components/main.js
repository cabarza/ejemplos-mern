import {Router} from '@reach/router';
import { useState } from 'react';
import Listar from './listar';
import Ver from './ver';

const Main = () => {

    const [person, setPerson] = useState({});
    return (
        <Router>
            <Listar path="/" setPerson={setPerson} />
            <Ver path="/ver" person={person}/>
        </Router>
    );
}

export default Main;