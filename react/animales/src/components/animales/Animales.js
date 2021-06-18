import {useContext, useState} from 'react';
import {Row, Col} from 'reactstrap';
import Formulario from './Formulario';
import Swal from 'sweetalert2';
import MiContexto from '../../context/MiContexto';

const initialState = {
    nombre: '',
    cantidadPatas: 0,
    color: ''
}

const Animales = (props) => {

    const miContexto = useContext(MiContexto);
    
    const [animal, setAnimal] = useState(initialState);
    const [animales, setAnimales] = useState([]);


    const agregar = () => {
        const index = animales.findIndex(a => a.nombre === animal.nombre);
        if(index < 0) {
            setAnimales([...animales, animal])
            setAnimal(initialState);
            miContexto.setCantidadAnimales(miContexto.cantidadAnimales + 1);
        } else {
            Swal.fire({
                title: 'Animal duplicado',
                text: `El animal ${animal.nombre} ya existe`,
                icon: 'error'
            });
        }
    }

    return (
        <div style={{border: "1px solid red"}}>
            <Row>
                <Col className="text-center">
                    <h3>Animales</h3>
                </Col>
                <Col>
                    <p>Nombre: {animal.nombre}</p>
                    <p>Color: {animal.color}</p>
                    <p>Cantidad: {animal.cantidadPatas}</p>
                </Col>
            </Row>
            <Row>
                <Formulario animal={animal} setAnimal={setAnimal} agregar={agregar}/>
            </Row>
            <Row>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Color</th>
                            <th>Cantidad de Patas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            animales.map((a, i) => <tr key={i}>
                                <td>{a.nombre}</td>
                                <td>{a.color}</td>
                                <td>{a.cantidadPatas}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </Row>
        </div>
    );
}

export default Animales;