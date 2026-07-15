import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";

import "./Category.css";

function Category() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const formattedCategory =
    categoryName.charAt(0).toUpperCase() +
    categoryName.slice(1);

  const categoryProducts = products.filter((product) => {
    const productCategory = String(
      product.category || ""
    ).toLowerCase();

    return productCategory === categoryName.toLowerCase();
  });

  return (
    <main className="category-page">
      <div className="category-header">
        <button
          type="button"
          className="category-back"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
          BACK TO HOME
        </button>

        <p>MUKTA SIGNATURE COLLECTION</p>

        <h1>{formattedCategory}</h1>

        <span>
          Discover styles carefully selected for you.
        </span>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="category-products-grid">
          {categoryProducts.map((product) => (
            <div
              className="category-product-card"
              key={product.id}
            >
              <div
                className="category-product-image"
                onClick={() =>
                  navigate(`/product/${product.id}`)
                }
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                {product.discount && (
                  <span className="category-discount">
                    {product.discount}
                  </span>
                )}
              </div>

              <div className="category-product-info">
                <h3
                  onClick={() =>
                    navigate(`/product/${product.id}`)
                  }
                >
                  {product.name}
                </h3>

                <div className="category-rating">
                  <FaStar />

                  <span>
                    {product.rating || "4.8"}
                  </span>
                </div>

                <div className="category-price">
                  <strong>
                    ₹
                    {Number(product.price).toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  {product.oldPrice && (
                    <del>
                      ₹
                      {Number(
                        product.oldPrice
                      ).toLocaleString("en-IN")}
                    </del>
                  )}
                </div>

                <p>Free Delivery</p>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="category-empty">
          <h2>Collection Coming Soon</h2>

          <p>
            New {formattedCategory} styles are being
            added to Mukta Fancy Store.
          </p>

          <button onClick={() => navigate("/")}>
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </main>
  );
}

export default Category;