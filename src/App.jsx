import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Index";
import AboutSub from "./Pages/About/AboutSub";
import OfertaSub from "./Pages/Oferta/OfertaSub";
import ExitoSub from "./Pages/Exito/ExitoSub";
import "@/styles/global.scss"; // ✅ this uses your alias

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/About" element={<AboutSub />} />
            <Route path="/Oferta" element={<OfertaSub />} />
            <Route path="/Exito" element={<ExitoSub />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
