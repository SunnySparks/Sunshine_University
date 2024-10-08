import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Oferta from "../../Pages/Oferta/Oferta";
import About from "../../Pages/About/About";
import Exito from "../../Pages/Exito/Exito";

const NavBar = () => {
  return (
        <nav id="navCont">
          <ul>
            <li>
              <Link to="/" className="navLink">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/About" className="navLink">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/Oferta" className="navLink">
                Oferta Académica
              </Link>
            </li>
            <li>
              <Link to="/Exito" className="navLink">
                Éxito Académico
              </Link>
            </li>
          </ul>
        </nav>
  );
};

export default NavBar;
