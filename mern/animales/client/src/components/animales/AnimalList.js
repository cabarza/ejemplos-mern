import { Link, Redirect, useHistory } from 'react-router-dom';
import {Button, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Swal from 'sweetalert2';

function AnimalList(props) {

    const history = useHistory();

    const ver =(e, id) => {
        history.push('/ver/'+id);
    }

    const modificar =(e, id) => {
        history.push('/modificar/'+id);
    }

    const eliminar = (e, id) => {
        Swal.fire({
            title: 'Eliminar animal',
            text: '¿Está seguro que desea eliminar el animal?',
            icon: 'warning',
            showCancelButton: true
        }).then(result => {
            if(result.value) {
                axios.delete('http://localhost:3001/api/animales/'+id)
                .then(resp => {
                    const animales = props.datos.filter(a => a._id !== id);
                    props.setDatos(animales); 
                }).catch(error => Swal.fire('Error al obtener los datos', 'Ha ocurrido un problema al intentar eliminar el animal', 'error'))
            }
        })
    }

    return (
        <Col>
            <Link to="/crear">
                <FontAwesomeIcon icon={faPlus}/>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Color</th>
                        <th>Tamaño</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.map((animal, index) => <tr key={index}>
                        <td>
                            <Button color="primary" style={{margin:'2px'}} onClick={e => ver(e, animal._id)}><FontAwesomeIcon icon={faEye}/></Button>
                            <Button color="secondary" style={{margin:'2px'}} onClick={e => modificar(e, animal._id)}><FontAwesomeIcon icon={faPen}/></Button>
                            <Button color="danger" style={{margin:'2px'}} onClick={e => eliminar(e, animal._id)}><FontAwesomeIcon icon={faTrash}/></Button>
                        </td>
                        <td>{animal.tipo}</td>
                        <td>{animal.nombre}</td>
                        <td>{animal.color}</td>
                        <td>{animal.tamanio}</td>
                        <td>{animal.fecha?new Date(animal.fecha).toUTCString():''}</td>
                    </tr>)}
                </tbody>
            </table>
        </Col>
    )
}

export default AnimalList;