import React from "react";
import Layout from "./Components/Layout";
import "./styles/global.scss";
import Hero from "./Components/Hero/Hero";
import OfertaAcademica from "./Components/OfertaAcademica/Oferta";
import ExitoAcademico from "./Components/ExitoAcademico/Exito";
import About from "./Components/About/About";
import Footer from "./Components/Layout/Footer";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const Index = () => {
  return (
    <>
      About
      {/*<Layout>
      <Hero />
      <About />
      <OfertaAcademica />
      <ExitoAcademico />
      <Footer />
    </Layout>*/}
    </>
  );
};

export default Index;
