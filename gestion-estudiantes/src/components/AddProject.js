import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AddProject = () => {
  const [project, setProject] = useState({
    Título: '',
    Descripción: '',
    ID_Estudiante: '',
    ID_Tutor: '',
    ID_Estado: '',
    Fecha_Inicio: '',
    Fecha_Fin: '',
  });

  const [estudiantes, setEstudiantes] = useState([]);
  const [tutores, setTutores] = useState([]);
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/estudiantes')
      .then(response => setEstudiantes(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:8000/api/tutors')
      .then(response => setTutores(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:8000/api/estado_proyectos')
      .then(response => setEstados(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/proyectos', project)
      .then(response => {
        alert('Proyecto agregado con éxito');
        window.location.href = '/admin/projects';
      })
      .catch(error => {
        console.error('Error al agregar el proyecto:', error);
        alert('Error al agregar el proyecto');
      });
  };

  return (
    <Container>
      <h2>Agregar Proyecto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="Título"
            value={project.Título}
            onChange={handleChange}
            placeholder="Ingresa el título del proyecto"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="Descripción"
            value={project.Descripción}
            onChange={handleChange}
            placeholder="Ingresa una descripción del proyecto"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Estudiante</Form.Label>
          <Form.Control
            as="select"
            name="ID_Estudiante"
            value={project.ID_Estudiante}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un estudiante</option>
            {estudiantes.map(estudiante => (
              <option key={estudiante.ID_Estudiante} value={estudiante.ID_Estudiante}>
                {estudiante.Nombre}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tutor</Form.Label>
          <Form.Control
            as="select"
            name="ID_Tutor"
            value={project.ID_Tutor}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un tutor</option>
            {tutores.map(tutor => (
              <option key={tutor.ID_Tutor} value={tutor.ID_Tutor}>
                {tutor.Nombre}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Estado</Form.Label>
          <Form.Control
            as="select"
            name="ID_Estado"
            value={project.ID_Estado}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un estado</option>
            {estados.map(estado => (
              <option key={estado.ID_Estado} value={estado.ID_Estado}>
                {estado.Descripción}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control
            type="date"
            name="Fecha_Inicio"
            value={project.Fecha_Inicio}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de Fin</Form.Label>
          <Form.Control
            type="date"
            name="Fecha_Fin"
            value={project.Fecha_Fin}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar Proyecto</Button>
      </Form>
    </Container>
  );
};

export default AddProject;
