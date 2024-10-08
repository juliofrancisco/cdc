// controllers/usuarioforoController.js
const connection = require('../config/db');

// Insertar usuario foro
const insertUsuarioForo = (usuario, callback) => {
  const sql = `INSERT INTO usuarioforo (USUARIO, PASSWORD, EMAIL, SEMILLA, FECHAALTA) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [usuario.USUARIO, usuario.PASSWORD, usuario.EMAIL, usuario.SEMILLA, usuario.FECHAALTA], callback);
};

// Actualizar usuario foro
const updateUsuarioForo = (id, usuario, callback) => {
  const sql = `UPDATE usuarioforo SET USUARIO = ?, PASSWORD = ?, EMAIL = ?, SEMILLA = ?, FECHAALTA = ? WHERE ID = ?`;
  connection.query(sql, [usuario.USUARIO, usuario.PASSWORD, usuario.EMAIL, usuario.SEMILLA, usuario.FECHAALTA, id], callback);
};

// Eliminar usuario foro
const deleteUsuarioForo = (id, callback) => {
  const sql = `DELETE FROM usuarioforo WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertUsuarioForo, updateUsuarioForo, deleteUsuarioForo };
