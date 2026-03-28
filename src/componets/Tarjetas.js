import React from "react";

function Tarjetas({ tipo }) {

  const configuraciones = {
    1: {
      titulo: "Ir a Somnia",
      imagenB: "imagenes/inicio.jpg",
      imagenH: "imagenes/bolillo.png"
    },
    2: {
      titulo: "Descubre más de Somnia",
      imagenB: "/imagenes/descubre.jpg",
      imagenH: "imagenes/bolillo.png"
    },
    3: {
      titulo: "Islas",
      imagenB: "/imagenes/islas.png",
      imagenH: "imagenes/bolillo.png"
    },
    4: {
      titulo: "Personajes",
      imagenB: "/imagenes/personajes.png",
      imagenH: "imagenes/bolillo.png"
    },
    5: {
      titulo: "Creadores",
      imagenB: "/imagenes/creadores.png",
      imagenH: "imagenes/bolillo.png"
    }
  };

  let config;

  if (configuraciones[tipo]) {
    config = configuraciones[tipo];
  } else {
    config = configuraciones[1];
  }

  return (
    <section
      className="tarjeta"
      
    >
      <div className = "tarjetaBase"
      style={{ backgroundImage: `url(${config.imagen})`}}>
      </div>

      <div className = "tarjetaHover"></div>
      <div> className = ""</div>

      

      <div className="textoTJ">
        <h2>{config.titulo}</h2>
      </div>
    </section>
  );
}

export default Tarjetas;