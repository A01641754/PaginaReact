function Olvidado({ cerrarModal, abrirRegistro, abrirLogin, abrirReestablecerC }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    abrirReestablecerC();
  };

  return (
    <div className="login-overlay">
      <div className="login-modal olvide-modal">
        <button className="login-cerrar" onClick={cerrarModal}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo olvide-titulo">Restablecer contraseña</h2>

        <p className="olvide-texto">
          Si deseas reestablecer tu contraseña ingrese su email o username
          abajo, se le enviara un código para poder reestablecerla
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="usuario"
            className="login-input"
            placeholder="Ingresar email o username"
            required
          />

          <div className="login-links olvide-links">
            <button
              type="button"
              className="login-link"
              onClick={abrirRegistro}
            >
              Registrarse
            </button>

            <button
              type="button"
              className="login-link"
              onClick={abrirLogin}
            >
              Log in
            </button>
          </div>

          <button type="submit" className="login-boton olvide-boton">
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
}

export default Olvidado;