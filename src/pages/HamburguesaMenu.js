import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navlinks from "../components/Navlinks";
import Login from "../components/Login";
import Registro1 from "../components/Registro1";
import Registro2 from "../components/Registro2"
import Olvidado from "../components/Olvidado"

function HamburguesaMenu() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modalAbierto, setModalAbierto] = useState("");

  const abrirLogin = () => {
    setMenuAbierto(false);
    setModalAbierto("login");
  };

  const abrirRegistro = () => {
    setModalAbierto("registro");
  };

  const abrirRegistro2 = () => {
    setModalAbierto("registro2");
  };

  const abrirOlvidado = () => {
    setModalAbierto("olvidado");
  };

  const cerrarModal = () => {
    setModalAbierto("");
  };

  return (
    <>
      <header className="header falso">
        <Link className="Logo" to="/" onClick={() => setMenuAbierto(false)}>
          <p>Somnia</p>
        </Link>

        <Navlinks.B abrirLogin={abrirLogin} />

        <button
          className="abrir-menu"
          onClick={() => setMenuAbierto(true)}
        >
          <i className="bi bi-list"></i>
        </button>

        <nav className={menuAbierto ? "navbar visible" : "navbar"}>
          <button
            className="cerrar-menu"
            onClick={() => setMenuAbierto(false)}
          >
            <i className="bi bi-x"></i>
          </button>

          <Navlinks.A
            cerrarMenu={() => setMenuAbierto(false)}
            abrirLogin={abrirLogin}
          />
        </nav>
      </header>

      {modalAbierto === "login" && (
        <Login
          cerrarLogin={cerrarModal}
          abrirRegistro={abrirRegistro}
          abrirOlvidado={abrirOlvidado}
        />
      )}

      {modalAbierto === "registro" && (
        <Registro1
          cerrarRegistro={cerrarModal}
          abrirLogin={abrirLogin}
          abrirRegistro2={abrirRegistro2}
        />
      )}

      {modalAbierto === "registro2" && (
        <Registro2
          cerrarRegistro={cerrarModal}
          abrirLogin={abrirLogin}
        />
      )}

      {modalAbierto === "olvidado" && (
        <Olvidado
          cerrarRegistro={cerrarModal}
          abrirLogin={abrirLogin}
          abrirRegistro={abrirRegistro}
        />
      )}

      <Outlet />
    </>
  );
}

export default HamburguesaMenu;