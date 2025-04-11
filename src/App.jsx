import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Index";
import AboutSub from "./Pages/About/AboutSub";
import OfertaSub from "./Pages/Oferta/OfertaSub";
import ExitoSub from "./Pages/Exito/ExitoSub"; // Ensure this matches the exact file structure and naming

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter basename="/Sunshine_University/">
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
