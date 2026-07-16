import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  console.log("Cart Rendered");

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

console.log("Cart Rendered");
console.log("isCartOpen:", isCartOpen);
  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderId = `MUKTA-${Date.now()
      .toString()
      .slice(-8)}`;

    const productDetails = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Quantity: ${item.quantity}
Price: ₹${item.price}
Total: ₹${item.price * item.quantity}`
      )
      .join("\n\n");

    const message = `
🛍️ NEW ORDER - MUKTA FANCY STORE

🆔 Order ID: ${orderId}

📦 ORDER DETAILS

${productDetails}

💰 GRAND TOTAL: ₹${cartTotal}

Hello Mukta Fancy Store,
I want to place this order.

Please confirm my order.
`;

    const phoneNumber = "+919863139043";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
  
      
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`cart-drawer ${
          isCartOpen ? "cart-open" : ""
        }`}
      >
        <div className="cart-header">
          <div>
            <p className="cart-small-title">
              MUKTA EXCLUSIVE
            </p>

            <h2>Your Shopping Bag</h2>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={() => setIsCartOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h3>Your bag is empty</h3>

              <p>
                Discover something beautiful for your
                wardrobe.
              </p>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p className="cart-price">
                    ₹{item.price}
                  </p>

                  <div className="quantity-box">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="delivery-message">
              Order directly through WhatsApp
            </div>

            <div className="cart-total">
              <span>Grand Total</span>

              <strong>
                ₹{cartTotal.toLocaleString("en-IN")}
              </strong>
            </div>

            <button
              type="button"
              className="whatsapp-order-button"
              onClick={handleWhatsAppOrder}
            >
              ORDER ON WHATSAPP
            </button>

            <button
              type="button"
              className="continue-button"
              onClick={() => setIsCartOpen(false)}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;