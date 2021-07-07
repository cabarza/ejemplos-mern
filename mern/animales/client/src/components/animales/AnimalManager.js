import React, {useState, useEffect} from 'react';
import AnimalList from "./AnimalList";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Row} from 'reactstrap';
import AnimalForm from './AnimalForm';
import {Router} from '@reach/router';

const AnimalManager = props => {

    const [datos, setDatos] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/animales')
            .then(resp => setDatos(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el listado de animales', 'error'))
    }, []);

    return (
        <Row>
            <Router>
                <AnimalList path="/" datos={datos} setDatos={setDatos}/>
                <AnimalForm path="/crear" crear={true} datos={datos} setDatos={setDatos}/>
                <AnimalForm path="/ver/:id" ver={true}/>
                <AnimalForm path="/modificar/:id" modificar={true} datos={datos} setDatos={setDatos}/>
            </Router>
        </Row>
    );
}

export default AnimalManager;