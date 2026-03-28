import { Link } from "react-router-dom";
import './App.css';
/*Este es para importar los iconos */
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tarjetas from './componets/Tarjetas';
import HamburguesaMenu from "./componets/HamburguesaMenu";

function App() {
  return (
    <>
        

      <main>
        <div className = "fondoMain"> 
          <HamburguesaMenu /> 
          </div>

        <section className = "cajaDeCajas">
          <Tarjetas tipo={1}/>
          <Tarjetas tipo={2}/>
          <Tarjetas tipo={3}/>
          <Tarjetas tipo={4}/>
          <Tarjetas tipo={5}/>
        </section>
      </main>
    </>

  );
}

export default App;
