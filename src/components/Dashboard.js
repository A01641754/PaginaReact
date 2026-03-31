import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      

      <section className="dashboard-page page-con-header">

        <div className="dashboard-header">

          <h1 className="dashboard-titulo">
            Panel de estadísticas
          </h1>
          
          <button
            type="button"
            className="login-boton boton-gris"
            onClick={() => navigate("/panel")}
          >
            Regresar
          </button>


        </div>

      </section>
    </>
  );
}

export default Dashboard;