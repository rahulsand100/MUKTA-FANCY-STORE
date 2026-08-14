import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, setIsCartOpen } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  const product = products.find(
    (item) => Number(item.id) === Number(id)
  );

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

  const relatedProducts = products
    .filter((item) => Number(item.id) !== Number(product.id))
    .slice(0, 4);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const total = Number(product.price) * quantity;

  /* =========================
     ADD TO CART
  ========================= */

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

  /* =========================
     WHATSAPP ORDER
  ========================= */

  const handleWhatsAppOrder = () => {
    const orderId = `MUKTA-${Date.now()
      .toString()
      .slice(-8)}`;

    const message = `
🛍️ NEW ORDER - MUKTA FANCY STORE

Order ID: ${orderId}

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}

Price: ₹${product.price}
Total: ₹${total}

Payment Method: Cash on Delivery

Hello Mukta Fancy Store,
I want to place this order.
Please confirm my order.
`;

    window.open(
      `https://wa.me/919863139043?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  /* =========================
     DELIVERY CHECK
  ========================= */

  const handleDeliveryCheck = () => {
    if (pincode.length !== 6) {
      setDeliveryMessage(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    setDeliveryMessage(
      "✓ Delivery available. We will confirm the delivery time with you."
    );
  };

  return (
    <main className="product-details-page">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <button
        className="product-back-button"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
        BACK TO SHOPPING
      </button>

      {/* =========================
          MAIN PRODUCT SECTION
      ========================= */}

      <div className="product-details-container">

        {/* PRODUCT IMAGE */}

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

        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <p className="product-details-category">
            MUKTA COLLECTION
          </p>

          <h1>{product.name}</h1>

          {/* STOCK */}

          <div className="product-stock">
            <span className="stock-dot"></span>
            In Stock • Ready to Ship
          </div>

          {/* RATING */}

          <div className="product-details-rating">

            <FaStar />

            <span>
              {product.rating || "4.8"}
            </span>

            <small>
              Premium Collection
            </small>

          </div>

          {/* PRICE */}

          <div className="product-details-price">

            <strong>
              ₹{product.price}
            </strong>

            {product.oldPrice && (
              <del>
                ₹{product.oldPrice}
              </del>
            )}

            {product.discount && (
              <span>
                {product.discount}
              </span>
            )}

          </div>

          {/* DESCRIPTION */}

          <p className="product-details-description">
            Premium quality fabric with modern styling.
            Comfortable for daily wear, festive occasions,
            parties and celebrations.
          </p>

          {/* =========================
              SIZE
          ========================= */}

          <div className="product-size-section">

            <div className="product-option-title">

              <h3>
                Select Size
              </h3>

              <span>
                Selected: {selectedSize}
              </span>

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

          {/* =========================
              QUANTITY
          ========================= */}

          <div className="product-quantity-section">

            <h3>
              Quantity
            </h3>

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

              <span>
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* =========================
              DELIVERY CARD
          ========================= */}

          <div className="delivery-card">

            <div className="delivery-header">

              <div>
                <span className="delivery-label">
                  DELIVERY
                </span>

                <h3>
                  Delivery Information
                </h3>
              </div>

              <span className="delivery-fast">
                FAST & SECURE
              </span>

            </div>

            <div className="pincode-box">

              <input
                type="text"
                maxLength="6"
                value={pincode}
                onChange={(e) =>
                  setPincode(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                placeholder="Enter PIN Code"
              />

              <button
                onClick={handleDeliveryCheck}
              >
                CHECK
              </button>

            </div>

            {deliveryMessage && (
              <p className="delivery-message">
                {deliveryMessage}
              </p>
            )}

            <div className="delivery-list">

              <div className="delivery-item">

                <span>
                  🚚
                </span>

                <div>
                  <h4>
                    Free Shipping
                  </h4>

                  <p>
                    Orders above ₹999
                  </p>
                </div>

              </div>

              <div className="delivery-item">

                <span>
                  📦
                </span>

                <div>
                  <h4>
                    Quick Dispatch
                  </h4>

                  <p>
                    Within 24 Hours
                  </p>
                </div>

              </div>

              <div className="delivery-item">

                <span>
                  💵
                </span>

                <div>
                  <h4>
                    Cash on Delivery
                  </h4>

                  <p>
                    Pay when your order arrives
                  </p>
                </div>

              </div>

              <div className="delivery-item">

                <span>
                  🔄
                </span>

                <div>
                  <h4>
                    Easy Returns
                  </h4>

                  <p>
                    7 Day Return Policy
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =========================
              WHY SHOP WITH US
          ========================= */}

          <div className="offer-card">

            <div className="offer-card-header">

              <span>
                ✦
              </span>

              <h3>
                Why Shop With Us?
              </h3>

            </div>

            <div className="offer-item">

              <span>
                ⭐
              </span>

              <p>
                Premium Quality Products
              </p>

            </div>

            <div className="offer-item">

              <span>
                ❤️
              </span>

              <p>
                Trusted Local Store
              </p>

            </div>

            <div className="offer-item">

              <span>
                💬
              </span>

              <p>
                Easy WhatsApp Ordering
              </p>

            </div>

            <div className="offer-item">

              <span>
                🎁
              </span>

              <p>
                Premium Packaging
              </p>

            </div>

          </div>

          {/* =========================
              BENEFITS
          ========================= */}

          <div className="product-benefits">

            <div>
              <span>
                ✓
              </span>

              <p>
                Premium Quality
              </p>
            </div>

            <div>
              <span>
                ✓
              </span>

              <p>
                Carefully Packed
              </p>
            </div>

            <div>
              <span>
                ✓
              </span>

              <p>
                COD Available
              </p>
            </div>

          </div>

          {/* =========================
              TOTAL
          ========================= */}

          <div className="product-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total}
            </strong>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================= */}

          <div className="product-action-buttons">

            <button
              className="product-add-cart"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
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

          {/* =========================
              PAYMENT NOTE
          ========================= */}

          <div className="payment-note">

            <span>
              💵
            </span>

            <div>

              <strong>
                Cash on Delivery
              </strong>

              <p>
                No online payment required.
                Pay safely when your order arrives.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          RELATED PRODUCTS
      ========================= */}

      <section className="related-products">

        <div className="related-heading">

          <p>
            DISCOVER MORE
          </p>

          <h2>
            You May Also Like
          </h2>

          <span>
            Explore more pieces from the Mukta Collection.
          </span>

        </div>

        <div className="related-grid">

          {relatedProducts.map((item) => (

            <div
              key={item.id}
              className="related-card"
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
            >

              <div className="related-image">

                {item.discount && (
                  <span>
                    {item.discount}
                  </span>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <div className="related-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(
                      `/product/${item.id}`
                    );
                  }}
                >
                  VIEW PRODUCT
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;