// controllers/comentariosnoticiaController.js
const connection = require('../config/db');

// Insertar comentario
const insertComentario = (comentario, callback) => {
  const sql = `INSERT INTO comentariosnoticia (IDNOTICIA, CUERPO, IDUSUARIO, FECHACOMENTARIO, VALIDADO, SEMILLA) 
               VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [comentario.IDNOTICIA, comentario.CUERPO, comentario.IDUSUARIO, comentario.FECHACOMENTARIO, comentario.VALIDADO, comentario.SEMILLA], callback);
};

// Actualizar comentario
const updateComentario = (id, comentario, callback) => {
  const sql = `UPDATE comentariosnoticia SET IDNOTICIA = ?, CUERPO = ?, IDUSUARIO = ?, FECHACOMENTARIO = ?, VALIDADO = ?, SEMILLA = ? WHERE ID = ?`;
  connection.query(sql, [comentario.IDNOTICIA, comentario.CUERPO, comentario.IDUSUARIO, comentario.FECHACOMENTARIO, comentario.VALIDADO, comentario.SEMILLA, id], callback);
};

// Eliminar comentario
const deleteComentario = (id, callback) => {
  const sql = `DELETE FROM comentariosnoticia WHERE ID = ?`;
  connection.query(sql, [id], callback);
};

module.exports = { insertComentario, updateComentario, deleteComentario };
