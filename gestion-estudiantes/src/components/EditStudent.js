import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    Nombre: '',
    Apellido: '',
    Carrera: '',
    Año_Ingreso: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/estudiantes/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/estudiantes/${id}`, student)
      .then(response => {
        alert('Estudiante actualizado');
        window.location.href = '/students';
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <h2>Editar Estudiante</h2>
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
        <Button variant="primary" type="submit">Actualizar Estudiante</Button>
      </Form>
    </Container>
  );
};

export default EditStudent;
