import React from "react";
import { Link } from "react-router-dom";

function Tarjetas({ tipo, abrirLogin }) {

  const configuraciones = {
    1: {
      titulo: "Ir a Somnia",
      imagenB: "/imagenes/inicio.jpg",
      imagenH: "/imagenes/Protav2.png",
    },
    2: {
      titulo: "Descubre más de Somnia",
      imagenB: "/imagenes/descubre.jpg",
      imagenH: "/imagenes/Zuri.png",
      link: "/historia"
    },
    3: {
      titulo: "Islas",
      imagenB: "/imagenes/islas.png",
      imagenH: "/imagenes/Lynett.png",
      link: "/islas"
    },
    4: {
      titulo: "Personajes",
      imagenB: "/imagenes/personajes.png",
      imagenH: "/imagenes/Circe.png",
      link: "/personajes"
    },
    5: {
      titulo: "Creadores",
      imagenB: "/imagenes/creadores.png",
      imagenH: "/imagenes/Barbatos.png",
      link: "/creadores"
    }
  };

  let config;

  if (configuraciones[tipo]) {
    config = configuraciones[tipo];
  } else {
    config = configuraciones[1];
  }

 //Este es para que la tarjeta Ir a somnia mande a llamar a login
  if (tipo === 1) {
    return (
      <div className="tarjeta" onClick={abrirLogin}>
        <div
          className="tarjetaBase"
          style={{ backgroundImage: `url(${config.imagenB})` }}
        ></div>

        <div
          className="tarjetaHover"
          style={{ backgroundImage: `url(${config.imagenH})` }}
        ></div>

        <div className="tarjetaEfectos"></div>

        <div className="textoTJ">
          <h2>{config.titulo}</h2>
        </div>
      </div>
    );
  }

  
  return (
    <Link to={config.link} className="tarjeta">
      <div
        className="tarjetaBase"
        style={{ backgroundImage: `url(${config.imagenB})` }}
      ></div>

      <div
        className="tarjetaHover"
        style={{ backgroundImage: `url(${config.imagenH})` }}
      ></div>

      <div className="tarjetaEfectos"></div>

      <div className="textoTJ">
        <h2>{config.titulo}</h2>
      </div>
    </Link>
  );
}

export default Tarjetas;