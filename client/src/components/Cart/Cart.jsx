import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

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
        {/* Header */}

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

        {/* Products */}

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

        {/* Footer */}

        {cart.length > 0 && (
          <div className="cart-footer">

            <div className="delivery-message">
              🚚 Free Delivery on Orders Above ₹999
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
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
            >
              PROCEED TO CHECKOUT
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