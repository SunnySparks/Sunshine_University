import "./styles.scss";
import img from "../../images/badge.png";
const Hero = () => {
  return (
    <div id="inicio">
      <div id="layoutCont">
        <div id="title">
          <h1 className="webfont">
            Sunshine<br></br>University
          </h1>
          <img src={img} />
        </div>
        <div id="linksCont">
          {/*<Link className="navLink webfont" href={`#AboutCont`}>
            <span>{`Sobre Nosotros`}</span>
            <div className="liquid"></div>
          </Link>
          <Link className="navLink webfont" href="#ofertaCont">
            <span>{`Oferta Académica`}</span>
            <div className="liquid"></div>
          </Link>

          <Link className="navLink webfont" href="#exitoCont">
            <span>{`Éxito Académico`}</span>
            <div className="liquid"></div>
          </Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
