import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Brand */}

        <div className="footer-column footer-brand">

          <img src="/logo.png" alt="Mukta Fancy Store" />

          <h2>Mukta Fancy Store</h2>

          <p>
            Bringing premium fashion, gift items, and quality products
            to your family with trust, elegance, and affordable prices.
          </p>

          <div className="footer-social">

            <a
              href="https://wa.me/919863139043"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/muktafancystore"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
            >
              <FaFacebookF />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li onClick={() => navigate("/")}>
              <FaArrowRight /> Home
            </li>

            <li>
              <FaArrowRight /> Women
            </li>

            <li>
              <FaArrowRight /> Men
            </li>

            <li>
              <FaArrowRight /> Kids
            </li>

            <li>
              <FaArrowRight /> Gift Items
            </li>

          </ul>

        </div>

        {/* Customer Support */}

        <div className="footer-column">

          <h3>Customer Support</h3>

          <ul>

            <li>
              <FaArrowRight /> Easy WhatsApp Ordering
            </li>

            <li>
              <FaArrowRight /> Premium Quality
            </li>

            <li>
              <FaArrowRight /> Friendly Support
            </li>

            <li>
              <FaArrowRight /> Secure Shopping
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt />
            <span>+91 9863139043</span>
          </p>

          <p>
            <FaEnvelope />
            <span>muktafancystore@gmail.com</span>
          </p>

          <p>
            <FaMapMarkerAlt />
            <span>Panisagar, Tripura</span>
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Mukta Fancy Store. All Rights Reserved.
        </p>

        <p>
          Crafted with ❤️ for Premium Fashion
        </p>

      </div>

    </footer>
  );
}

export default Footer;