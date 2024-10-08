// controllers/opcionesencuestaController.js
const connection = require('../config/db');

// Insertar opción de encuesta
const insertOpcionEncuesta = (opcion, callback) => {
  const sql = `INSERT INTO opcionesencuesta (IDENCUESTA, OPCION, VOTOS) VALUES (?, ?, ?)`;
  connection.query(sql, [opcion.IDENCUESTA, opcion.OPCION, opcion.VOTOS], callback);
};

// Actualizar opción de encuesta
const updateOpcionEncuesta = (id, opcion, callback) => {
  const sql = `UPDATE opcionesencuesta SET IDENCUESTA = ?, OPCION = ?, VOTOS = ? WHERE ID = ?`;
  connection.query(sql, [opcion.IDENCUESTA, opcion.OPCION, opcion.VOTOS, id], callback);
};

// Eliminar opción de encuesta
const deleteOpcionEncuesta = (id, callback) => {
  const sql = `DELETE FROM opcionesencuesta WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertOpcionEncuesta, updateOpcionEncuesta, deleteOpcionEncuesta };
