import { useOutletContext } from "react-router-dom";

function Historia() {
  const { abrirLogin } = useOutletContext();
  return (
    <main className="page-con-header somnia-inicio">
      <section className="somnia-seccion somnia-fondo-inicio">
        <div className="somnia-contenedor">
          <div className="somnia-columna-texto">
            <h1 className="somnia-titulo">BIENVENIDOS A SOMNIA</h1>
            <p className="somnia-texto">
              Somnia es un viaje interactivo por un mundo de sueños donde el jugador
              explora, aprende y descubre sus emociones mientras avanza en la historia.
            </p>
          </div>

          <div className="somnia-columna-imagen">
            <div className="somnia-marco-imagen somnia-imagen-bienvenida"></div>
          </div>
        </div>
      </section>

      <section className="somnia-seccion somnia-fondo-personaje">
        <div className="somnia-contenedor">
          <div className="somnia-columna-imagen">
            <div className="somnia-marco-imagen somnia-imagen-personaje"></div>
          </div>

          <div className="somnia-columna-texto">
            <h2 className="somnia-titulo">PERSONALIZA TU PERSONAJE</h2>
            <p className="somnia-texto">
              En la tienda a través de las monedas que vayas consiguiendo en los niveles
              vas a poder comprar diferentes colores de piel, rostros y asombrosos
              atuendos. Podrás conseguirlos todos.
            </p>
          </div>
        </div>
      </section>

      <section className="somnia-seccion somnia-fondo-modos">
        <div className="somnia-contenedor">
          <div className="somnia-columna-texto">
            <h2 className="somnia-titulo">VARIOS MODOS DE JUEGO</h2>
            <p className="somnia-texto">
              Somnia cuenta con dos mecánicas principales. Los niveles de acción rápida
              están enfocados en matemáticas y razonamiento matemático. Por otra parte,
              están los niveles de plataforma narrativa para reforzar gramática e
              identificar emociones.
            </p>
          </div>

          <div className="somnia-columna-imagen">
            <div className="somnia-marco-imagen somnia-imagen-modos"></div>
          </div>
        </div>
      </section>

      <section className="somnia-seccion somnia-fondo-trailer">
        <div className="somnia-contenedor-trailer">
          <div className="somnia-area-trailer">
            <p className="somnia-texto-trailer">Próximo trailer del videojuego</p>
          </div>
        </div>
      </section>

      <section className="somnia-game somnia-fondo-jugar">
        <div className="somnia-contenedor-jugar">
          <button className="somnia-boton-jugar">Jugar gratis</button>
        </div>
      </section>

      <footer className="somnia-footer">
        <div className="somnia-footer-contenido">
          <span className="somnia-footer-texto">NIDE</span>
          <span className="somnia-footer-separador">x</span>
          <span className="somnia-footer-texto">Tecnológico de Monterrey</span>
        </div>
      </footer>
    </main>
  );
}

export default Historia;