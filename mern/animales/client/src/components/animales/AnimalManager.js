import React, {useState, useEffect} from 'react';
import AnimalList from "./AnimalList";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Row} from 'reactstrap';
import AnimalForm from './AnimalForm';
import {BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';

const AnimalManager = props => {
    let { path, url } = useRouteMatch();
    
    const [datos, setDatos] = useState([]);

    useEffect(() =>{
        axios.get('/api/animales')
            .then(resp => setDatos(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el listado de animales', 'error'))
    }, []);

    return (
        <Row>
            <Router>
                <Switch>
                    <Route exact path={path}>
                        <AnimalList datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`${path}/crear`}>
                        <AnimalForm crear={true} datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`${path}/modificar/:id`}>
                        <AnimalForm modificar={true} datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`${path}/ver/:id`}>
                        <AnimalForm  ver={true}/>
                    </Route>
                </Switch>
            </Router>
        </Row>
    );
}

export default AnimalManager;