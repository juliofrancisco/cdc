// controllers/usuarioadminController.js
const connection = require('../config/db');

// Insertar usuario admin
const insertUsuarioAdmin = (usuario, callback) => {
  const sql = `INSERT INTO usuarioadmin (USUARIO, PASSWORD, EMAIL, NOMBRE) VALUES (?, ?, ?, ?)`;
  connection.query(sql, [usuario.USUARIO, usuario.PASSWORD, usuario.EMAIL, usuario.NOMBRE], callback);
};

// Actualizar usuario admin
const updateUsuarioAdmin = (id, usuario, callback) => {
  const sql = `UPDATE usuarioadmin SET USUARIO = ?, PASSWORD = ?, EMAIL = ?, NOMBRE = ? WHERE ID = ?`;
  connection.query(sql, [usuario.USUARIO, usuario.PASSWORD, usuario.EMAIL, usuario.NOMBRE, id], callback);
};

// Eliminar usuario admin
const deleteUsuarioAdmin = (id, callback) => {
  const sql = `DELETE FROM usuarioadmin WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertUsuarioAdmin, updateUsuarioAdmin, deleteUsuarioAdmin };
