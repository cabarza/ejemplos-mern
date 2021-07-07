import { popper } from '@popperjs/core';
import { navigate } from '@reach/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Row, Col, Form, FormGroup, Container, Label, Input, Button} from 'reactstrap';
import Swal from 'sweetalert2';


const initialState =  {
    nombre: '',
    tipo: '',
    color: '',
    tamanio: ''
}

const AnimalForm = props => {
    const [inputs, setInputs] = useState(initialState);
    const [tipos, setTipos] = useState([]);


    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, 
            [name]: value
        });
    }

    const crear = (e) => {
        axios.post('http://localhost:3001/api/animales', inputs)
            .then(resp => {
                if(resp.data && resp.data.data){
                    volver(e)
                    props.setDatos(props.datos.concat([resp.data.data]));
                } else {
                    Swal.fire('Error de validación', resp.data.error.message, 'error')
                }
            })
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar crear el animal', 'error'))
    }

    const editar = (e) => {
        axios.put('http://localhost:3001/api/animales/'+props.id, inputs)
        .then(resp => {
            const index = props.datos.findIndex(a => a._id === props.id);
            console.log('Index', index);
            props.datos.splice(index, 1, inputs);
            props.setDatos(props.datos);   
            volver(e)
        })
        .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar editar el animal', 'error'))
    }

    const guardar = (e) => {
        e.preventDefault();
        if(props.id) {
            editar();
        } else {
            crear();
        }
    }

    const volver = (e) => {
        navigate("/");
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/tipos_animales')
            .then(resp => setTipos(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el listado tipo de animales', 'error'))
        if(props.id) {
            axios.get('http://localhost:3001/api/animales/'+props.id)
            .then(resp => setInputs(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el animal con id ' + props.id, 'error'))
            
        }
    }, []);

    return (
        <Container>
            <Row>
                <h1>{ props.ver? `Ver ${inputs.nombre}`: props.modificar?`Editar ${inputs.nombre}`: 'Nuevo animal'}</h1>
            </Row>
            <Form onSubmit={guardar}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="tipo">Tipo</Label>
                            <Input type="select" name="tipo" value={inputs.tipo} onChange={actualizarFormulario} disabled={props.ver}>
                                <option>Seleccione</option>
                                { tipos && tipos.map((t, i) => <option key={i} value={t.codigo}>
                                        {t.nombre}
                                    </option> 
                                )}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="nombre">Nombre</Label>
                            <Input type="text" name="nombre" value={inputs.nombre} onChange={actualizarFormulario} disabled={props.ver}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="color">Color</Label>
                            <Input type="color" name="color" value={inputs.color} onChange={actualizarFormulario} disabled={props.ver}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="tamanio">Tamaño</Label>
                            <Input type="select" name="tamanio" value={inputs.tamanio} onChange={actualizarFormulario} disabled={props.ver}>
                                <option>Seleccione</option>
                                <option value="Pequeño">Pequeño</option>
                                <option value="Mediano">Mediano</option>
                                <option value="Grande">Grande</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        {props.crear && <Button type="submit">Crear</Button>}
                        {props.modificar && <Button type="submit">Modificar</Button>}
                        <Button type="button" onClick={volver}>Cerrar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default AnimalForm;