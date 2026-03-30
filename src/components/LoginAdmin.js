import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin({ cerrarModal, abrirLogin, abrirOlvidado}) {

  const [correo, setCorreo] = useState("");
  const [contrasena, setPassword] = useState("");
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const validar = () => {
    let nuevosErrores = {};

    if (!correo.trim()) {
      nuevosErrores.correo = "No puede quedar en blanco";
    }

    if (!contrasena.trim()) {
      nuevosErrores.password = "No puede quedar en blanco";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;

    
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Enviar datos al backend");
      /*Al momento de iniciar sesion, se cierra la ventana emergente y nos vamos a la pagina del Panel */
      cerrarModal();
      navigate("/panel");

    }
    
  };
  


  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-cerrar" onClick={cerrarModal}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo">Inicio de sesión Administrador</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          
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

        
          <input
            type="password"
            className={`login-input ${errores.password ? "input-error" : ""}`}
            placeholder="Contraseña"
            value={contrasena}
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
          <button type="button" className="login-link" onClick={abrirLogin}>
            Jugador
          </button>

          <button type="button" className="login-link" onClick={abrirOlvidado}>
            Olvidé mi contraseña
          </button>
        </div>
                

      </div>
    </div>
  );
}

export default LoginAdmin;