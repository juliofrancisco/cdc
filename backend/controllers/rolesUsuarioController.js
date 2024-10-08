// controllers/rolesusuarioController.js
const connection = require('../config/db');

// Insertar rol de usuario
const insertRolUsuario = (rolUsuario, callback) => {
  const sql = `INSERT INTO rolesusuario (IDUSUARIO, IDROL) VALUES (?, ?)`;
  connection.query(sql, [rolUsuario.IDUSUARIO, rolUsuario.IDROL], callback);
};

// Actualizar rol de usuario
const updateRolUsuario = (id, rolUsuario, callback) => {
  const sql = `UPDATE rolesusuario SET IDUSUARIO = ?, IDROL = ? WHERE ID = ?`;
  connection.query(sql, [rolUsuario.IDUSUARIO, rolUsuario.IDROL, id], callback);
};

// Eliminar rol de usuario
const deleteRolUsuario = (id, callback) => {
  const sql = `DELETE FROM rolesusuario WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertRolUsuario, updateRolUsuario, deleteRolUsuario };
