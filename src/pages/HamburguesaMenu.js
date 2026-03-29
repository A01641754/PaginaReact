import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navlinks from "../components/Navlinks";

function HamburguesaMenu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <header className="header falso">
        <div className="Logo">
          <p>Somnia</p>
        </div>

        <Navlinks.B />

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

          <Navlinks.A />
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default HamburguesaMenu;