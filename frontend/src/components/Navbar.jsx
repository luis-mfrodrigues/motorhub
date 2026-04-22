import { Link } from "react-router-dom";
import logo from "../imagens/logotipo.png";
export default function Navbar() {
  return (
    <div style={styles.navbar}>
      {/* LOGO */}
      <div style={styles.logo}>
  <Link to="/">
    <img src={logo} alt="MotorHub" style={styles.logoImg} />
  </Link>
</div>

      {/* MENU */}
      <div style={styles.menu}>
        <span>Carros em stock</span>
        <span>Favoritos</span>
        <span>Motorhub ▾</span>
      </div>

      {/* DIREITA */}
      <div style={styles.right}>
        <Link to="">Login</Link>
        <span>|</span>
        <span>Criar conta</span>
        <button style={styles.button}>Anunciar +</button>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  logoImg: {
  height: "40px",
  objectFit: "contain",
  cursor: "pointer",
},
  menu: {
  display: "flex",
  gap: "30px",
  color: "#333",
  cursor: "pointer",
},
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  button: {
    backgroundColor: "#c4b5a5",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
};