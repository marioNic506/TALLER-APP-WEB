import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
