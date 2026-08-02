import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar, FaWhatsapp } from "react-icons/fa";

import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

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
  const relatedProducts = products
  .filter((item) => item.id !== product?.id)
  .slice(0, 3);

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
  MUKTA COLLECTION
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
  Premium quality fabric with modern styling.
  Comfortable for daily wear, parties and festive occasions.
  Carefully selected by Mukta Fancy Store.
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
          <div className="product-trust">

  <div className="trust-card">
    <span>🚚</span>

    <div>
      <h4>Fast Delivery</h4>
      <p>Delivery available across India.</p>
    </div>
  </div>

  <div className="trust-card">
    <span>🔒</span>

    <div>
      <h4>Secure Ordering</h4>
      <p>Safe ordering through WhatsApp.</p>
    </div>
  </div>

  <div className="trust-card">
    <span>💎</span>

    <div>
      <h4>Premium Quality</h4>
      <p>Every product is quality checked.</p>
    </div>
  </div>

  <div className="trust-card">
    <span>🎁</span>

    <div>
      <h4>Gift Ready</h4>
      <p>Perfect for festivals and special occasions.</p>
    </div>
  </div>

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

<RelatedProducts
  currentProduct={product}
/>
<section className="related-products">

  <h2>You May Also Like</h2>

  <div className="related-grid">

    {relatedProducts.map((item) => (

      <div
        key={item.id}
        className="related-card"
        onClick={() => navigate(`/product/${item.id}`)}
      >

        <img
          src={item.image}
          alt={item.name}
        />

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>

      </div>

    ))}

  </div>

</section>

</main>
  );
}

export default ProductDetails;