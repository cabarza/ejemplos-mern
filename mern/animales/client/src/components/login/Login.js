import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import Swal from 'sweetalert2';

const Login = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState({email: '', password: ''});    

    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, 
            [name]: value
        });
    }
    
    const login = (e) => {
        e.preventDefault();
        axios.post('/api/login', inputs)
            .then(resp => {
                if(resp.data && !resp.data.error) {
                    history.push('/animales')
                } else {
                    Swal.fire('Error', resp.data.mensaje, 'error');
                }
            })
    }
    
    return (
        <Container>
            <Row>
                <h1>Login</h1>
            </Row>
            <Form onSubmit={login}>
                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" value={inputs.email} onChange={actualizarFormulario} required/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" value={inputs.password} onChange={actualizarFormulario} required/>
                        </FormGroup>
                    </Col>
                    <Col xs={12}>
                        <Button type="submit">Ingresar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Login;