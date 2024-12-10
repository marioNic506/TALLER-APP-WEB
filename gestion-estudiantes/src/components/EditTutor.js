import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditTutor = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState({
    Nombre: '',
    Apellido: '',
    Especialidad: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tutors/${id}`)
      .then(response => {
        setTutor(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setTutor({ ...tutor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/tutors/${id}`, tutor)
      .then(response => {
        alert('Tutor actualizado correctamente');
        window.location.href = '/tutors'; 
      })
      .catch(error => {
        console.error('Error al actualizar el tutor:', error);
        alert('Hubo un error al actualizar el tutor');
      });
  };

  return (
    <Container>
      <h2>Editar Tutor</h2>
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
        <Button variant="primary" type="submit">Actualizar Tutor</Button>
      </Form>
    </Container>
  );
};

export default EditTutor;
