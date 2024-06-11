import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li><strong>Acme Corp</strong></li>
      </ul>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
        <li><Link to="/content-library">Biblioteca</Link></li>
        <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
