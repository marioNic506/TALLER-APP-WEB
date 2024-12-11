import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AddTutor = () => {
  const [tutor, setTutor] = useState({
    Nombre: '',
    Apellido: '',
    Especialidad: '',
  });

  const handleChange = (e) => {
    setTutor({ ...tutor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!tutor.Nombre || !tutor.Apellido || !tutor.Especialidad) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    axios.post('http://localhost:8000/api/tutors', tutor)
      .then(response => {
        alert('Tutor agregado correctamente');
        window.location.href = '/admin/tutors'; 
      })
      .catch(error => {
        console.error('Error al agregar el tutor:', error);
        alert('Hubo un error al agregar el tutor');
      });
  };

  return (
    <Container>
      <h2>Agregar Tutor</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="Nombre"
            value={tutor.Nombre}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="Apellido"
            value={tutor.Apellido}
            onChange={handleChange}
            placeholder="Ingresa el apellido"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            type="text"
            name="Especialidad"
            value={tutor.Especialidad}
            onChange={handleChange}
            placeholder="Ingresa la especialidad"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar Tutor</Button>
      </Form>
    </Container>
  );
};

export default AddTutor;
