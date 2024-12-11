import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/estudiantes')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/estudiantes/${id}`)
      .then(() => setStudents(students.filter(student => student.ID_Estudiante !== id)))
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Gestión de Estudiantes</h2>
      <Link to="/admin/students/add">
        <Button variant="primary" className="mb-3">Agregar Estudiante</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
            <th>Año de Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.ID_Estudiante}>
              <td>{student.Nombre}</td>
              <td>{student.Apellido}</td>
              <td>{student.Carrera}</td>
              <td>{student.Año_Ingreso}</td>
              <td>
                <Link to={`/admin/students/edit/${student.ID_Estudiante}`} className="btn btn-warning mr-2">
                  Editar
                </Link>
                <Button onClick={() => handleDelete(student.ID_Estudiante)} className="btn btn-danger">
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

export default StudentManagement;
