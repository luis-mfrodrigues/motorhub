import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import defaultImg from "../images/default/default1.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">

  {/* 🔵 SEARCH */}
  <div className="search-section">
    <h1>Que carro procuras?</h1>

    <div className="search-box">
      <div className="grid">
        <div>
          <label>Marca</label>
          <select><option></option></select>
        </div>

        <div>
          <label>Combustível</label>
          <select><option></option></select>
        </div>

        <div>
          <label>Modelo</label>
          <select><option></option></select>
        </div>

        <div>
          <label>Preço até</label>
          <select><option></option></select>
        </div>

        <div>
          <label>Tipo de veículo</label>
          <select><option></option></select>
        </div>

        <div>
          <label>Ano de</label>
          <select><option></option></select>
        </div>
      </div>

      <button className="search-btn">Ver anúncios</button>
    </div>
  </div>

  {/* 🟢 ANÚNCIOS */}
  <div className="ads-wrapper">
    <h2>Anúncios em destaque</h2>

    <div className="ads-grid">
      <div className="big-card">
  <img src={defaultImg} alt="carro" />
</div>

      <div className="small-grid">
        <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
        <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
        <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
        <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
      </div>
    </div>

    <div className="bottom-grid">
      <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
      <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
      <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
      <div className="card">
  <img src={defaultImg} alt="carro" />
</div>
    </div>
  </div>

</div>

      <Footer />
    </>
  );
}