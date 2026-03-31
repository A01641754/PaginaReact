import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EliminarUsuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Eduardo",
      correo: "lalo@gmail.com",
      rol: "Profesor",
      nide: "Si",
      seleccionado: false,
    },
    {
      id: 2,
      nombre: "Adrik",
      correo: "hawk@gmail.com",
      rol: "Estudiante",
      nide: "Si",
      seleccionado: false,
    },
  ]);

  const toggleUsuario = (id) => {
    setUsuarios((prev) =>
      prev.map((usuario) =>
        usuario.id === id
          ? { ...usuario, seleccionado: !usuario.seleccionado }
          : usuario
      )
    );
  };

  const eliminarSeleccionados = () => {
    const haySeleccionados = usuarios.some((usuario) => usuario.seleccionado);

    if (!haySeleccionados) {
      alert("Selecciona al menos un usuario para eliminar");
      return;
    }

    const confirmacion = window.confirm(
      "¿Seguro que deseas eliminar los usuarios seleccionados?"
    );

    if (!confirmacion) return;

    setUsuarios((prev) => prev.filter((usuario) => !usuario.seleccionado));
    alert("Usuarios eliminados con éxito");
  };

  return (
      
      <section className="panel-admin-page page-con-header">
        <div className="panel-admin-container eliminar-container">
          <h1 className="eliminar-titulo">Eliminar Registros de Usuarios</h1>

          <div className="eliminar-acciones">
            <button
              type="button"
              className="login-boton boton-gris"
              onClick={() => navigate("/panel")}
            >
              Regresar
            </button>

            <button
              type="button"
              className="login-boton boton-eliminar"
              onClick={eliminarSeleccionados}
            >
              Eliminar
            </button>

          </div>

          <div className="tabla-usuarios">
            <div className="tabla-header">
              <label className="fila-usuario">
                <input type="checkbox" disabled />
                <span>Nombre&nbsp; - &nbsp;Correo&nbsp; - &nbsp;Rol&nbsp; - &nbsp;NIDE</span>
              </label>
            </div>

            <div className="tabla-body">
              {usuarios.length === 0 ? (
                <p className="sin-usuarios">No hay usuarios registrados</p>
              ) : (
                usuarios.map((usuario) => (
                  <label key={usuario.id} className="fila-usuario">
                    <input
                      type="checkbox"
                      checked={usuario.seleccionado}
                      onChange={() => toggleUsuario(usuario.id)}
                    />
                    <span>
                      {usuario.nombre} - {usuario.correo} - {usuario.rol} - {usuario.nide}
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
  );
}

export default EliminarUsuarios;