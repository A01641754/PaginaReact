import { Link } from "react-router-dom";

const Navlinks = {
  A: ({ cerrarMenu, abrirLogin}) => (
    <ul className="nav-list">
      <li><button className="linktrueLogin" onClick={abrirLogin}>Jugar</button></li>
      <li><Link className="linktrue" to="/historia" onClick={cerrarMenu}>Historia</Link></li>
      <li><Link className="linktrue" to="/islas" onClick={cerrarMenu}>Islas</Link></li>
      <li><Link className="linktrue" to="/personajes" onClick={cerrarMenu}>Personajes</Link></li>
      <li><Link className="linktrue" to="/creadores" onClick={cerrarMenu}>Creadores</Link></li>
    </ul>
  ),

  B: ({abrirLogin}) => (
    <ul className="nav-listPC">
      <li><button className="linktrueLogin" onClick={abrirLogin}>Jugar</button></li>
      <li><Link className="linktrue" to="/historia">Historia</Link></li>
      <li><Link className="linktrue" to="/islas">Islas</Link></li>
      <li><Link className="linktrue" to="/personajes">Personajes</Link></li>
      <li><Link className="linktrue" to="/creadores">Creadores</Link></li>
    </ul>
  )
};

export default Navlinks;