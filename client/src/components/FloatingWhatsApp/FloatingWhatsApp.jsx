import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919863139043"
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
    >
      <FaWhatsapp />
      <span>Chat with Us</span>
    </a>
  );
}

export default FloatingWhatsApp;