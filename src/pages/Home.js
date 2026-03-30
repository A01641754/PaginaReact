import { useOutletContext } from "react-router-dom";
import Tarjetas from "../components/Tarjetas";

function Home() {
  const { abrirLogin } = useOutletContext();

  return (
    <>
      <div className="fondoMain"></div>

      <section className="cajaDeCajas">
        <Tarjetas tipo={1} abrirLogin={abrirLogin} />
        <Tarjetas tipo={2} />
        <Tarjetas tipo={3} />
        <Tarjetas tipo={4} />
        <Tarjetas tipo={5} />
      </section>
    </>
  );
}
export default Home;