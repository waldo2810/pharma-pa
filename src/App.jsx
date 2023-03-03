import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Gestion from "./pages/Gestion";
import GestionContent from "./pages/Gestion/GestionContent";
import Cartera from "./pages/Cartera";
import Facturacion from "./pages/Facturacion";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gestion/:tabName" element={<GestionContent />} />
          <Route path="/cartera" element={<Cartera />} />
          <Route path="/facturacion" element={<Facturacion />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default App;
