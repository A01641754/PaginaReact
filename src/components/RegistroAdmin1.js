import { useState } from "react";

function RegistroAdmin1({ cerrarModal, abrirRegistroA2 }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrores((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validar = () => {
    let nuevosErrores = {};

    if (!formData.email.trim()) {
      nuevosErrores.email = "El correo es obligatorio";
    }

    if (!formData.username.trim()) {
      nuevosErrores.username = "El username es obligatorio";
    }

    if (!formData.password.trim()) {
      nuevosErrores.password = "La contraseña es obligatoria";
    } 
    else if (formData.password.length < 8) {
      nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    }

    if (!formData.confirmPassword.trim()) {
      nuevosErrores.confirmPassword = "Debes confirmar la contraseña";
    } 
    else if (formData.confirmPassword !== formData.password) {
      nuevosErrores.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };



  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Datos de administrador válidos:", formData);
      abrirRegistroA2();
    }
  };




  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-cerrar" onClick={cerrarModal}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo">Registro de administrador</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className={`login-input ${errores.email ? "input-error" : ""}`}
            placeholder="Introducir correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          {errores.email && <p className="login-error">{errores.email}</p>}

          <input
            type="text"
            name="username"
            className={`login-input ${errores.username ? "input-error" : ""}`}
            placeholder="Introducir nombre de usuario"
            value={formData.username}
            onChange={handleChange}
          />
          {errores.username && <p className="login-error">{errores.username}</p>}

          <input
            type="password"
            name="password"
            className={`login-input ${errores.password ? "input-error" : ""}`}
            placeholder="Introducir contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          {errores.password && <p className="login-error">{errores.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            className={`login-input ${errores.confirmPassword ? "input-error" : ""}`}
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errores.confirmPassword && (
            <p className="login-error">{errores.confirmPassword}</p>
          )}

          <button type="submit" className="login-boton">
            Crear cuenta de administrador
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistroAdmin1;