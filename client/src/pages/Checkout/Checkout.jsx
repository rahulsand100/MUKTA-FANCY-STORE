import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOrder = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      navigate("/");
      return;
    }

    alert("Order placed successfully! 🎉");
  };

  return (
    <main className="checkout-page">
      <div className="checkout-title">
        <p>MUKTA FANCY STORE</p>
        <h1>Secure Checkout</h1>
        <span>Complete your order securely.</span>
      </div>

      <form className="checkout-layout" onSubmit={handleOrder}>
        <section className="checkout-form">
          <h2>Delivery Details</h2>

          <div className="checkout-input-grid">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="PIN Code"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="address"
            placeholder="House No, Street, Area"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className="checkout-input-grid">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="payment-section">
            <h2>Payment Method</h2>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />

              <span>
                <strong>Cash on Delivery</strong>
                <small>Pay when your order arrives</small>
              </span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />

              <span>
                <strong>UPI Payment</strong>
                <small>Google Pay, PhonePe, Paytm</small>
              </span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />

              <span>
                <strong>Credit / Debit Card</strong>
                <small>Secure card payment</small>
              </span>
            </label>
          </div>

          <button type="submit" className="place-order-button">
            PLACE ORDER
          </button>
        </section>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="summary-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>
                ₹
                {(item.price * item.quantity).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          ))}

          <div className="summary-line">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>

          <div className="summary-line">
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <p className="secure-text">
            🔒 Secure checkout • Premium shopping experience
          </p>
        </aside>
      </form>
    </main>
  );
}

export default Checkout;