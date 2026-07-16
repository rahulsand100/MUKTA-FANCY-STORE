import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
  } = useWishlist();
  console.log("Wishlist Rendered");
  console.log("isWishlistOpen:", isWishlistOpen);

  return (
    <>
      {/* Overlay */}
      {isWishlistOpen && (
        <div
          className="wishlist-overlay"
          onClick={() => setIsWishlistOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`wishlist-drawer ${
          isWishlistOpen ? "wishlist-open" : ""
        }`}
      >
        <div className="wishlist-header">
          <div>
            <p className="wishlist-small-title">
              MUKTA EXCLUSIVE
            </p>

            <h2>My Wishlist</h2>
          </div>

          <button
            className="wishlist-close"
            onClick={() => setIsWishlistOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="wishlist-items">
          {wishlist.length === 0 ? (
            <div className="empty-wishlist">
              <h3>Your wishlist is empty ❤️</h3>

              <p>
                Save your favourite products here.
              </p>

              <button
                onClick={() => setIsWishlistOpen(false)}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                className="wishlist-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="wishlist-item-info">
                  <h3>{item.name}</h3>

                  <p className="wishlist-price">
                    ₹{item.price}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      toggleWishlist(item)
                    }
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;