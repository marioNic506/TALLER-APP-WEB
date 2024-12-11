import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const TutorManagement = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tutores')
      .then(response => setTutors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/tutores/${id}`)
      .then(() => setTutors(tutors.filter(tutor => tutor.ID_Tutor !== id)))
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Gestión de Tutores</h2>
      <Link to="/admin/tutors/add">
        <Button variant="primary" className="mb-3">Agregar Tutor</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Tutor</th>
            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Acciones</th>
            

          </tr>
        </thead>
        <tbody>
          {tutors.map(tutor => (
            <tr key={tutor.ID_Tutor}>
            
              <td>{tutor.Nombre}</td>
              <td>{tutor.Apellido}</td>
              <td>{tutor.Especialidad}</td>
              <td>
                <Link to={`/admin/tutors/edit/${tutor.ID_Tutor}`} className="btn btn-warning mr-2">
                  Editar
                </Link>
                <Button onClick={() => handleDelete(tutor.ID_Tutor)} className="btn btn-danger">
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

export default TutorManagement;
