import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navlinks from "../components/Navlinks";
import Login from "../components/Login";
import Registro1 from "../components/Registro1";
import Registro2 from "../components/Registro2"
import Olvidado from "../components/Olvidado"
import ReestablecerC from "../components/ReestablecerC"

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

  const abrirReestablecerC = () => {
    setModalAbierto("reestablecerC")
  }

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
          cerrarOlvidado={cerrarModal}
          abrirLogin={abrirLogin}
          abrirRegistro={abrirRegistro}
          abrirReestablecerC = {abrirReestablecerC}
        />
      )}

      {modalAbierto === "reestablecerC" && (
        <ReestablecerC
          cerrarModal={cerrarModal}
          abrirLogin={abrirLogin}
        />
      )}

      {/*Este outlet inicialmente era solo para mostrar las demas paginas pero ahora tamb lo use para pasar */}
      {/*el modal al Home.js para que este se lo pase a tarjetas y así poder cargar el modal con la tarjeta Ir a Somina*/}
      {/*son las 3 de la mañana, posiblemente esto no tenga tanto sentido pero es lo unico que se em ocurrio*/}

      <Outlet context={{ abrirLogin }} />
    </>
  );
}

export default HamburguesaMenu;