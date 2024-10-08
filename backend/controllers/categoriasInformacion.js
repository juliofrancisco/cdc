// controllers/categoriasinformacionController.js
const connection = require('../config/db');

// Insertar categoría de información
const insertCategoria = (categoria, callback) => {
  const sql = `INSERT INTO categoriasinformacion (DESCRIPCION) VALUES (?)`;
  connection.query(sql, [categoria.DESCRIPCION], callback);
};

// Actualizar categoría de información
const updateCategoria = (id, categoria, callback) => {
  const sql = `UPDATE categoriasinformacion SET DESCRIPCION = ? WHERE ID = ?`;
  connection.query(sql, [categoria.DESCRIPCION, id], callback);
};

// Eliminar categoría de información
const deleteCategoria = (id, callback) => {
  const sql = `DELETE FROM categoriasinformacion WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertCategoria, updateCategoria, deleteCategoria };
