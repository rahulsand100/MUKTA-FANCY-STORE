import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";

function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="featured">
      <div className="featured-title">
        <p>MUKTA COLLECTIONS</p>
        <h2>Featured Products</h2>
        <span>Discover our latest fashion arrivals.</span>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <span className="badge">
                {product.discount || "NEW"}
              </span>

              <button
                className="cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${product.id}`);
                }}
              >
                BUY NOW
              </button>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <div className="price">
                <span>₹{product.price}</span>

                {product.oldPrice && (
                  <del>₹{product.oldPrice}</del>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;