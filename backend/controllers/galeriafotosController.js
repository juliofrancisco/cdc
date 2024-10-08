// controllers/galeriafotosController.js
const connection = require('../config/db');

// Insertar galería de fotos
const insertGaleria = (galeria, callback) => {
  const sql = `INSERT INTO galeriafotos (ANYO, TITULO, TIPOGALERIA, BORRADO) 
               VALUES (?, ?, ?, ?)`;
  connection.query(sql, [galeria.ANYO, galeria.TITULO, galeria.TIPOGALERIA, galeria.BORRADO], callback);
};

// Actualizar galería de fotos
const updateGaleria = (id, galeria, callback) => {
  const sql = `UPDATE galeriafotos SET ANYO = ?, TITULO = ?, TIPOGALERIA = ?, BORRADO = ? WHERE ID = ?`;
  connection.query(sql, [galeria.ANYO, galeria.TITULO, galeria.TIPOGALERIA, galeria.BORRADO, id], callback);
};

// Eliminar galería de fotos
const deleteGaleria = (id, callback) => {
  const sql = `DELETE FROM galeriafotos WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertGaleria, updateGaleria, deleteGaleria };
