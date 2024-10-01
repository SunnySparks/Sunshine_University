const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
