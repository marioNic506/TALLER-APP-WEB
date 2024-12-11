import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AddStudent = () => {
  const [student, setStudent] = useState({
    Nombre: '',
    Apellido: '',
    Carrera: '',
    Año_Ingreso: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/estudiantes', student)
      .then(response => {
        alert('Estudiante agregado');
        window.location.href = '/admin/students';
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <h2>Agregar Estudiante</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="Nombre"
            value={student.Nombre}
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
            value={student.Apellido}
            onChange={handleChange}
            placeholder="Ingresa el apellido"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Carrera</Form.Label>
          <Form.Control
            type="text"
            name="Carrera"
            value={student.Carrera}
            onChange={handleChange}
            placeholder="Ingresa la carrera"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Año de Ingreso</Form.Label>
          <Form.Control
            type="number"
            name="Año_Ingreso"
            value={student.Año_Ingreso}
            onChange={handleChange}
            placeholder="Ingresa el año de ingreso"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar Estudiante</Button>
      </Form>
    </Container>
  );
};

export default AddStudent;
