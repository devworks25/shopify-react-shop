import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import {
  createCart,
  addToCart,
} from "./services/cartService";

function App() {
  const [cartId, setCartId] = useState(
    localStorage.getItem("shopify_cart_id")
  );

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cartId) {
      localStorage.setItem(
        "shopify_cart_id",
        cartId
      );
    }
  }, [cartId]);

  const handleAddToCart = async (variantId) => {
    try {
      let cart;

      if (!cartId) {
        cart = await createCart(
          variantId,
          1
        );

        setCartId(cart.id);
      } else {
        cart = await addToCart(
          cartId,
          variantId,
          1
        );
      }

      setCartCount(cart.totalQuantity);

    } catch (error) {
      console.error(
        "Add to cart failed:",
        error
      );
    }
  };

  const handleCartUpdated = (cart) => {
    setCartCount(cart?.totalQuantity || 0);
  };

  return (
    <BrowserRouter>

      <Header cartCount={cartCount} />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/products"
          element={
            <ProductsPage
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/products/:handle"
          element={
            <ProductDetailsPage
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartId={cartId}
              onCartUpdated={handleCartUpdated}
            />
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;