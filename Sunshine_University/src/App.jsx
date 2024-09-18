import "./styles/global.scss";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Oferta from "./Components/OfertaAcademica/Oferta";
import Exito from "./Components/ExitoAcademico/Exito";
import Footer from "./Components/Layout/Footer";
import NavBar from "./Components/Layout/NavBar";
//import About from "./Pages/About/SaberMas";
//import Exito from "./Pages/Exito/SaberMas";
//import Oferta from "./Pages/Oferta/SaberMas";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {/*<Hero />
      <About />
      <Oferta />
      <Exito />
      <Footer />*/}
    </>
  );
}

export default App;
