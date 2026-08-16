import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMoneyBillWave,
  FaMobileAlt,
  FaCreditCard,
  FaLock,
  FaTruck,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

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

    const orderId = `MUKTA-${Date.now()
      .toString()
      .slice(-8)}`;

    const orderItems = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Size: ${item.selectedSize || "N/A"}
Quantity: ${item.quantity}
Price: ₹${item.price}
Total: ₹${item.price * item.quantity}`
      )
      .join("\n\n");

    const message = `
🛍️ *NEW ORDER - MUKTA FANCY STORE*

🆔 Order ID: ${orderId}

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

📍 Address:
${formData.address}

${formData.city}, ${formData.state}

PIN: ${formData.pincode}

━━━━━━━━━━━━━━━━━━

${orderItems}

━━━━━━━━━━━━━━━━━━

💰 Grand Total: ₹${cartTotal}

💳 Payment: ${paymentMethod.toUpperCase()}
`;

    const phoneNumber = "919863139043";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const paymentOptions = [
    {
      id: "cod",
      icon: <FaMoneyBillWave />,
      title: "Cash on Delivery",
      description: "Pay when your order arrives",
      badge: "POPULAR",
    },
    {
      id: "upi",
      icon: <FaMobileAlt />,
      title: "UPI Payment",
      description: "Google Pay • PhonePe • Paytm",
      badge: "INSTANT",
    },
    {
      id: "card",
      icon: <FaCreditCard />,
      title: "Credit / Debit Card",
      description: "Secure card payment",
      badge: "SECURE",
    },
  ];

  return (
    <main className="checkout-page">

      {/* =========================
          CHECKOUT HEADER
      ========================== */}

      <div className="checkout-header">

        <button
          className="checkout-back"
          type="button"
          onClick={() => navigate("/")}
        >
          ← Back to Shopping
        </button>

        <div className="checkout-brand">
          <span>MUKTA</span>
          <strong>FANCY STORE</strong>
        </div>

        <div className="checkout-security">
          <FaLock />
          <span>SECURE CHECKOUT</span>
        </div>

      </div>


      {/* =========================
          PAGE TITLE
      ========================== */}

      <div className="checkout-heading">

        <span>FINAL STEP</span>

        <h1>Complete Your Order</h1>

        <p>
          Enter your delivery details and choose your
          preferred payment method.
        </p>

      </div>


      {/* =========================
          CHECKOUT FORM
      ========================== */}

      <form
        className="checkout-layout"
        onSubmit={handleOrder}
      >

        {/* LEFT SIDE */}

        <section className="checkout-left">

          {/* DELIVERY CARD */}

          <div className="checkout-card">

            <div className="checkout-card-header">

              <div className="checkout-number">
                01
              </div>

              <div>
                <h2>Delivery Details</h2>

                <p>
                  Where should we deliver your order?
                </p>
              </div>

            </div>


            <div className="checkout-input-grid">

              <div className="checkout-field">

                <label>
                  <FaUser />
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label>
                  <FaPhoneAlt />
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label>
                  <FaEnvelope />
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label>
                  <FaMapMarkerAlt />
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="checkout-field checkout-full-field">

              <label>
                <FaMapMarkerAlt />
                Complete Address
              </label>

              <textarea
                name="address"
                placeholder="House number, street, area, landmark..."
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>


            <div className="checkout-input-grid">

              <div className="checkout-field">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label>
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>


          {/* PAYMENT CARD */}

          <div className="checkout-card payment-card">

            <div className="checkout-card-header">

              <div className="checkout-number">
                02
              </div>

              <div>
                <h2>Payment Method</h2>

                <p>
                  Choose how you'd like to pay
                </p>
              </div>

            </div>


            <div className="payment-options">

              {paymentOptions.map((option) => {

                const selected =
                  paymentMethod === option.id;

                return (
                  <label
                    key={option.id}
                    className={`payment-option ${
                      selected
                        ? "payment-option-active"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value={option.id}
                      checked={selected}
                      onChange={() =>
                        setPaymentMethod(option.id)
                      }
                    />


                    <div className="payment-radio">

                      {selected && (
                        <FaCheckCircle />
                      )}

                    </div>


                    <div className="payment-icon">

                      {option.icon}

                    </div>


                    <div className="payment-content">

                      <div className="payment-title-row">

                        <h3>
                          {option.title}
                        </h3>

                        <span>
                          {option.badge}
                        </span>

                      </div>

                      <p>
                        {option.description}
                      </p>

                    </div>


                    <FaShieldAlt className="payment-security-icon" />

                  </label>
                );
              })}

            </div>


            <div className="payment-note">

              <FaLock />

              <span>
                Your payment information is protected
                with secure encryption.
              </span>

            </div>

          </div>


          {/* PLACE ORDER */}

          <button
            type="submit"
            className="place-order-button"
          >

            <span>
              PLACE ORDER
            </span>

            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>

          </button>


          <p className="order-note">
            By placing your order, you agree to our
            terms and shopping policies.
          </p>

        </section>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <aside className="order-summary">

          <div className="summary-top">

            <div>

              <span>YOUR BAG</span>

              <h2>Order Summary</h2>

            </div>

            <div className="summary-count">
              {cart.length}{" "}
              {cart.length === 1
                ? "ITEM"
                : "ITEMS"}
            </div>

          </div>


          {/* PRODUCTS */}

          <div className="summary-products">

            {cart.map((item) => (

              <div
                className="summary-product"
                key={item.id}
              >

                <div className="summary-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>
                    {item.quantity}
                  </span>

                </div>


                <div className="summary-product-info">

                  <h3>
                    {item.name}
                  </h3>

                  {item.selectedSize && (
                    <p>
                      Size:{" "}
                      {item.selectedSize}
                    </p>
                  )}

                  <p>
                    Qty: {item.quantity}
                  </p>

                </div>


                <strong>
                  ₹
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString("en-IN")}
                </strong>

              </div>

            ))}

          </div>


          {/* PRICE DETAILS */}

          <div className="summary-price">

            <div>
              <span>Subtotal</span>

              <strong>
                ₹
                {cartTotal.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>


            <div>

              <span>Delivery</span>

              <strong className="free">
                FREE
              </strong>

            </div>


            <div>

              <span>Discount</span>

              <strong>
                ₹0
              </strong>

            </div>

          </div>


          <div className="summary-total">

            <span>Total Amount</span>

            <strong>
              ₹
              {cartTotal.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>


          {/* BENEFITS */}

          <div className="checkout-benefits">

            <div>

              <FaTruck />

              <span>
                <strong>Fast Delivery</strong>
                <small>
                  Dispatch within 24 hours
                </small>
              </span>

            </div>


            <div>

              <FaShieldAlt />

              <span>
                <strong>Secure Shopping</strong>
                <small>
                  Your details are protected
                </small>
              </span>

            </div>


            <div>

              <FaMoneyBillWave />

              <span>
                <strong>Easy Payment</strong>
                <small>
                  Multiple payment options
                </small>
              </span>

            </div>

          </div>


          <div className="summary-trust">

            <FaLock />

            <span>
              Secure Checkout •
              Mukta Fancy Store
            </span>

          </div>

        </aside>

      </form>

    </main>
  );
}

export default Checkout;