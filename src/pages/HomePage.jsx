import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const HomePage = () => {
  return (
    <section lassName="container-fluid">
      <article>
        <Breadcrumb />
        <h1>Bienvenido a la Biblioteca de Contenidos</h1>
        <p>Explora, crea y comparte contenido multimedia con otros usuarios.</p>
      </article>
    </section>
  )
}

export default HomePage;
