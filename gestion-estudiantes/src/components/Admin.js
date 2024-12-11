import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Admin = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="display-3 mb-4">Bienvenido al Panel de Administración</h1>
          <p className="lead">Desde aquí puedes gestionar estudiantes, proyectos y tutores.</p>
          <div>
            <Link to="/admin/students">
              <Button variant="primary" size="lg" className="m-2">Gestionar Estudiantes</Button>
            </Link>
            <Link to="/admin/projects">
              <Button variant="secondary" size="lg" className="m-2">Gestionar Proyectos</Button>
            </Link>
            <Link to="/admin/tutors">
              <Button variant="success" size="lg" className="m-2">Gestionar Tutores</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
