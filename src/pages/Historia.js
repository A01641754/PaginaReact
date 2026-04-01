import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Historia() {
  const { abrirLogin } = useOutletContext();

  
  const imagenes1 = ["", "/historia2.jpg", "/historia3.jpg"];
  const imagenes2 = ["/imagenes/colores.png", "/imagenes/Personaje2.png", "/imagenes/Personaje1.png", "/imagenes/Personaje3.png"];
  const imagenes3 = ["/modos1.jpg", "/modos2.jpg", "/modos3.jpg"];

  // ESTADOS
  const [i1, setI1] = useState(0);
  const [i2, setI2] = useState(0);
  const [i3, setI3] = useState(0);

  // EFECTOS (uno por carrusel)
  useEffect(() => {
    const t = setInterval(() => {
      setI1((prev) => (prev + 1) % imagenes1.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setI2((prev) => (prev + 1) % imagenes2.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setI3((prev) => (prev + 1) % imagenes3.length);
    }, 4400);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="page-con-header somnia-inicio">

      {/* 🔹 SECCIÓN 1 */}
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
            <div className="somnia-marco-imagen">
              <div className="somnia-carrusel">
                {imagenes1.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`somnia-carrusel-imagen ${index === i1 ? "activa" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECCIÓN 2 */}
      <section className="somnia-seccion somnia-fondo-personaje">
        <div className="somnia-contenedor">
          <div className="somnia-columna-imagen">
            <div className="somnia-marco-imagen">
              <div className="somnia-carrusel">
                {imagenes2.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`somnia-carrusel-imagen ${index === i2 ? "activa" : ""}`}
                  />
                ))}
              </div>
            </div>
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

      {/* 🔹 SECCIÓN 3 */}
      <section className="somnia-seccion somnia-fondo-modos">
        <div className="somnia-contenedor">
          <div className="somnia-columna-texto">
            <h2 className="somnia-titulo">VARIOS MODOS DE JUEGO</h2>
            <p className="somnia-texto">
              Somnia cuenta con dos mecánicas principales...
            </p>
          </div>

          <div className="somnia-columna-imagen">
            <div className="somnia-marco-imagen">
              <div className="somnia-carrusel">
                {imagenes3.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className={`somnia-carrusel-imagen ${index === i3 ? "activa" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
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