
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router";

function PanelAdmin() {
    const { abrirRegistroA1 } = useOutletContext();
    const navigate = useNavigate();

  return (
    
    <section className="panel-admin-page page-con-header ">
      <div className="panel-admin-container">

        <h2 className="login-titulo">Panel Administrativo</h2>

        
        <div className="login-form">
          <button className="login-boton"
          onClick={() => navigate("/dashboard")}>Dashboard</button>

          <button className="login-boton"
          onClick={() => navigate("/eliminarU")}>
            Eliminar usuarios
          </button>

          <button 
          
          className="login-boton"
          onClick={abrirRegistroA1}
          >
            Crear cuenta de administrador
          </button>
        </div>

        


      </div>
    </section>
  );
}

export default PanelAdmin;