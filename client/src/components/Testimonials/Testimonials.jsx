import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Panisagar",
    review:
      "Amazing quality and beautiful collection. I loved the service and will definitely shop again.",
  },
  {
    id: 2,
    name: "Anjali Das",
    location: "Dharmanagar",
    review:
      "The dresses are exactly as shown. Very affordable and premium quality.",
  },
  {
    id: 3,
    name: "Riya Deb",
    location: "Kailashahar",
    review:
      "Fast WhatsApp ordering and excellent customer support. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <p className="testimonial-subtitle">
          CUSTOMER LOVE
        </p>

        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review.id}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review-text">
                "{review.review}"
              </p>

              <div className="review-user">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;