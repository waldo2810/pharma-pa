import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartera from "./pages/Cartera";
import Facturacion from "./pages/Facturacion";
import Gestion from "./pages/Gestion";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Gestion />} />
          <Route path="/cartera" element={<Cartera />} />
          <Route path="/facturacion" element={<Facturacion />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default App;
