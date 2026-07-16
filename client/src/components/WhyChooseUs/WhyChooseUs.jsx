import {
  FaAward,
  FaWhatsapp,
  FaGift,
  FaShieldAlt,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "Carefully selected fashion with premium quality fabrics.",
  },
  {
    icon: <FaWhatsapp />,
    title: "Easy WhatsApp Ordering",
    desc: "Order directly through WhatsApp with quick confirmation.",
  },
  {
    icon: <FaGift />,
    title: "Latest Collection",
    desc: "New arrivals added regularly for every season and occasion.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Local Store",
    desc: "Serving customers with quality and trust for years.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <p className="why-subtitle">
          WHY CHOOSE US
        </p>

        <h2>
          Experience Premium Shopping
        </h2>

        <p className="why-description">
          At Mukta Fancy Store, we believe shopping should be
          stylish, simple, and trustworthy. Every product is
          selected with care to give you the best quality and value.
        </p>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;