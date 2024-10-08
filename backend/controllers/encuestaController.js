// controllers/encuestaController.js
const connection = require('../config/db');

// Insertar encuesta
const insertEncuesta = (encuesta, callback) => {
  const sql = `INSERT INTO encuesta (DESCRIPCION, ACTIVA) VALUES (?, ?)`;
  connection.query(sql, [encuesta.DESCRIPCION, encuesta.ACTIVA], callback);
};

// Actualizar encuesta
const updateEncuesta = (id, encuesta, callback) => {
  const sql = `UPDATE encuesta SET DESCRIPCION = ?, ACTIVA = ? WHERE ID = ?`;
  connection.query(sql, [encuesta.DESCRIPCION, encuesta.ACTIVA, id], callback);
};

// Eliminar encuesta
const deleteEncuesta = (id, callback) => {
  const sql = `DELETE FROM encuesta WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertEncuesta, updateEncuesta, deleteEncuesta };
