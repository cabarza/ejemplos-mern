import { Link, Redirect, useHistory } from 'react-router-dom';
import {Button, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash, faPlus, faPaw, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Swal from 'sweetalert2';

function AnimalList(props) {

    const history = useHistory();

    const ver =(e, id) => {
        history.push('/animales/ver/'+id);
    }

    const modificar =(e, id) => {
        history.push('/animales/modificar/'+id);
    }

    const eliminar = (e, id) => {
        Swal.fire({
            title: 'Eliminar animal',
            text: '¿Está seguro que desea eliminar el animal?',
            icon: 'warning',
            showCancelButton: true
        }).then(result => {
            if(result.value) {
                axios.delete('/api/animales/'+id)
                .then(resp => {
                    const animales = props.datos.filter(a => a._id !== id);
                    props.setDatos(animales); 
                }).catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar eliminar el animal', 'error'))
            }
        })
    }

    const adoptar = (e, id) => {
        axios.patch('/api/animales/'+id, {})
            .then(resp => {
                if(resp.data.error) {
                   Swal.fire('Error al adoptar', resp.data.mensaje, 'error');
                } else {
                    props.socket.emit('adoptar_event', {id: id});
                    props.setActualizar(!props.actualizar);
                }
            });
    }

    return (
        <Col>
            <Link to="/animales/crear">
                <FontAwesomeIcon icon={faPlus}/>
            </Link>
            <Link to="/" style={{float: 'right'}}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Color</th>
                        <th>Tamaño</th>
                        <th>Propietario</th>
                        <th>Fecha Adopción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.map((animal, index) => <tr key={index}>
                        <td>
                            <Button color="primary" style={{margin:'2px'}} onClick={e => ver(e, animal._id)}><FontAwesomeIcon icon={faEye}/></Button>
                            <Button color="secondary" style={{margin:'2px'}} onClick={e => modificar(e, animal._id)}><FontAwesomeIcon icon={faPen}/></Button>
                            <Button color="danger" style={{margin:'2px'}} onClick={e => eliminar(e, animal._id)}><FontAwesomeIcon icon={faTrash}/></Button>
                            <Button color="success" style={{margin:'2px'}} onClick={e => adoptar(e, animal._id)}><FontAwesomeIcon icon={faPaw}/></Button>
                        </td>
                        <td>{animal.tipo}</td>
                        <td>{animal.nombre}</td>
                        <td>{animal.color}</td>
                        <td>{animal.tamanio}</td>
                        <td>{animal.propietario?.length>0?animal.propietario[0].nombre:''}</td>
                        <td>{animal.fecha?new Date(animal.fecha).toUTCString():''}</td>
                    </tr>)}
                </tbody>
            </table>
        </Col>
    )
}

export default AnimalList;