import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/proyectos')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/proyectos/${id}`)
      .then(() => {
        setProjects(projects.filter(project => project.ID_Proyecto !== id));
      })
      .catch(error => console.error('Error deleting project:', error));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Gestión de Proyectos</h2>
      <Link to="/admin/projects/add">
        <Button variant="primary" className="mb-3">Agregar Proyecto</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.ID_Proyecto}>
              <td>{project.Título}</td> 
              <td>{project.Descripción}</td>
              <td>{project.Fecha_Inicio}</td>
              <td>{project.Fecha_Fin}</td>
              <td>
                <Link to={`/admin/projects/edit/${project.ID_Proyecto}`} className="btn btn-warning mr-2">
                  Editar
                </Link>
                <Button onClick={() => handleDelete(project.ID_Proyecto)} className="btn btn-danger">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProjectManagement;



