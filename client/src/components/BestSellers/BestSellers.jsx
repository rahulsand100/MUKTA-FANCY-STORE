import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import "./BestSellers.css";

function BestSellers() {
  const navigate = useNavigate();

  const bestSellers = products.slice(0, 4);

  return (
    <section className="best-sellers">
      <div className="best-title">
        <p>MUKTA COLLECTION</p>

        <h2>Best Sellers</h2>

        <span>
          Most loved products from our customers
        </span>
      </div>

      <div className="best-grid">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="best-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="best-info">
              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;