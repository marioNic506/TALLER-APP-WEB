import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import Login from './components/Login';
import Contacto from './components/Contacto';
import GestionProyectos from './components/GestionProyectos';

import Admin from './components/Admin'; 
import AddProject from './components/AddProject';
import AddStudent from './components/AddStudent';
import AddTutor from './components/AddTutor';
import EditProject from './components/EditProject';
import EditStudent from './components/EditStudent';
import EditTutor from './components/EditTutor';
import ProjectManagement from './components/ProjectManagement';
import StudentManagement from './components/StudentManagement';
import TutorManagement from './components/TutorManagement';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />  
            <Home />
            <Footer /> 
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/gestion-proyectos" element={
          <>
            <Navbar />
            <GestionProyectos />
          </>
        } />
        
        <Route path="/admin" element={<Admin />} />
        
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/students/add" element={<AddStudent />} />
        <Route path="/admin/students/edit/:id" element={<EditStudent />} />
        <Route path="/admin/projects" element={<ProjectManagement />} />
        <Route path="/admin/projects/add" element={<AddProject />} />
        <Route path="/admin/projects/edit/:id" element={<EditProject />} />
        <Route path="/admin/tutors" element={<TutorManagement />} />
        <Route path="/admin/tutors/add" element={<AddTutor />} />
        <Route path="/admin/tutors/edit/:id" element={<EditTutor />} />
      </Routes>
    </Router>
  );
}

export default App;
