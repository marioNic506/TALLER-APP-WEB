
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import StudentManagement from './components/StudentManagement';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import ProjectManagement from './components/ProjectManagement';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import TutorManagement from './components/TutorManagement';
import AddTutor from './components/AddTutor';
import EditTutor from './components/EditTutor';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/edit/:id" element={<EditStudent />} />
          <Route path="/projects" element={<ProjectManagement />} />
          <Route path="/projects/add" element={<AddProject />} />
          <Route path="/projects/edit/:id" element={<EditProject />} />
          <Route path="/tutors" element={<TutorManagement />} />
          <Route path="/tutors/add" element={<AddTutor />} />
          <Route path="/tutors/edit/:id" element={<EditTutor />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
