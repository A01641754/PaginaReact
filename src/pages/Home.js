import Tarjetas from "../components/Tarjetas";

function Home() {
  return (
    <>
      <div className="fondoMain"></div>

      <section className="cajaDeCajas">
        <Tarjetas tipo={1} />
        <Tarjetas tipo={2} />
        <Tarjetas tipo={3} />
        <Tarjetas tipo={4} />
        <Tarjetas tipo={5} />
      </section>
    </>
  );
}

export default Home;