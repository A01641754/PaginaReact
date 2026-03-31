import { useState } from "react";

function RestablecerC({ cerrarModal, abrirLogin }) {
  const [formData, setFormData] = useState({
    codigo: "",
    nuevaPassword: "",
    confirmarPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { codigo, nuevaPassword, confirmarPassword } = formData;

    if (!codigo || !nuevaPassword || !confirmarPassword) {
      setError("Completa todos los espacios");
      return;
    }

    if (nuevaPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (nuevaPassword !== confirmarPassword) {
      setError("Las contraseñas no son iguales");
      return;
    }

    // Backend
    // Aquí despues van a validar el codigo con la base de datos
    // y guardar la nueva contraseña del chamaco

    setError("");
    alert("La contraseña se ha restablecido correctamente");

    cerrarModal();
  };

  return (
    <div className="login-overlay">
      <div className="login-modal olvide-modal">
        <button className="login-cerrar" onClick={cerrarModal}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo olvide-titulo">Restablecer contraseña</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="codigo"
            className="login-input"
            placeholder="Ingresar código"
            value={formData.codigo}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="nuevaPassword"
            className="login-input"
            placeholder="Nueva contraseña"
            value={formData.nuevaPassword}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmarPassword"
            className="login-input"
            placeholder="Confirmar contraseña"
            value={formData.confirmarPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-boton olvide-boton">
            Restablecer contraseña
          </button>

          <div className="login-links olvide-links-centro">
            <button
              type="button"
              className="login-link"
              onClick={abrirLogin}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RestablecerC;