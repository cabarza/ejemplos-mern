import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';

const Formulario = ({animal, setAnimal, agregar}) => {
    
    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setAnimal({
            ...animal,
            [name]: value
        })
    }

    const guardar = (e) => {
        agregar(animal);
        e.preventDefault();
    }

    return (
        <Form onSubmit={guardar} style={{margin:"5px"}}>
            <h6 className="text-center">Formulario de animales</h6>
            <FormGroup>
                <Label>Nombre: </Label>
                <Input type="text" name="nombre" value={animal.nombre} onChange={actualizarFormulario} required minLength={2} maxLength={50}/>
            </FormGroup>
            <FormGroup>
                <Label>Color: </Label>
                <Input type="text" name="color" value={animal.color} onChange={actualizarFormulario} required maxLength={20}/>
            </FormGroup>
            <FormGroup>
                <Label>Cantidad de Patas: </Label>
                <Input type="number" name="cantidadPatas" value={animal.cantidadPatas} onChange={actualizarFormulario} required min={2} max={4}/>
            </FormGroup>
            <Row>
                <Col className="text-center">
                    <Button type="submit" color="success" className="btn btn-block">Guardar</Button>
                </Col>
            </Row>
        </Form>
    );

}

export default Formulario;