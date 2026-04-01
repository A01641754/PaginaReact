import { useState } from "react";


function Personajes() {
  const personajes = [
    {
      id: 1,
      nombre: "Circe",
      emocion: "Alegría",
      descripcion:
        "Es un patito que está muy alegre y entusiasmado por el nuevo lugar al que llegó.",
      imagenPrincipal: "/imagenes/circe.png",
      imagenMiniatura: "/imagenes/circe.png",
    },
    {
      id: 2,
      nombre: "Saloth",
      emocion: "Tristeza",
      descripcion:
        "Es un koala que está muy triste por no poder estar con sus amigos ni con su familia.",
      imagenPrincipal: "/imagenes/saloth.png",
      imagenMiniatura: "/imagenes/saloth.png",
    },
    {
      id: 3,
      nombre: "Zuri",
      emocion: "Miedo",
      descripcion:
        "Es un ciervo al que le aterra mucho el lugar al que ha llegado, queriendo regresar lo antes posible.",
      imagenPrincipal: "/imagenes/zuri.png",
      imagenMiniatura: "/imagenes/zuri.png",
    },
    {
      id: 4,
      nombre: "Barbatos",
      emocion: "Enojo",
      descripcion:
        "Es un dragón que está enojado por ya no estar en su casa y quiere regresar a toda costa.",
      imagenPrincipal: "/imagenes/barbatos.png",
      imagenMiniatura: "/imagenes/barbatos.png",
    },
    {
      id: 5,
      nombre: "Lynett",
      emocion: "Envidia/Desagrado",
      descripcion:
        "Es una zorra a la que no le agrada nada la situación en la que está y le da asco descubrir nuevos lugares.",
      imagenPrincipal: "/imagenes/lynett.png",
      imagenMiniatura: "/imagenes/lynett.png",
    },
  ];

  const [personajeActivo, setPersonajeActivo] = useState(personajes[0]);

  return (
    <>
      <main className="personajes-pagina">
        <section className="personajes-seccion">
          <div className="personajes-fondo"></div>
          <div className="personajes-capa-oscura"></div>

          <div className="personajes-contenido">
            <div className="personajes-info">
              <h1 className="personajes-nombre">
                {personajeActivo.nombre}
              </h1>

              <div className="personajes-emocion-caja">
                <span className="personajes-emocion-texto">
                  {personajeActivo.emocion}
                </span>
              </div>

              <div className="personajes-descripcion-caja">
                <p className="personajes-descripcion">
                  {personajeActivo.descripcion}
                </p>
              </div>
            </div>

            <div className="personajes-imagen-contenedor">
              <img
                src={personajeActivo.imagenPrincipal}
                alt={personajeActivo.nombre}
                className="personajes-imagen-principal"
              />
            </div>
          </div>

          <div className="personajes-barra-fija">
            <div className="personajes-lista">
              {personajes.map((personaje) => (
                <button
                  key={personaje.id}
                  className={`personaje-tarjeta ${
                    personajeActivo.id === personaje.id
                      ? "personaje-tarjeta-activa"
                      : ""
                  }`}
                  onClick={() => setPersonajeActivo(personaje)}
                  type="button"
                >
                  <div className="personaje-tarjeta-imagen-contenedor">
                    <img
                      src={personaje.imagenMiniatura}
                      alt={personaje.nombre}
                      className="personaje-tarjeta-imagen"
                    />
                  </div>

                  <div className="personaje-tarjeta-nombre-fondo">
                    <span className="personaje-tarjeta-nombre">
                      {personaje.nombre}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>


    </>
  );
}

export default Personajes;