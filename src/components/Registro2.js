import { useState } from "react";

function Registro2({ cerrarRegistro, abrirLogin }) {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    esUsuarioNide: false,
    actividadNide: "",
    colonia: "",
    contacto: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const nuevoValor = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nuevoValor,
    }));

    setErrores((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "esUsuarioNide" && !checked) {
      setFormData((prev) => ({
        ...prev,
        actividadNide: "",
      }));

      setErrores((prev) => ({
        ...prev,
        actividadNide: "",
      }));
    }
  };

  const validar = () => {
    let nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!formData.fechaNacimiento) {
      nuevosErrores.fechaNacimiento = "La fecha de nacimiento es obligatoria";
    }

    if (formData.esUsuarioNide && !formData.actividadNide.trim()) {
      nuevosErrores.actividadNide = "Debes escribir tu actividad dentro de NIDE";
    }

    if (!formData.colonia.trim()) {
      nuevosErrores.colonia = "La colonia es obligatoria";
    }

    if (!formData.contacto.trim()) {
      nuevosErrores.contacto = "El contacto es obligatorio";
    } else if (!/^\d{10}$/.test(formData.contacto)) {
      nuevosErrores.contacto = "El contacto debe tener exactamente 10 dígitos";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Datos completos del registro:", formData);
      cerrarRegistro();
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-cerrar" onClick={cerrarRegistro}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo">Completa tu registro</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            className={`login-input ${errores.nombre ? "input-error" : ""}`}
            placeholder="Introducir nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p className="login-error">{errores.nombre}</p>}

          <input
            type="date"
            name="fechaNacimiento"
            className={`login-input ${errores.fechaNacimiento ? "input-error" : ""}`}
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
          {errores.fechaNacimiento && (
            <p className="login-error">{errores.fechaNacimiento}</p>
          )}

          <label className="registro-switch-container">
            <span className="registro-switch-texto">Eres usuario de NIDE</span>

            <input
              type="checkbox"
              name="esUsuarioNide"
              checked={formData.esUsuarioNide}
              onChange={handleChange}
              className="registro-switch-input"
            />

            <span className="registro-switch-slider"></span>
          </label>

          {formData.esUsuarioNide && (
            <>
              <input
                type="text"
                name="actividadNide"
                className={`login-input ${errores.actividadNide ? "input-error" : ""}`}
                placeholder="Qué actividad realizas dentro de NIDE"
                value={formData.actividadNide}
                onChange={handleChange}
              />
              {errores.actividadNide && (
                <p className="login-error">{errores.actividadNide}</p>
              )}
            </>
          )}

          <input
            type="text"
            name="colonia"
            className={`login-input ${errores.colonia ? "input-error" : ""}`}
            placeholder="Colonia"
            value={formData.colonia}
            onChange={handleChange}
          />
          {errores.colonia && <p className="login-error">{errores.colonia}</p>}

          <input
            type="tel"
            name="contacto"
            className={`login-input ${errores.contacto ? "input-error" : ""}`}
            placeholder="Contacto"
            value={formData.contacto}
            onChange={handleChange}
            inputMode="numeric"
            maxLength={10}
          />
          {errores.contacto && <p className="login-error">{errores.contacto}</p>}

          <button type="submit" className="login-boton">
            Finalizar
          </button>
        </form>

        <div className="login-links">
          <button type="button" className="login-link" onClick={abrirLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro2;