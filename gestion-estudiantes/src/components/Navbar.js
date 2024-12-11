import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaPhoneAlt } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          UATF 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              <FaHome className="mr-2" /> Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">
              <FaSignInAlt className="mr-2" /> Iniciar sesión
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="text-white">
              <FaPhoneAlt className="mr-2" /> Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/gestion-proyectos" className="text-white">
              Gestión de Proyectos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
