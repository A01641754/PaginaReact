import { Route, Routes } from "react-router-dom";
import './App.css';
/*Este es para importar los iconos */
import 'bootstrap-icons/font/bootstrap-icons.css';
import HamburguesaMenu from "./pages/HamburguesaMenu";
import Home from "./pages/Home";
import Creadores from "./pages/Creadores"
import Historia from "./pages/Historia"

function App() {
  return (
      <Routes>
        <Route path = "/" element={<HamburguesaMenu/>}>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/creadores" element={<Creadores/>}/>
          <Route path = "/historia" element={<Historia/>}/>

        


        </Route>
      </Routes>
    
  )
}

export default App;
