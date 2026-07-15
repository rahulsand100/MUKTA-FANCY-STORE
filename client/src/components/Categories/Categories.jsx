import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Women",
      image: "/women.jpg",
      path: "women",
    },
    {
      id: 2,
      name: "Men",
      image: "/men.jpg",
      path: "men",
    },
    {
      id: 3,
      name: "Kids",
      image: "/kids.jpg",
      path: "kids",
    },
    {
      id: 4,
      name: "Gift Items",
      image: "/gift.jpg",
      path: "gift",
    },
  ];

  return (
    <section className="categories-section">
      <div className="categories-heading">
        <p>MUKTA COLLECTIONS</p>

        <h2>Shop By Category</h2>

        <span>
          Discover our carefully selected premium collections.
        </span>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
            onClick={() =>
              navigate(`/category/${category.path}`)
            }
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <h3>{category.name}</h3>

              <button type="button">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;