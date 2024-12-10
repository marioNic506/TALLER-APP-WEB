import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    Título: '',
    Descripción: '',
    Fecha_Inicio: '',
    Fecha_Fin: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/proyectos/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('No se pudo cargar el proyecto.');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    axios
      .put(`http://localhost:8000/api/proyectos/${id}`, project)
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate('/projects'), 2000); 
      })
      .catch((err) => {
        setError('No se pudo actualizar el proyecto. Inténtalo nuevamente.');
        console.error(err); 
      });
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Cargando...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Editar Proyecto</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">¡Proyecto actualizado con éxito!</Alert>}
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
            placeholder="Ingresa una descripción"
            required
          />
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
        <Button variant="primary" type="submit">Actualizar Proyecto</Button>
      </Form>
    </Container>
  );
};

export default EditProject;
