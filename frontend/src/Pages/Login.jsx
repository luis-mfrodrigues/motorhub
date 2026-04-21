import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login com sucesso!");
      } else {
        setMessage(data.message || "Erro no login");
      }
    } catch (err) {
      setMessage("Erro ao conectar ao servidor");
    }
  };

  return (
  <>
    <Navbar />

    <div style={styles.container}>
      {/* LADO ESQUERDO */}
      <div style={styles.left}>
        <h1 style={styles.title}>Login</h1>

        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span style={styles.forgot}>Esqueci-me da password</span>

          <button style={styles.button} type="submit">
            Entrar
          </button>
        </form>

        <p style={styles.message}>{message}</p>

        <p style={styles.register}>
          Ainda não tens conta? <a href="#">Cria uma agora!</a>
        </p>
      </div>

      {/* LADO DIREITO */}
      <div style={styles.right}></div>
    </div>
  </>
);
}

const styles = {
  container: {
  display: "flex",
  height: "calc(100vh - 70px)",
  fontFamily: "Inter, sans-serif", // 👈 melhor
},
  left: {
  width: "35%", // em vez de 40%
  maxWidth: "500px", // 👈 chave
  padding: "80px 60px",
  backgroundColor: "#f8f8f8",
  borderRight: "1px solid #ddd",
},
right: {
  width: "65%",
  backgroundColor: "#d6cec8", // 👈 mais próximo do mockup
},
title: {
  fontSize: "42px",
  fontWeight: "600", // 👈 importante
  marginBottom: "50px",
},
form: {
  display: "flex",
  flexDirection: "column",
  gap: "10px", // 👈 adiciona isto
},
  label: {
    marginBottom: "8px",
    fontWeight: "500",
  },
  input: {
  padding: "14px",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#e6e1dd",
  width: "100%", // 👈 isto é chave
},
  forgot: {
    fontSize: "12px",
    marginBottom: "20px",
    color: "#555",
    cursor: "pointer",
  },
 button: {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#c4b5a5",
  color: "#fff",
  cursor: "pointer",
  marginBottom: "20px",
  width: "50%", // 👈 NÃO 100%
},
  message: {
    color: "red",
  },
  register: {
    fontSize: "14px",
  },
};