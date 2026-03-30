import { useState } from "react";

function RegistroAdmin2({ cerrarModal, }) {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    actividadNide: "",
    colonia: "",
    contacto: "",
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

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!formData.fechaNacimiento) {
      nuevosErrores.fechaNacimiento = "La fecha de nacimiento es obligatoria";
    }

    if (!formData.actividadNide.trim()) {
      nuevosErrores.actividadNide = "La actividad dentro de NIDE es obligatoria";
    }

    if (!formData.colonia.trim()) {
      nuevosErrores.colonia = "La colonia es obligatoria";
    }

    if (!formData.contacto.trim()) {
      nuevosErrores.contacto = "El contacto es obligatorio";
    } else if (!/^\d{10}$/.test(formData.contacto)) {
      nuevosErrores.contacto = "El número debe tener exactamente 10 dígitos";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Datos de RegistroAdmin2 válidos:", formData);
      alert("Cuenta de administrador creada con éxito");
      cerrarModal();
    }
  };




  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="login-cerrar" onClick={cerrarModal}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="login-titulo">Completa el registro de administrador</h2>

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

          <input
            type="text"
            name="actividadNide"
            className={`login-input ${errores.actividadNide ? "input-error" : ""}`}
            placeholder="Que actividad realizas dentro de NIDE"
            value={formData.actividadNide}
            onChange={handleChange}
          />
          {errores.actividadNide && (
            <p className="login-error">{errores.actividadNide}</p>
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
            placeholder="Numero celular"
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

    
      </div>
    </div>
  );
}

export default RegistroAdmin2;