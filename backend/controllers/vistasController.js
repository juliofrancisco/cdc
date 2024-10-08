// controllers/visitasController.js
const connection = require('../config/db');

// Insertar visita
const insertVisita = (visita, callback) => {
  const sql = `INSERT INTO visitas (DIA, NUMEROVISITAS) VALUES (?, ?)`;
  connection.query(sql, [visita.DIA, visita.NUMEROVISITAS], callback);
};

// Actualizar visita
const updateVisita = (dia, visita, callback) => {
  const sql = `UPDATE visitas SET NUMEROVISITAS = ? WHERE DIA = ?`;
  connection.query(sql, [visita.NUMEROVISITAS, dia], callback);
};

// Eliminar visita
const deleteVisita = (dia, callback) => {
  const sql = `DELETE FROM visitas WHERE DIA = ?`;
  connection.query(sql, [dia], callback);
};

module.exports = { insertVisita, updateVisita, deleteVisita };
