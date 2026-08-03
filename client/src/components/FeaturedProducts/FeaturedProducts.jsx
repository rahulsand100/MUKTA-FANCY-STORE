import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";

function FeaturedProducts() {
  const navigate = useNavigate();

  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <section className="featured" id="featured-products">
      <div className="featured-title">
        <p>PREMIUM COLLECTION</p>
        <h2>Featured Products</h2>
        <span>Handpicked premium fashion for every occasion.</span>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="image-overlay"></div>

              <span className="badge">
                {product.discount || "NEW"}
              </span>

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

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span>(128 Reviews)</span>
              </div>

              <div className="price">

                <span className="new-price">
                  ₹{product.price}
                </span>

                {product.oldPrice && (
                  <>
                    <del>₹{product.oldPrice}</del>

                    <div className="discount">
                      28% OFF
                    </div>
                  </>
                )}

              </div>

              <button
                className="view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${product.id}`);
                }}
              >
                VIEW PRODUCT
              </button>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;