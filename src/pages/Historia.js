function Historia() {
  return (
    <>
    <header className = "header falso1"></header>
      <main className="contenedor-principal">
        <section className="fila-alterna">
          <div className="bloque-texto">
            <h1 className="titulo-destacado">BIENVENIDOS A<br />SOMNIA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
              rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna
              non est bibendum non venenatis nisl tempor.
            </p>
          </div>

          <div className="bloque-visual">
            <div className="placeholder-carrusel">
              <p>Imágenes del videojuego, van a estar en cambio</p>
            </div>
          </div>
        </section>

        <section className="fila-alterna reversa">
          <div className="bloque-visual">
            <div className="placeholder-carrusel">
              <p>Imagen del UI de personalización del personaje</p>
            </div>
          </div>

          <div className="bloque-texto">
            <h2 className="titulo-destacado">PERSONALIZA<br />TU PERSONAJE</h2>
            <p>
              Curabitur vulputate, ligula lacinia scelerisque tempor, elit lectus elementum
              nunc, nec condimentum sem tellus ac quam. Quisque pretium sagittis ex, ac tempor
              ipsum facilisis eget. Fusce dignissim sit amet turpis non pellentesque. Nulla
              facilisi. Proin id viverra magna.
            </p>
          </div>
        </section>

        <section className="fila-alterna">
          <div className="bloque-texto">
            <h2 className="titulo-destacado">VARIOS MODOS<br />DE JUEGO</h2>
            <p>
              Aenean faucibus euismod lorem, id iaculis tellus pellentesque in. Suspendisse
              pulvinar, ex efficitur commodo consequat, odio lectus tristique arcu, ac
              ullamcorper nisi lorem at metus. Sed at risus a urna lacinia iaculis in rutrum
              erat. Praesent vitae sodales mauris, in accumsan mi.
            </p>
          </div>

          <div className="bloque-visual">
            <div className="placeholder-carrusel">
              <p>
                Imágenes del nivel de matemáticas, razonamiento matemático, plataformas y
                diálogo, van a estar cambiando entre ellas
              </p>
            </div>
          </div>
        </section>

        <section className="seccion-trailer">
          <div className="placeholder-video">
            <p>Trailer del videojuego</p>
          </div>
        </section>

        <section className="seccion-cta">
          <button className="btn-jugar">Jugar gratis</button>
        </section>
      </main>

      <footer className="footer-alianza">
        <p>NIDE &nbsp;&nbsp;&nbsp; Y &nbsp;&nbsp;&nbsp; Tecnológico de Monterrey</p>
      </footer>
    </>
  );
}

export default Historia;