import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/register.css";

export default function Register() {
  const [tipo, setTipo] = useState("particular");

  return (
    <>
      <Navbar />

      <div className="register-container">
        {/* LEFT */}
        <div className="register-left">
          <h1>Criar conta</h1>

          {/* ESCOLHER PERFIL */}
          <p className="perfil-label">Escolher o perfil</p>

          <div className="perfil-opcoes">
            <div
              className={`opcao ${tipo === "particular" ? "ativo" : ""}`}
              onClick={() => setTipo("particular")}
            >
              <div className="checkbox">{tipo === "particular" && "✔"}</div>
              Particular
            </div>

            <div
              className={`opcao ${tipo === "empresa" ? "ativo" : ""}`}
              onClick={() => setTipo("empresa")}
            >
              <div className="checkbox">{tipo === "empresa" && "✔"}</div>
              Empresa
            </div>
          </div>

          {/* FORM */}
          <form className="register-form">
            <label>Nome</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            {/* SÓ APARECE SE FOR EMPRESA */}
            {tipo === "empresa" && (
              <>
                <label>Nome empresa</label>
                <input type="text" />
              </>
            )}

            <label>Password</label>
            <input type="password" />

            <button>Criar conta</button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="register-right"></div>
      </div>
    </>
  );
}