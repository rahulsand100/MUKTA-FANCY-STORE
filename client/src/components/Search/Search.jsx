import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";

import products from "../../data/products";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchValue = searchTerm.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    const productName = String(product.name || "").toLowerCase();
    const productCategory = String(product.category || "").toLowerCase();

    return (
      productName.includes(searchValue) ||
      productCategory.includes(searchValue)
    );
  });

  const handleProductClick = (productId) => {
    setSearchTerm("");
    navigate(`/product/${productId}`);
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products, shirts, jeans, kurtis..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm.length > 0 && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setSearchTerm("")}
          >
            <FaTimes />
          </button>
        )}
      </div>

      {searchTerm.trim().length >= 2 && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            <>
              <div className="search-count">
                {filteredProducts.length} Product
                {filteredProducts.length !== 1 ? "s" : ""} Found
              </div>

              {filteredProducts.slice(0, 6).map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className="search-product"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="search-product-info">
                    <span>
                      {product.category || "Mukta Collection"}
                    </span>

                    <h3>{product.name}</h3>

                    <p>₹{product.price}</p>
                  </div>
                </button>
              ))}
            </>
          ) : (
            <div className="search-empty">
              <FaSearch />

              <h3>No products found</h3>

              <p>Try searching shirts, jeans or kurtis.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;