import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log('Usuario logueado');

      navigate('/admin');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Introduce tu correo" 
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Contraseña</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Introduce tu contraseña" 
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
