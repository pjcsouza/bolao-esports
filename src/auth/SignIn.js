import React from 'react';
import './auth.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Container, Col } from 'react-bootstrap';

// import { Container } from './styles';

function SignIn() {
    return (
        <Container>
        <Col></Col>
        <Col>
        <div className="login-form">
        <div className="login-title">Login</div>
            <Form>
                <Form.Group controlId="formBasicEmail" style={{margin:'auto ', marginBottom:'1em'}}>                    
                    <Form.Control type="email" placeholder="Enter email" />                  
    
                </Form.Group>
                <Form.Group controlId="formBasicPassword" style={{margin:'auto ', marginBottom:'2em'}}>                    
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
                <div style={{textAlign:'center', marginTop:'2em'}}>Não tem cadastro? <a href="/register">Cadastre-se aqui!</a></div>
            </Form>
            </div>
            </Col>
            <Col></Col>
            </Container>);
}

export default SignIn;