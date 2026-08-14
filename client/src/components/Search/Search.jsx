import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

import products from "../../data/products";
import "./Search.css";

const popularSearches = [
  "Saree",
  "Kurti",
  "Jeans",
  "Shirt",
  "Kids Wear",
];

function Search({ onClose }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredProducts =
    search.trim().length > 0
      ? products
          .filter((product) =>
            `${product.name} ${product.category || ""}`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .slice(0, 5)
      : [];

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Search shortcut /
  useEffect(() => {
    const handleSlash = (event) => {
      if (
        event.key === "/" &&
        document.activeElement?.tagName !== "INPUT"
      ) {
        event.preventDefault();

        document
          .querySelector(".premium-search-input")
          ?.focus();
      }
    };

    document.addEventListener("keydown", handleSlash);

    return () => {
      document.removeEventListener("keydown", handleSlash);
    };
  }, []);

  const handleProductClick = (id) => {
    onClose?.();
    navigate(`/product/${id}`);
  };

  const handlePopularClick = (item) => {
    setSearch(item);
  };

  return (
    <div className="premium-search-overlay">

      {/* Background */}

      <div
        className="premium-search-backdrop"
        onClick={onClose}
      ></div>


      {/* Search Panel */}

      <div className="premium-search-panel">

        {/* Top Header */}

        <div className="premium-search-top">

          <button
            className="premium-search-back"
            onClick={onClose}
            aria-label="Close search"
          >
            <FaArrowLeft />
          </button>

          <div className="premium-search-brand">
            MUKTA
            <span>FANCY STORE</span>
          </div>

          <button
            className="premium-search-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <FaTimes />
          </button>

        </div>


        {/* Search Box */}

        <div className="premium-search-box">

          <FaSearch className="premium-search-icon" />

          <input
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sarees, kurtis, jeans..."
            className="premium-search-input"
          />

          {search.length > 0 && (
            <button
              className="premium-search-clear"
              onClick={() => setSearch("")}
            >
              <FaTimes />
            </button>
          )}

          <span className="premium-search-shortcut">
            /
          </span>

        </div>


        {/* Search Content */}

        <div className="premium-search-content">

          {search.trim().length === 0 ? (

            <>
              {/* Popular */}

              <div className="premium-search-heading">

                <span></span>

                <h3>
                  POPULAR SEARCHES
                </h3>

                <span></span>

              </div>


              <div className="premium-search-tags">

                {popularSearches.map((item) => (

                  <button
                    key={item}
                    onClick={() =>
                      handlePopularClick(item)
                    }
                    className="premium-search-tag"
                  >

                    <span>{item}</span>

                    <FaArrowRight />

                  </button>

                ))}

              </div>


              {/* Premium message */}

              <div className="premium-search-message">

                <p className="premium-search-label">
                  MUKTA COLLECTION
                </p>

                <h2>
                  Find Your
                  <br />
                  Perfect Style.
                </h2>

                <p>
                  Discover carefully selected fashion,
                  festive wear and everyday essentials.
                </p>

              </div>

            </>

          ) : (

            <>
              {/* Search Results */}

              <div className="premium-results-header">

                <span>
                  {filteredProducts.length}
                </span>

                {filteredProducts.length === 1
                  ? " PRODUCT FOUND"
                  : " PRODUCTS FOUND"}

              </div>


              {filteredProducts.length > 0 ? (

                <div className="premium-results-list">

                  {filteredProducts.map((product) => (

                    <button
                      key={product.id}
                      className="premium-result-card"
                      onClick={() =>
                        handleProductClick(product.id)
                      }
                    >

                      <div className="premium-result-image">

                        <img
                          src={product.image}
                          alt={product.name}
                        />

                      </div>


                      <div className="premium-result-info">

                        <span className="premium-result-category">
                          {product.category ||
                            "MUKTA COLLECTION"}
                        </span>

                        <h3>
                          {product.name}
                        </h3>

                        <div className="premium-result-price">

                          <strong>
                            ₹{product.price}
                          </strong>

                          {product.oldPrice && (
                            <del>
                              ₹{product.oldPrice}
                            </del>
                          )}

                        </div>

                      </div>


                      <div className="premium-result-arrow">

                        <FaArrowRight />

                      </div>

                    </button>

                  ))}

                </div>

              ) : (

                <div className="premium-no-results">

                  <div>
                    <FaSearch />
                  </div>

                  <h3>
                    No products found
                  </h3>

                  <p>
                    Try searching for saree, kurti,
                    jeans or shirt.
                  </p>

                </div>

              )}

            </>

          )}

        </div>


        {/* Bottom */}

        <div className="premium-search-footer">

          <span>
            Press
            <kbd>ESC</kbd>
            to close
          </span>

          <span>
            <kbd>/</kbd>
            to search
          </span>

          <span>
            MUKTA FANCY STORE
          </span>

        </div>

      </div>

    </div>
  );
}

export default Search;

//