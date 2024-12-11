import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Contacto</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tu mensaje" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
