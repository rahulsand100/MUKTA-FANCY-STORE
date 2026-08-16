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
          .slice(0, 6)
      : [];

  /* =========================================
     ESC KEY
  ========================================= */
  useEffect(() => {
  const handlePopState = () => {
    if (onClose) {
      onClose();
    }
  };

  window.addEventListener("popstate", handlePopState);

  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
}, [onClose]);

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

  /* =========================================
     "/" SEARCH SHORTCUT
  ========================================= */

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

  /* =========================================
     PRODUCT CLICK
  ========================================= */

  const handleProductClick = (id) => {
    onClose?.();
    navigate(`/product/${id}`);
  };

  /* =========================================
     POPULAR SEARCH
  ========================================= */

  const handlePopularClick = (item) => {
    setSearch(item);
  };

  /* =========================================
     BACK BUTTON
  ========================================= */

  const handleBack = () => {
    onClose?.();
  };

  return (
    <div className="premium-search-overlay">

      {/* BACKDROP */}

      <div
        className="premium-search-backdrop"
        onClick={onClose}
      />

      {/* SEARCH PANEL */}

      <div className="premium-search-panel">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="premium-search-top">

          <button
            type="button"
            className="premium-search-back"
            onClick={handleBack}
            aria-label="Back"
          >
            <FaArrowLeft />
            <span>BACK</span>
          </button>

          <div className="premium-search-brand">
            <span className="brand-main">MUKTA</span>
            <span className="brand-sub">
              FANCY STORE
            </span>
          </div>

         <button
  type="button"
  className="premium-search-back"
  onClick={() => {
    if (onClose) {
      onClose();
    }
  }}
  aria-label="Go back"
>
  <FaArrowLeft />
</button>
        </div>


        {/* =====================================
            SEARCH BOX
        ===================================== */}

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
              type="button"
              className="premium-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}

          <div className="premium-search-key">
            <kbd>/</kbd>
          </div>

        </div>


        {/* =====================================
            CONTENT
        ===================================== */}

        <div className="premium-search-content">

          {search.trim().length === 0 ? (

            <>
              {/* =================================
                  POPULAR SEARCHES
              ================================= */}

              <div className="premium-search-heading">

                <div className="heading-line"></div>

                <h3>
                  POPULAR SEARCHES
                </h3>

                <div className="heading-line"></div>

              </div>


              <div className="premium-search-tags">

                {popularSearches.map((item) => (

                  <button
                    type="button"
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


              {/* =================================
                  PREMIUM MESSAGE
              ================================= */}

              <div className="premium-search-message">

                <span className="premium-message-line"></span>

                <p className="premium-search-label">
                  MUKTA COLLECTION
                </p>

                <h2>
                  Find Your
                  <br />
                  <span>Perfect Style.</span>
                </h2>

                <p className="premium-search-description">
                  Discover carefully selected fashion,
                  festive wear and everyday essentials
                  curated for you.
                </p>

              </div>

            </>

          ) : (

            <>
              {/* =================================
                  SEARCH RESULTS HEADER
              ================================= */}

              <div className="premium-results-header">

                <div>
                  <span className="results-count">
                    {filteredProducts.length}
                  </span>

                  <span className="results-text">
                    {filteredProducts.length === 1
                      ? " PRODUCT FOUND"
                      : " PRODUCTS FOUND"}
                  </span>
                </div>

                <button
                  type="button"
                  className="results-clear"
                  onClick={() => setSearch("")}
                >
                  Clear
                </button>

              </div>


              {/* =================================
                  RESULTS
              ================================= */}

              {filteredProducts.length > 0 ? (

                <div className="premium-results-list">

                  {filteredProducts.map((product) => (

                    <button
                      type="button"
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

                  <div className="no-result-icon">
                    <FaSearch />
                  </div>

                  <h3>
                    No products found
                  </h3>

                  <p>
                    Try searching for saree,
                    kurti, jeans or shirt.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearch("")}
                  >
                    EXPLORE COLLECTION
                  </button>

                </div>

              )}

            </>

          )}

        </div>


        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="premium-search-footer">

          <div>
            <kbd>ESC</kbd>
            <span>Close</span>
          </div>

          <div>
            <kbd>/</kbd>
            <span>Search</span>
          </div>

          <div className="footer-brand">
            MUKTA FANCY STORE
          </div>

        </div>

      </div>
    </div>
  );
}

export default Search;