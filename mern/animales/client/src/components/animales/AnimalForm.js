import { Redirect, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Row, Col, Form, FormGroup, Container, Label, Input, Button} from 'reactstrap';
import Swal from 'sweetalert2';


const initialState =  {
    nombre: '',
    tipo: '',
    color: '',
    tamanio: '',
    fecha: new Date().toLocaleDateString()
}

const AnimalForm = props => {

    const history = useHistory();
    let { id } = useParams();
    const [inputs, setInputs] = useState(initialState);
    const [tipos, setTipos] = useState([]);

    const [file, setFile] = useState({});

    


    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, 
            [name]: value
        });
    }

    const parseDate = (fecha) => {
        console.log('FECHA:', fecha);
        if(fecha) {
            const fechaSplit = fecha.split("-");
            return new Date(Date.UTC(fechaSplit[0], fechaSplit[1]-1, fechaSplit[2]));
        }
    }

    const crear = (e) => {
        inputs.fecha = parseDate(inputs.fecha);
        axios.post('/api/animales', inputs)
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
        inputs.fecha = parseDate(inputs.fecha);
        console.log('Inputs: ', inputs);
        axios.put('/api/animales/'+id, inputs)
        .then(resp => {
            const index = props.datos.findIndex(a => a._id === id);
            console.log('Index', index);
            props.datos.splice(index, 1, inputs);
            props.setDatos(props.datos);   
            volver(e)
        })
        .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar editar el animal', 'error'))
    }

    const subirArchivo = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            'file',
            file,
            file.name
        )

        axios.post('/api/file', formData, {enctype:"multipart/form-data"})
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
    }

    const guardar = (e) => {
        e.preventDefault();
        if(id) {
            editar();
        } else {
            crear();
        }
    }

    const volver = (e) => {
        history.push('/animales');
        // return <Redirect to="/" />
    }

    useEffect(() => {
        axios.get('/api/tipos_animales')
            .then(resp => setTipos(resp.data.data))
            .catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar obtener el listado tipo de animales', 'error'))
        if(id) {
            axios.get('/api/animales/'+id)
            .then(resp => {
                console.log('Data: ', resp.data.data);
                let fechaValor = new Date();
                if(resp.data.data.fecha) {
                    fechaValor = new Date(resp.data.data.fecha)
                }
                console.log('Fecha Valor: ', fechaValor.toLocaleDateString());
                setInputs({...resp.data.data, ['fecha']: fechaValor.toLocaleDateString()});
            })
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
                    <Col xs={12}>
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
                    <Col xs={12}>
                        <FormGroup>
                            <Label for="nombre">Nombre</Label>
                            <Input type="text" name="nombre" value={inputs.nombre} onChange={actualizarFormulario} disabled={props.ver}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label for="color">Color</Label>
                            <Input type="color" name="color" value={inputs.color} onChange={actualizarFormulario} disabled={props.ver}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
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
                    <Col xs={12}>
                        <FormGroup>
                            <Label for="tamanio">Fecha</Label>
                            <Input type="date" name="fecha" value={inputs.fecha} onChange={actualizarFormulario} disabled={props.ver}/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        {props.crear && <Button type="submit">Crear</Button>}
                        {props.modificar && <Button type="submit">Modificar</Button>}
                        <Button type="button" onClick={volver}>Cerrar</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <form onSubmit={subirArchivo} encType="multipart/form-data">
                    <input type="file" name="file" onChange={e => setFile(e.target.files[0])}/>
                    <Button type="submit">Subir Archivo</Button>
                </form>
            </Row>
        </Container>
    );
}

export default AnimalForm;