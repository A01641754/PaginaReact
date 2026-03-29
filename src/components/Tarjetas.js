import React from "react";
import { Link } from "react-router-dom";

function Tarjetas({ tipo }) {

  const configuraciones = {
    1: {
      titulo: "Ir a Somnia",
      imagenB: "/imagenes/inicio.jpg",
      imagenH: "/imagenes/bolillo.png",
      link: "/login"
    },
    2: {
      titulo: "Descubre más de Somnia",
      imagenB: "/imagenes/descubre.jpg",
      imagenH: "/imagenes/bolillo.png",
      link: "/historia"
    },
    3: {
      titulo: "Islas",
      imagenB: "/imagenes/islas.png",
      imagenH: "/imagenes/bolillo.png",
      link: "/islas"
    },
    4: {
      titulo: "Personajes",
      imagenB: "/imagenes/personajes.png",
      imagenH: "/imagenes/bolillo.png",
      link: "/personajes"
    },
    5: {
      titulo: "Creadores",
      imagenB: "/imagenes/creadores.png",
      imagenH: "/imagenes/bolillo.png",
      link: "/creadores"
    }
  };

  let config;

  if (configuraciones[tipo]) {
    config = configuraciones[tipo];
  } else {
    config = configuraciones[1];
  }

  return (
    <Link to = {config.link} className="tarjeta">
    
      <div className = "tarjetaBase"
      style={{ backgroundImage: `url(${config.imagenB})`}}>
        
      </div>

      <div className = "tarjetaHover"
      style={{ backgroundImage: `url(${config.imagenH})`}}> </div>

      <div className = "tarjetaEfectos"> </div>

      <div className="textoTJ">
        <h2>{config.titulo}</h2>
      </div>
    </Link>
  );
}

export default Tarjetas;