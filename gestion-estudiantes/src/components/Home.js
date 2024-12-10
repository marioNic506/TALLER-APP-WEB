import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="display-3 mb-4">Bienvenido a la Gestión de Proyectos</h1>
          <p className="lead">Administra estudiantes, proyectos y tutores desde aquí.</p>
          <div>
            <Link to="/students">
              <Button variant="primary" size="lg" className="m-2">Gestionar Estudiantes</Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary" size="lg" className="m-2">Gestionar Proyectos</Button>
            </Link>
            <Link to="/tutors">
              <Button variant="success" size="lg" className="m-2">Gestionar Tutores</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
