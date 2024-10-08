// backend/server.js
const express = require('express');
const cors = require('cors'); // Si usas CORS
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Para parsear JSON en requests

// API simple
app.get('/api/noticias', (req, res) => {
  const noticias = [
    { id: 1, titular: 'Noticia 1', resumen: 'Resumen 1' },
    { id: 2, titular: 'Noticia 2', resumen: 'Resumen 2' },
  ];
  res.json(noticias);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
