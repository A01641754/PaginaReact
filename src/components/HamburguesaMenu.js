import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import Login from "./Login";
import Registro1 from "./Registro1";
import Registro2 from "./Registro2"
import Olvidado from "./Olvidado"
import ReestablecerC from "./ReestablecerC"
import LoginAdmin from "./LoginAdmin"
import RegistroAdmin1 from "./RegistroAdmin1"
import RegistroAdmin2 from "./RegistroAdmin2"

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

  const abrirAdmin = () => {
    setModalAbierto("loginAdmin");
  };

  const abrirRegistroA1 = () => {
    setModalAbierto("registroA1")
  }

  const abrirRegistroA2 = () => {
    setModalAbierto("registroA2")
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
          cerrarModal={cerrarModal}
          abrirRegistro={abrirRegistro}
          abrirOlvidado={abrirOlvidado}
          abrirAdmin={abrirAdmin}
        />
      )}

      {modalAbierto === "registro" && (
        <Registro1
          cerrarModal={cerrarModal}
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
          cerrarModal={cerrarModal}
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

      {modalAbierto === "loginAdmin" && (
        <LoginAdmin
          cerrarModal={cerrarModal}
          abrirLogin={abrirLogin}
          abrirOlvidado={abrirOlvidado}
          
        />
      )}

      {modalAbierto === "registroA1" && (
        <RegistroAdmin1
          cerrarModal={cerrarModal}
          abrirRegistroA2={abrirRegistroA2}
          
        />
      )}

      {modalAbierto === "registroA2" && (
        <RegistroAdmin2
          cerrarModal={cerrarModal}
          
        />
      )}



      {/*Este outlet inicialmente era solo para mostrar las demas paginas pero ahora tamb lo use para pasar */}
      {/*el modal al Home.js para que este se lo pase a tarjetas y así poder cargar el modal con la tarjeta Ir a Somina*/}
      {/*son las 3 de la mañana, posiblemente esto no tenga tanto sentido pero es lo unico que se em ocurrio (Ahora tamb voy a mandar registro para que lo abra*/}

      <Outlet context={{ abrirLogin, abrirRegistroA1 }} />
    </>
  );
}

export default HamburguesaMenu;