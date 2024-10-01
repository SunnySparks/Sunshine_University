import React from "react";
import About from "../About/About";
import Header from "./Header";
import Hero from "../Hero/Hero";
import Footer from "./Footer";
import Exito from "../ExitoAcademico/Exito";
import Oferta from "../OfertaAcademica/Oferta";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Oferta />
      <Exito />
      <Footer />
    </>
  );
};

export default Index;
