import React, {useState, useEffect, useContext} from 'react';
import AnimalList from "./AnimalList";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Row} from 'reactstrap';
import AnimalForm from './AnimalForm';
import {BrowserRouter as Router, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import UserContext from '../../context/userContext';

const AnimalManager = props => {
    let { path, url } = useRouteMatch();
    const context = useContext(UserContext);
    
    const [datos, setDatos] = useState([]);
    const [actualizar, setActualizar] = useState(false);

    
    useEffect(() =>{
        axios.get('/api/animales')
            .then(resp => setDatos(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el listado de animales', 'error'));
        props.socket.on('adopcion_realizada', (data) => {
            console.log('NUEVO ADOPTADO', data);
            setActualizar(!actualizar)
            
        });
    }, [actualizar]);

    return (
        <>
            <Row>
                <h1>{context.usuario.nombre}</h1>
            </Row>
            <Row>
                <Router>
                    <Switch>
                        <Route exact path={path}>
                            <AnimalList socket={props.socket} datos={datos} setDatos={setDatos} actualizar={actualizar} setActualizar={setActualizar}/>
                        </Route>
                        {context.usuario.tipo && context.usuario.tipo == 'ADMIN' &&  
                            <Route path={`${path}/crear`}>
                                <AnimalForm crear={true} datos={datos} setDatos={setDatos}/>
                            </Route>
                        }
                        {context.usuario.tipo && context.usuario.tipo == 'ADMIN' && 
                            <Route path={`${path}/modificar/:id`}>
                                <AnimalForm modificar={true} datos={datos} setDatos={setDatos}/>
                            </Route>
                        }
                        <Route path={`${path}/ver/:id`}>
                            <AnimalForm  ver={true}/>
                        </Route>
                    </Switch>
                </Router>
            </Row>
        </>
    );
}

export default AnimalManager;