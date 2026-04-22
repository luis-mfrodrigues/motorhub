import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/reset.css";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  return (
    <>
      <Navbar />

      <div className="reset-container">
        {/* LEFT */}
        <div className="reset-left">
          <h2>Atualização de palavra-passe</h2>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <p>
                Deverá colocar o seu email e receber um código de confirmação
              </p>

              <input placeholder="email@email.com" />
              <button onClick={() => setStep(2)}>enviar</button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <p>Introduza o código recebido</p>

              <div className="codigo-box">
                {codigo.map((c, i) => (
                  <input
                    key={i}
                    maxLength="1"
                    value={c}
                    onChange={(e) => {
                      const novo = [...codigo];
                      novo[i] = e.target.value;
                      setCodigo(novo);
                    }}
                  />
                ))}
              </div>

              <button onClick={() => setStep(3)}>validar</button>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <p>Defina a nova palavra-passe</p>

              <input type="password" placeholder="Nova password" />
              <input type="password" placeholder="Confirmar password" />

              <button>alterar</button>
            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="reset-right"></div>
      </div>
    </>
  );
}