// controllers/fotografiasController.js
const connection = require('../config/db');

// Insertar fotografía
const insertFotografia = (fotografia, callback) => {
  const sql = `INSERT INTO fotografias (NOMBRE, URL, CODTIPO, THUMBNAIL, IDGALERIA) 
               VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [fotografia.NOMBRE, fotografia.URL, fotografia.CODTIPO, fotografia.THUMBNAIL, fotografia.IDGALERIA], callback);
};

// Actualizar fotografía
const updateFotografia = (id, fotografia, callback) => {
  const sql = `UPDATE fotografias SET NOMBRE = ?, URL = ?, CODTIPO = ?, THUMBNAIL = ?, IDGALERIA = ? WHERE ID = ?`;
  connection.query(sql, [fotografia.NOMBRE, fotografia.URL, fotografia.CODTIPO, fotografia.THUMBNAIL, fotografia.IDGALERIA, id], callback);
};

// Eliminar fotografía
const deleteFotografia = (id, callback) => {
  const sql = `DELETE FROM fotografias WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertFotografia, updateFotografia, deleteFotografia };
