import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/login.css";

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

      <div className="login-container">
        {/* LEFT */}
        <div className="login-left">
          <h1 className="login-title">Login</h1>

          <form onSubmit={handleLogin} className="login-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span className="forgot">Esqueci-me da password</span>

            <button type="submit">Entrar</button>
          </form>

          {message && <p className="message">{message}</p>}

          <p className="register">
            Ainda não tens conta? <Link to="/register">Cria uma agora!</Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right"></div>
      </div>
    </>
  );
}