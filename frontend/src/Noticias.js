import React, { useState, useEffect } from 'react';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [errorBusqueda, setErrorBusqueda] = useState('');

  // Ejemplo de simulación de datos
  useEffect(() => {
    // Simula una llamada a una API para obtener noticias
    const noticiasData = [
      {
        id: 1,
        titular: 'Titular de la noticia 1',
        resumen: 'Este es el resumen de la noticia 1',
        usuario: 'Autor 1',
        fechaPublicacion: '2024-10-01',
        numeroComentarios: 5,
        thumbnail: 'img/thumbnail1.jpeg',
      },
      // Agrega más noticias aquí
    ];
    setNoticias(noticiasData);
  }, []);

  // Maneja el formulario de búsqueda
  const handleBusqueda = (e) => {
    e.preventDefault();
    if (busqueda.length < 3) {
      setErrorBusqueda('La búsqueda debe tener al menos 3 caracteres.');
    } else {
      setTerminoBusqueda(busqueda);
      setErrorBusqueda('');
    }
  };

  return (
    <div className="container-fluid">
      {/* Cabecera */}
      <header>
        <h1>Cabeza del Caballo</h1>
      </header>

      {/* Mostrar mensaje si hay un término de búsqueda */}
      {terminoBusqueda && (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="text-center alert alert-info">
              Noticias que contienen "{terminoBusqueda}"
            </p>
          </div>
        </div>
      )}

      {/* Formulario de búsqueda */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {errorBusqueda && (
            <p className="alert alert-danger text-center">{errorBusqueda}</p>
          )}
          <form
            className="form-search form-horizontal"
            onSubmit={handleBusqueda}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Búsqueda..."
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">
                  <i className="icon-search"></i> Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Listado de noticias */}
      {noticias.map((noticia) => (
        <div className="row mt-4" key={noticia.id}>
          <div className="col-md-8 offset-md-2">
            <h4>
              <strong>
                <a href={`/verNoticia/${noticia.id}`}>{noticia.titular}</a>
              </strong>
            </h4>
            <div className="row">
              <div className="col-md-2">
                <a href={`/verNoticia/${noticia.id}`} className="thumbnail">
                  <img
                    src={`/${noticia.thumbnail}`}
                    alt={noticia.titular}
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-10">
                <p>{noticia.resumen}</p>
              </div>
            </div>
            <p>
              <i className="icon-user"></i> Publicado por {noticia.usuario} |{' '}
              <i className="icon-calendar"></i> {noticia.fechaPublicacion} |{' '}
              {noticia.numeroComentarios} comentarios
            </p>
            <hr />
          </div>
        </div>
      ))}

      {/* Pie de página */}
      <footer>
        <p className="text-center">© 2024 Cabeza del Caballo</p>
      </footer>
    </div>
  );
};

export default Noticias;
