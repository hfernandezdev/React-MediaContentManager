import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/apiService';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

    setError(null);

    try {
      const result = await loginUser(username, password);

      if (result.accessToken) {
        navigate('/');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <main ref={mainRef}>
      <article>
        <h1>Iniciar Sesión</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <fieldset>
              <label htmlFor="remember">
                <input type="checkbox" role="switch" id="remember" name="remember" />
                  Recuérdame
              </label>
            </fieldset>
            <fieldset>
              <a href="" onClick={() => goToRegister()}>Registrarse</a>
            </fieldset>
            <button type="submit">Ingresar</button>
          </form>
      </article>
    </main>
  )
}

export default LoginPage;
