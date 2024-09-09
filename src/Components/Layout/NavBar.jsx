import React from "react";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/global.scss";*/

const navOptions = [
  { link: "/", text: "Inicio" },
  { link: "/About/SaberMas", text: "Sobre Nosotros" },
  { link: "/Oferta/SaberMas", text: "Oferta Académica" },
  { link: "/Exito/SaberMas", text: "Éxito Académico" },
];

const NavBar = () => {
  return (
    <div id="navCont">
      {navOptions.map(({ link, text }, i) => (
        <Link className="navLink" key={i} href={link}>
          {text}
        </Link>
      ))}
      <div id="iconsCont">
        <div className="iconInner">
          {/*<FontAwesomeIcon icon={faFacebook} />*/}
        </div>
        <div className="iconInner">
          {/*<FontAwesomeIcon icon={faWhatsapp} />*/}
        </div>
        <div className="iconInner">
          {/*<FontAwesomeIcon icon={faInstagram} />*/}
        </div>
        <div className="iconInner">
          {/*<FontAwesomeIcon icon={faTwitter} />*/}
        </div>
        <div className="iconInner">
          {/*<FontAwesomeIcon icon={faPinterest} />*/}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
