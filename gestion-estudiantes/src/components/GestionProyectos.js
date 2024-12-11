import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const GestionProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/proyectos')
      .then((response) => {
        setProyectos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los proyectos:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Gestión de Proyectos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Proyecto</th>
            <th>Estado</th>
            <th>Tutor</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.ID_Proyecto}>
              <td>
                {proyecto.estudiante?.Nombre} {proyecto.estudiante?.Apellido}
              </td>
              <td>{proyecto.Título}</td>
              <td>{proyecto.estado?.Descripción}</td>
              <td>
                {proyecto.tutor?.Nombre} {proyecto.tutor?.Apellido}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GestionProyectos;
