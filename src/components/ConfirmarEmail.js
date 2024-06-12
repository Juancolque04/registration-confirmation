import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ConfirmarEmail = () => {
  const { id } = useParams();
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const confirmarCorreo = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/api/confirmar/${id}`);
        setMensaje(response.data.msg);
      } catch (error) {
        console.error(error);
        setMensaje('Error al confirmar el correo electrónico');
      }
    };

    confirmarCorreo();
  }, [id]);

  return (
    <div className="container">
      <div className="custom-card">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark-circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark-check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div className="text-container">
          <span className="card-title">Confirmación de Correo Electrónico</span>
          <p className="card-text">
            {mensaje}
          </p>
        </div>
      </div>

    </div>
  );
};

export default ConfirmarEmail;
