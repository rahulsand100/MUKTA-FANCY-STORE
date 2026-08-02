import "./OfferBanner.css";

function OfferBanner() {
  return (
    <section className="offer-banner">
      <div className="offer-content">
        <span className="offer-badge">🔥 LIMITED TIME</span>

        <h2>Durga Puja Mega Sale</h2>

        <p>
          Flat <strong>20% OFF</strong> • Free Gift Above
          <strong> ₹1,559</strong> • Premium Fashion Collection
        </p>

        <div className="offer-code">
          Use Code:
          <span>MUKTA26</span>
        </div>

        <button>SHOP NOW</button>
      </div>
    </section>
  );
}

export default OfferBanner;