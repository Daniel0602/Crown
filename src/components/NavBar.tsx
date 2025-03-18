import { Link } from "react-router-dom";

import "../styles/components/NavBar.css";

function Navbar() {
  return (
    <nav>
      <Link className="link" to="/">
        Inicio
      </Link>
      <Link className="link" to="/">
        Calculadora
      </Link>
      <Link className="link" to="/">
        Notas
      </Link>
      <Link className="link" to="/school">
        Escuela
      </Link>
    </nav>
  );
}

export default Navbar;
