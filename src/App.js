import { Route, Routes } from "react-router-dom";
import './App.css';
/*Este es para importar los iconos */
import 'bootstrap-icons/font/bootstrap-icons.css';
import HamburguesaMenu from "./components/HamburguesaMenu";
import Home from "./pages/Home";
import Creadores from "./pages/Creadores";
import Historia from "./pages/Historia";
import PanelAdmin from "./pages/PanelAdmin";
import RegistroAdmin1 from "./components/RegistroAdmin1"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HamburguesaMenu />}>
        
        <Route index element={<Home />} />
        <Route path="creadores" element={<Creadores />} />
        <Route path="historia" element={<Historia />} />
        <Route path="panel" element={<PanelAdmin />} />
        <Route path="registroA1" element={<RegistroAdmin1/>}/>

      </Route>
    </Routes>
  );
}

export default App;