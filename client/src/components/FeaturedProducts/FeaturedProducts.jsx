import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

function FeaturedProducts() {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <section
      className="featured"
      id="featured-products"
    >
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
               <button
                className="wishlist-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
              >
                {isWishlisted(product.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>

              <img
                src={product.image}
                alt={product.name}
              />

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

            {/* INFO */}

            <div className="product-info">
              <h3>{product.name}</h3>

              <div className="price">
                <span>
                  ₹{product.price}
                </span>

                {product.oldPrice && (
                  <del>
                    ₹{product.oldPrice}
                  </del>
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