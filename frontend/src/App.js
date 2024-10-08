// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../front/src/Home';
import Noticias from './Noticias';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la página inicial */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la página de noticias */}
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
