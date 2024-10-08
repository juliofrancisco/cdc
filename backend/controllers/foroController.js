// controllers/foroController.js
const connection = require('../config/db');

// Insertar mensaje de foro
const insertForo = (foro, callback) => {
  const sql = `INSERT INTO foro (IDPADRE, TITULO, CUERPO, IDUSUARIO, FECHAMENSAJE, BORRADO) 
               VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [foro.IDPADRE, foro.TITULO, foro.CUERPO, foro.IDUSUARIO, foro.FECHAMENSAJE, foro.BORRADO], callback);
};

// Actualizar mensaje de foro
const updateForo = (id, foro, callback) => {
  const sql = `UPDATE foro SET IDPADRE = ?, TITULO = ?, CUERPO = ?, IDUSUARIO = ?, FECHAMENSAJE = ?, BORRADO = ? WHERE ID = ?`;
  connection.query(sql, [foro.IDPADRE, foro.TITULO, foro.CUERPO, foro.IDUSUARIO, foro.FECHAMENSAJE, foro.BORRADO, id], callback);
};

// Eliminar mensaje de foro
const deleteForo = (id, callback) => {
  const sql = `DELETE FROM foro WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertForo, updateForo, deleteForo };
