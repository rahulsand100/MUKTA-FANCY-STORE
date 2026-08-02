import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout/Checkout";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

function App() {
  return (
    <>
          <Navbar />

  <Cart />

  <Wishlist />

  <div className="pt-36">
    <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/product/:id"
    element={<ProductDetails />}
  />

  <Route
    path="/checkout"
    element={<Checkout />}
  />
</Routes>
  </div>

  
  <Footer />
<FloatingWhatsApp />
</>
    );
  }

  export default App;