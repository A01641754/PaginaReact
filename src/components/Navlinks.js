import { Link } from "react-router-dom";

const Navlinks = {
  A: () => (
    <ul className="nav-list">
      <li><Link className="linktrue" to="/login">Videojuegos</Link></li>
      <li><Link className="linktrue" to="/historia">Historia</Link></li>
      <li><Link className="linktrue" to="/islas">Islas</Link></li>
      <li><Link className="linktrue" to="/personajes">Personajes</Link></li>
      <li><Link className="linktrue" to="/creadores">Creadores</Link></li>
    </ul>
  ),

  B: () => (
    <ul className="nav-listPC">
      <li><Link className="linktrue" to="/login">Videojuegos</Link></li>
      <li><Link className="linktrue" to="/historia">Historia</Link></li>
      <li><Link className="linktrue" to="/islas">Islas</Link></li>
      <li><Link className="linktrue" to="/personajes">Personajes</Link></li>
      <li><Link className="linktrue" to="/creadores">Creadores</Link></li>
    </ul>
  )
};

export default Navlinks;