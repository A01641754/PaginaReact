import { useState } from "react";

function HamburguesaMenu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="header falso">
      
      <div className="Logo">
        <p>Somnia</p>
      </div>

      {/* Botón abrir */}
      <button
        
        class="bi bi-list"
        className = "abrir-menu"
        onClick={() => setMenuAbierto(true)}
      >
        <i class="bi bi-list"></i>
        
      </button>

      {/* Menú */}

      <nav className={menuAbierto ? "navbar visible" : "navbar"}>
        
        {/* Botón cerrar */}
        
        <button
          className="cerrar-menu"
          onClick={() => setMenuAbierto(false)}
        >
          <i class="bi bi-x"></i>
        </button>

        <ul className="nav-list">
          <li><span className="linkFake">Videojuego</span></li>
          <li><span className="linkFake">Historia</span></li>
          <li><span className="linkFake">Islas</span></li>
          <li><span className="linkFake">Personajes</span></li>
          <li><span className="linkFake">Creadores</span></li>
        </ul>
      </nav>

    </div>
  );
}

export default HamburguesaMenu;