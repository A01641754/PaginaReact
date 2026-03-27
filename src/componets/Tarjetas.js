import React from "react";

function Tarjetas({ tipo }) {

  const configuraciones = {
    1: {
      titulo: "Ir a Somnia",
      imagen: "imagenes/inicio.jpg"
    },
    2: {
      titulo: "Descubre más de Somnia",
      imagen: "/imagenes/descubre.jpg"
    },
    3: {
      titulo: "Islas",
      imagen: "/imagenes/islas.png"
    },
    4: {
      titulo: "Personajes",
      imagen: "/imagenes/personajes.png"
    },
    5: {
      titulo: "Creadores",
      imagen: "/imagenes/creadores.png"
    }
  };

  let config;

  if (configuraciones[tipo]) {
    config = configuraciones[tipo];
  } else {
    config = configuraciones[1];
  }

  return (
    <div
      className="tarjeta"
      style={{ backgroundImage: `url(${config.imagen})`}}
    >
      <div className="textoTJ">
        <h2>{config.titulo}</h2>
      </div>
    </div>
  );
}

export default Tarjetas;