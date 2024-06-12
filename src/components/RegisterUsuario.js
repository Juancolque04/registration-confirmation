import React, { useState } from 'react';
import axios from 'axios';

const RegisterUsuario = () => {
  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/nuevo-usuario', usuario);
      console.log(response.data);
      setMensaje('Usuario registrado correctamente. Revisa tu correo electrónico para confirmar tu cuenta.');
      alert('Usuario registrado correctamente. Revisa tu correo electrónico para confirmar tu cuenta.');
      // Limpiar el formulario después del envío exitoso
      setUsuario({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
      setMensaje('Error al registrar el usuario');
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="title">Registro de Usuario</div>

        <form onSubmit={handleSubmit}>
          <div className="input-container ic1">
            <input
              type="text"
              name="username"
              className="input"
              placeholder=""
              value={usuario.username}
              onChange={handleChange}
              required
            />
            <label className="iLabel" htmlFor="username">Nombre de usuario</label>
          </div>

          <div className="input-container ic2">
            <input
              type="email"
              name="email"
              className="input"
              placeholder=""
              value={usuario.email}
              onChange={handleChange}
              required
            />
            <label className="iLabel" htmlFor="email">Correo electrónico</label>
          </div>

          <div className="input-container ic2">
            <input
              type="password"
              name="password"
              className="input"
              placeholder=""
              value={usuario.password}
              onChange={handleChange}
              required
            />
            <label className="iLabel" htmlFor="password">Contraseña</label>
          </div>

          <button className="submit" type="submit">Registrar</button>
        </form>

      </div>
    </div>
  );
};

export default RegisterUsuario;
