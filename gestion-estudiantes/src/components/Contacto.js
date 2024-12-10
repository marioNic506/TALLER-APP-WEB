import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado', { nombre, email, mensaje });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Nombre</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Tu nombre completo" 
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Tu correo electrónico" 
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Mensaje</label>
          <textarea 
            value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)} 
            placeholder="Escribe tu mensaje" 
            rows="5"
            style={{ padding: '10px', width: '100%', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
