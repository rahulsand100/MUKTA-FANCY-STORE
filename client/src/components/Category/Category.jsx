import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import "./Category.css";

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="category-page">
      <div className="category-header">
        <h1>{category} Collection</h1>
        <p>Premium Fashion by Mukta Fancy Store</p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <h2>No Products Found</h2>

          <button onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      ) : (
        <div className="category-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="category-card"
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
            >
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button>View Product</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Category;