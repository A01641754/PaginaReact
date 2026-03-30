import { useState } from "react";

function Login({ cerrarLogin, abrirRegistro, abrirOlvidado}) {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState({});

  const validar = () => {
    let nuevosErrores = {};

    if (!correo) {
      nuevosErrores.correo = "No puede quedar en blanco";
    }

    if (!password) {
      nuevosErrores.password = "No puede quedar en blanco";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Enviar datos al backend");
    }
  };


  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-cerrar" onClick={cerrarLogin}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo">Inicio de sesión</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* INPUT CORREO */}
          <input
            type="text"
            className={`login-input ${errores.correo ? "input-error" : ""}`}
            placeholder="Usuario / Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          {errores.correo && (
            <p className="login-error">{errores.correo}</p>
          )}

          {/* INPUT PASSWORD */}
          <input
            type="password"
            className={`login-input ${errores.password ? "input-error" : ""}`}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errores.password && (
            <p className="login-error">{errores.password}</p>
          )}

          <button type="submit" className="login-boton">
            Iniciar sesión
          </button>
        </form>

        <div className="login-links">
          <button type="button" className="login-link" onClick={abrirRegistro}>
            Registrarse
          </button>

          <button type="button" className="login-link" onClick={abrirOlvidado}>
            Olvidé mi contraseña
          </button>
        </div>
                
            <div className = "login-linksolito">
                <button type="button" className="login-link"> 
                    Admin
                </button>
            </div>

      </div>
    </div>
  );
}

export default Login;