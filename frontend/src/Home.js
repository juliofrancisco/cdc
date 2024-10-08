// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página Inicial</h1>
      <p>Esta es la página de inicio. Puedes ir a la sección de noticias desde aquí.</p>
      <Link to="/noticias">Ir a Noticias</Link>
    </div>
  );
};

export default Home;
