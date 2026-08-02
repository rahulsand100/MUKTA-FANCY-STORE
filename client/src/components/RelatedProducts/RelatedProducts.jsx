import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import "./RelatedProducts.css";

function RelatedProducts({ currentProduct }) {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="related-products">

      <h2>You May Also Like</h2>

      <div className="related-grid">

        {relatedProducts.map((item) => (

          <div
            key={item.id}
            className="related-card"
            onClick={() => {
              navigate(`/product/${item.id}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >

            {item.discount && (
              <span className="related-discount">
                {item.discount}
              </span>
            )}

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p className="related-price">
              ₹{item.price}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;