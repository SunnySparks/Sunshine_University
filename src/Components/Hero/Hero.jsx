import "./styles.scss";
import img from "../../images/badge.png";
import { Routes, Route, Link } from "react-router-dom";

import About from "../../Components/About/About";
import Oferta from "../../Components/OfertaAcademica/Oferta";
import Exito from "../../Components/ExitoAcademico/Exito";
import { useState } from "react";

const Hero = () => {
  const [visibleComponent, setVisibleComponent] = useState("")
  return (
    <div id="inicio" className="homeComponent">
      <div id="layoutCont">
        <div id="title">
          <h1 className="webfont">
            Sunshine<br></br>University
          </h1>
          <img src={img} />
        </div>
        <div id="linksCont">
          <a className="navLink webfont" href={`#AboutCont`} onClick={() => setVisibleComponent('About')}>
            <span>{`Sobre Nosotros`}</span>
            <div className="liquid"></div>
          </a>
          <a className="navLink webfont" href="#ofertaCont" onClick={() => setVisibleComponent('Oferta')}>
            <span>{`Oferta Académica`}</span>
            <div className="liquid"></div>
          </a>
          <a className="navLink webfont" href="#exitoCont" onClick={() => setVisibleComponent('Exito')}>
            <span>{`Éxito Académico`}</span>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
      {visibleComponent === 'About' && <About />}
      {visibleComponent === 'Oferta' && <Oferta />}
      {visibleComponent === 'Exito' && <Exito />}
    </div>
  );
};

export default Hero;
