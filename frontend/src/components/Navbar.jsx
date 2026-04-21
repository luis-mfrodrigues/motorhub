export default function Navbar() {
  return (
    <div style={styles.navbar}>
      {/* LOGO */}
      <div style={styles.logo}>
        <span style={{ color: "red" }}>Motor</span>Hub
      </div>

      {/* MENU */}
      <div style={styles.menu}>
        <span>Carros em stock</span>
        <span>Favoritos</span>
        <span>Motorhub ▾</span>
      </div>

      {/* DIREITA */}
      <div style={styles.right}>
        <span>Login</span>
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
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menu: {
    display: "flex",
    gap: "30px",
    color: "#333",
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