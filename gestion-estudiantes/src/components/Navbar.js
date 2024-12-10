import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Gestión de Proyectos</Navbar.Brand>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
