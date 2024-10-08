// controllers/noticiasController.js
const connection = require('../config/db');

// Insertar una noticia
const insertNoticia = (noticia, callback) => {
  const sql = `INSERT INTO noticias (TITULAR, CUERPO, FOTO, FECHAPUBLICACION, USUARIOPUBLICACION, USUARIOMODIFICACION, FECHAMODIFICACION, CATEGORIA, BORRADO)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    noticia.TITULAR,
    noticia.CUERPO,
    noticia.FOTO || null,
    noticia.FECHAPUBLICACION,
    noticia.USUARIOPUBLICACION,
    noticia.USUARIOMODIFICACION,
    noticia.FECHAMODIFICACION,
    noticia.CATEGORIA,
    noticia.BORRADO
  ];

  connection.query(sql, values, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// Actualizar una noticia
const updateNoticia = (id, noticia, callback) => {
  const sql = `UPDATE noticias SET TITULAR = ?, CUERPO = ?, FOTO = ?, FECHAPUBLICACION = ?, USUARIOPUBLICACION = ?, USUARIOMODIFICACION = ?, FECHAMODIFICACION = ?, CATEGORIA = ?, BORRADO = ?
               WHERE ID = ?`;
  const values = [
    noticia.TITULAR,
    noticia.CUERPO,
    noticia.FOTO || null,
    noticia.FECHAPUBLICACION,
    noticia.USUARIOPUBLICACION,
    noticia.USUARIOMODIFICACION,
    noticia.FECHAMODIFICACION,
    noticia.CATEGORIA,
    noticia.BORRADO,
    id
  ];

  connection.query(sql, values, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// Eliminar una noticia
const deleteNoticia = (id, callback) => {
  const sql = `DELETE FROM noticias WHERE ID = ?`;

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  insertNoticia,
  updateNoticia,
  deleteNoticia
};
