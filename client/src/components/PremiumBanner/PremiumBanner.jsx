import { useNavigate } from "react-router-dom";
import "./PremiumBanner.css";

function PremiumBanner() {
  const navigate = useNavigate();

  return (
    <section className="premium-banner">

      <div className="premium-banner-content">

        <p className="premium-tag">
          ✨ NEW FESTIVE COLLECTION
        </p>

        <h2>
          Discover Luxury Fashion
          <br />
          Crafted For Every Occasion
        </h2>

        <p className="premium-description">
          Premium clothing, elegant styles and carefully
          selected collections for women, men and kids.
        </p>

        <div className="premium-buttons">

          <button
            onClick={() => navigate("/category/women")}
          >
            SHOP WOMEN
          </button>

          <button
            className="outline"
            onClick={() => navigate("/category/men")}
          >
            SHOP MEN
          </button>

        </div>

      </div>

      <div className="premium-features">

        <div className="feature-card">
          <span>🚚</span>
          <h3>Free Delivery</h3>
          <p>Above ₹999</p>
        </div>

        <div className="feature-card">
          <span>💎</span>
          <h3>Premium Quality</h3>
          <p>Carefully Selected</p>
        </div>

        <div className="feature-card">
          <span>💬</span>
          <h3>WhatsApp Order</h3>
          <p>Quick & Easy</p>
        </div>

        <div className="feature-card">
          <span>❤️</span>
          <h3>Trusted Store</h3>
          <p>Loved by Customers</p>
        </div>

      </div>

    </section>
  );
}

export default PremiumBanner;