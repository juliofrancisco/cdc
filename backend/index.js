// index.js
const noticiasController = require('./controllers/noticiasController');

// Insertar una noticia
noticiasController.insertNoticia({
  TITULAR: 'Nuevo titular',
  CUERPO: 'Contenido del cuerpo',
  FOTO: null, // O el ID de la foto
  FECHAPUBLICACION: new Date(),
  USUARIOPUBLICACION: 1,
  USUARIOMODIFICACION: 1,
  FECHAMODIFICACION: new Date(),
  CATEGORIA: 2,
  BORRADO: 0
}, (err, result) => {
  if (err) {
    console.error('Error al insertar noticia:', err);
    return;
  }
  console.log('Noticia insertada:', result);
});

// Actualizar una noticia
noticiasController.updateNoticia(1, {
  TITULAR: 'Titular actualizado',
  CUERPO: 'Contenido actualizado',
  FOTO: null,
  FECHAPUBLICACION: new Date(),
  USUARIOPUBLICACION: 1,
  USUARIOMODIFICACION: 2,
  FECHAMODIFICACION: new Date(),
  CATEGORIA: 2,
  BORRADO: 0
}, (err, result) => {
  if (err) {
    console.error('Error al actualizar noticia:', err);
    return;
  }
  console.log('Noticia actualizada:', result);
});

// Eliminar una noticia
noticiasController.deleteNoticia(1, (err, result) => {
  if (err) {
    console.error('Error al eliminar noticia:', err);
    return;
  }
  console.log('Noticia eliminada:', result);
});
