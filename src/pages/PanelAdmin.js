
import { useOutletContext } from "react-router-dom";

function PanelAdmin() {
    const { abrirRegistroA1 } = useOutletContext();

  return (
    
    <section className="panel-admin-page">
      <div className="panel-admin-container">

        <h2 className="login-titulo">Panel Administrativo</h2>

        
        <div className="login-form">
          <button className="login-boton">Dashboards</button>

          <button className="login-boton">
            Eliminar usuarios
          </button>

          <button 
          
          className="login-boton"
          onClick={abrirRegistroA1}
          >
            Crear cuenta de administrador
          </button>
        </div>

        
        <div className="login-links" >
          <button className="login-link" >
            Log in
          </button>
        </div>

      </div>
    </section>
  );
}

export default PanelAdmin;