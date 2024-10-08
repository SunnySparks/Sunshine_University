import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
