import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar, FaWhatsapp } from "react-icons/fa";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, setIsCartOpen } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => Number(item.id) === Number(id)
  );

  // ✅ ONLY ONE relatedProducts declaration
  const relatedProducts = products
    .filter((item) => item.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <button onClick={() => navigate("/")}>
          BACK TO HOME
        </button>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      selectedSize,
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(cartProduct);
    }

    setIsCartOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const orderId = `MUKTA-${Date.now()
      .toString()
      .slice(-8)}`;

    const total = Number(product.price) * quantity;

    const message = `
🛍️ NEW ORDER - MUKTA FANCY STORE

Order ID: ${orderId}

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}

Price: ₹${product.price}
Total: ₹${total}

Hello Mukta Fancy Store,
I want to place this order.
Please confirm my order.
`;

    const phoneNumber = "919863139043";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main className="product-details-page">
      <button
        className="product-back-button"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
        BACK TO SHOPPING
      </button>

      <div className="product-details-container">
        <div className="product-details-image">
          {product.discount && (
            <span className="product-details-discount">
              {product.discount}
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">
          <p className="product-details-category">
            MUKTA COLLECTION
          </p>

          <h1>{product.name}</h1>

          <div className="product-details-rating">
            <div className="product-stock">
    <span className="stock-dot"></span>
    In Stock • Ready to Ship
</div>
            <FaStar />
            <span>{product.rating || "4.8"}</span>
            <small>Premium Collection</small>
          </div>

          <div className="product-details-price">
            <strong>₹{product.price}</strong>

            {product.oldPrice && (
              <del>₹{product.oldPrice}</del>
            )}

            {product.discount && (
              <span>{product.discount}</span>
            )}
          </div>

          <p className="product-details-description">
            Premium quality fabric with modern styling.
            Comfortable for daily wear, parties and festive
            occasions.
          </p>

          <div className="product-size-section">
            <div className="product-option-title">
              <h3>Select Size</h3>

              <span>Selected: {selectedSize}</span>
            </div>

            <div className="product-size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size
                      ? "size-active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-quantity-section">
            <h3>Quantity</h3>

            <div className="product-quantity-box">
              <button
                onClick={() =>
                  setQuantity((q) =>
                    q > 1 ? q - 1 : 1
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="delivery-card">

  <h3>🚚 Delivery Information</h3>

  <p>Free Delivery on orders above ₹999</p>

  <input
    type="text"
    placeholder="Enter PIN Code"
  />

  <button>Check Delivery</button>

</div>

          <div className="product-benefits">
            <p>✓ Premium Quality</p>
            <p>✓ Easy WhatsApp Order</p>
            <p>✓ Carefully Packed</p>
          </div>

          <button
            className="product-add-cart"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <button
            className="product-whatsapp-button"
            onClick={handleWhatsAppOrder}
          >
            <FaWhatsapp />
            ORDER ON WHATSAPP
          </button>
        </div>
      </div>

      {/* Related Products */}

      <section className="related-products">
        <h2>You May Also Like</h2>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="related-card"
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button>VIEW PRODUCT</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
  
}

export default ProductDetails;