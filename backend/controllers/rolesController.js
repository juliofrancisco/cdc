// controllers/rolesController.js
const connection = require('../config/db');

// Insertar rol
const insertRol = (rol, callback) => {
  const sql = `INSERT INTO roles (DESCRIPCION) VALUES (?)`;
  connection.query(sql, [rol.DESCRIPCION], callback);
};

// Actualizar rol
const updateRol = (id, rol, callback) => {
  const sql = `UPDATE roles SET DESCRIPCION = ? WHERE ID = ?`;
  connection.query(sql, [rol.DESCRIPCION, id], callback);
};

// Eliminar rol
const deleteRol = (id, callback) => {
  const sql = `DELETE FROM roles WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertRol, updateRol, deleteRol };
