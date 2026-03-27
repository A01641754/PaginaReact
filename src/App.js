
import './App.css';
import { HamburguesaMenu } from './componets/HamburguesaMenu';
import Tarjetas from './componets/Tarjetas';

function App() {
  return (
    <>
     
      <header className = "navbar">
        <div className = "Logo"> 
          <h2>Somnia</h2>
        </div>
        
        <HamburguesaMenu/>

      </header>
      

      <main>
        <div className = "fondoMain"> </div>

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
