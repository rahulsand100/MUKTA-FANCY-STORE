import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Women",
      subtitle: "Elegant styles & festive wear",
      image: "/women.jpg",
      path: "women",
    },
    {
      id: 2,
      name: "Men",
      subtitle: "Modern essentials & smart looks",
      image: "/men.jpg",
      path: "men",
    },
    {
      id: 3,
      name: "Kids",
      subtitle: "Comfortable styles for little ones",
      image: "/kids.jpg",
      path: "kids",
    },
    {
      id: 4,
      name: "Gift Items",
      subtitle: "Thoughtful gifts for every occasion",
      image: "/gift.jpg",
      path: "gift",
    },
  ];

  const handleCategoryClick = (path) => {
    navigate(`/category/${path}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="categories-section">

      {/* HEADER */}
      <div className="categories-heading">

        <div className="categories-eyebrow">
          <span></span>
          MUKTA COLLECTIONS
          <span></span>
        </div>

        <h2>
          Shop By <em>Category</em>
        </h2>

        <p>
          Discover carefully selected fashion for every
          occasion, every mood and every moment.
        </p>

      </div>


      {/* CATEGORY GRID */}
      <div className="categories-grid">

        {categories.map((category) => (

          <article
            className="category-card"
            key={category.id}
            onClick={() =>
              handleCategoryClick(category.path)
            }
          >

            {/* IMAGE */}
            <div className="category-image-wrapper">

              <img
                src={category.image}
                alt={`${category.name} collection`}
                className="category-image"
              />

              <div className="category-image-overlay"></div>

              {/* TOP LABEL */}
              <div className="category-number">
                0{category.id}
              </div>

            </div>


            {/* CONTENT */}
            <div className="category-content">

              <div>
                <p className="category-small-text">
                  COLLECTION
                </p>

                <h3>
                  {category.name}
                </h3>

                <p className="category-description">
                  {category.subtitle}
                </p>
              </div>


              {/* ARROW */}
              <button
                type="button"
                className="category-arrow"
                onClick={(event) => {
                  event.stopPropagation();
                  handleCategoryClick(category.path);
                }}
                aria-label={`Shop ${category.name}`}
              >
                <FaArrowRight />
              </button>

            </div>

          </article>

        ))}

      </div>


      {/* BOTTOM MESSAGE */}
      <div className="categories-bottom">

        <span>
          CURATED FOR YOU
        </span>

        <p>
          Discover your next favourite look.
        </p>

      </div>

    </section>
  );
}

export default Categories;