import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar, FaWhatsapp } from "react-icons/fa";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    addToCart,
    setIsCartOpen,
  } = useCart();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

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
NEW ORDER - MUKTA FANCY STORE

Order ID: ${orderId}

Product: ${product.name}
Category: ${product.category}
Size: ${selectedSize}
Quantity: ${quantity}

Price: ₹${product.price}
Total: ₹${total}

Hello Mukta Fancy Store,
I want to place this order.
Please confirm my order.
`;

    const phoneNumber = "91XXXXXXXXXX";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="product-details-page">
      <button
        type="button"
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
            MUKTA {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="product-details-rating">
            <FaStar />

            <span>{product.rating || "4.8"}</span>

            <small>Premium Collection</small>
          </div>

          <div className="product-details-price">
            <strong>
              ₹{Number(product.price).toLocaleString("en-IN")}
            </strong>

            {product.oldPrice && (
              <del>
                ₹{Number(product.oldPrice).toLocaleString("en-IN")}
              </del>
            )}

            {product.discount && (
              <span>{product.discount}</span>
            )}
          </div>

          <p className="product-details-description">
            {product.description}
          </p>

          {/* SIZE */}

          <div className="product-size-section">
            <div className="product-option-title">
              <h3>Select Size</h3>

              <span>
                Selected: {selectedSize}
              </span>
            </div>

            <div className="product-size-options">
              {sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  className={`size-button ${
                    selectedSize === size
                      ? "size-active"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}

          <div className="product-quantity-section">
            <h3>Quantity</h3>

            <div className="product-quantity-box">
              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) =>
                    prev > 1 ? prev - 1 : 1
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="product-benefits">
            <p>✓ Premium quality selected by Mukta</p>
            <p>✓ Easy WhatsApp ordering</p>
            <p>✓ Carefully packed with love</p>
          </div>

          <button
            type="button"
            className="product-add-cart"
            onClick={handleAddToCart}
          >
            ADD TO SHOPPING BAG
          </button>

          <button
            type="button"
            className="product-whatsapp-button"
            onClick={handleWhatsAppOrder}
          >
            <FaWhatsapp />
            ORDER DIRECTLY ON WHATSAPP
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;