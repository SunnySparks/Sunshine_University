import "./styles/global.scss";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Oferta from "./Components/OfertaAcademica/Oferta";
import Exito from "./Components/ExitoAcademico/Exito";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Oferta />
      <Exito />
      <Footer />
    </>
  );
}

export default App;
