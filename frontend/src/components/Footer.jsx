import "../styles/footer.css";
import logo from "../images/logotipo_footer.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <div className="socials">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>

        <img src={logo} alt="MotorHub" className="footer-logo" />

        <p className="copyright">
          © MotorHub Portugal 2026 . All Rights Reserved
        </p>
      </div>

      {/* CENTER */}
      <div className="footer-center">
        <h4>MotorHub</h4>
        <p>Sobre nós</p>
        <p>Contactos</p>
        <p>Termos e condições</p>
        <p>Política de Privacidade</p>
        <p>Cookies</p>
      </div>

      {/* RIGHT */}
      <div className="footer-right">
        <div className="scroll-top">↑</div>
      </div>

    </footer>
  );
}