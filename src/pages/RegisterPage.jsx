import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/apiService';
import { FaArrowLeft } from "react-icons/fa";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const mainRef = useRef();

  useEffect(() => {
    const setMinHeight = () => {
      if (!mainRef.current) return;
      mainRef.current.style.minHeight = `${window.innerHeight}px`;
    };
    setMinHeight();
    window.addEventListener("resize", setMinHeight);
    return () => {
      window.removeEventListener("resize", setMinHeight);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage(null);

    try {
      const result = await registerUser(username, email, password, rol);
      setMessage(result.message);
    } catch (err) {
      setMessage('Error al registrar usuario');
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <main ref={mainRef}>
      <article>
        <h1>Registro</h1>
        {message && <p style={{ color: message.includes("éxito") ? "blue" : "red" }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select name="rol" aria-label="Seleccione su tipo de usuario..." value={rol} onChange={(e) => setRol(e.target.value)} required>
            <option selected disabled value="">
            Seleccione su tipo de usuario...
            </option>
            <option value="lector">Lector</option>
            <option value="creador">Creador</option>
          </select>
          <fieldset>
            <a href="" onClick={() => goToLogin()}><FaArrowLeft /> Volver</a>
          </fieldset>
          <button type="submit">Registrarse</button>
        </form>
      </article>
    </main>
  );
}

export default RegisterPage;
