import {useState} from 'react';
import {Row, Col} from 'reactstrap';
import Formulario from './Formulario';
import Swal from 'sweetalert2';

const initialState = {
    nombre: '',
    cantidadPatas: 0,
    color: ''
}

const Animales = (props) => {
    const [animal, setAnimal] = useState(initialState);
    const [animales, setAnimales] = useState([{
        nombre: 'Perro',
        cantidadPatas: 4,
        color: 'Negro'
    }]);

    const agregar = (animal) => {
        const index = animales.findIndex(a => a.nombre === animal.nombre);
        if(index < 0) {
            setAnimales([...animales, animal])
            setAnimal(initialState);
        } else {
            Swal.fire({
                title: 'Animal duplicado',
                text: `El animal ${animal.nombre} ya existe`,
                icon: 'error'
            });
        }
    }

    return (
        <>
            <Row style={{border: "1px solid red"}}>
                <Col style={{border: "1px solid blue"}} className="text-center">
                    <h3>Animales</h3>
                </Col>
            </Row>
            <Row>
                <Formulario animal={animal} setAnimal={setAnimal} agregar={agregar}/>
            </Row>
            <Row style={{border: "1px solid green"}}>
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
        </>
    );
}

export default Animales;