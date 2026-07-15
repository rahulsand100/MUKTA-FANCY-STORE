import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import "./Products.css";

function Products() {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();

  return (
    <section className="products-section">
      <div className="products-heading">
        <p>MUKTA SIGNATURE</p>

        <h2>Trending Now</h2>

        <span>
          Handpicked styles loved by our customers.
        </span>

        <h3>Cart Items: {cartCount}</h3>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            
            <div
              className="product-image-container"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <span className="discount-badge">
                {product.discount}
              </span>
            </div>

            <div className="product-info">
              <h3
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
              >
                {product.name}
              </h3>

              <div className="rating">
                <FaStar />
                <span>{product.rating}</span>
              </div>

              <div className="product-price">
                <strong>₹{product.price}</strong>

                <del>₹{product.oldPrice}</del>
              </div>

              <p>Free Delivery</p>

              <button
                type="button"
                className="quick-cart"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;