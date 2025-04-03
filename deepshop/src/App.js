import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import MainNav from "./Component/Navbar";
import StoreProducts from "./Component/ProductList";
import ProductView from "./Component/ProductDetail";

// Pages
import StoreHome from "./pages/HomePage";
import StoreAbout from "./pages/AboutPage";
import StoreContact from "./pages/ContactPage";
import UserLogin from "./pages/LoginPage";
import UserRegister from "./pages/RegisterPage";
import StoreProductsPage from "./pages/ProductPage";
import ProductViewPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <Router>
      <MainNav />

      <Routes>
        <Route path="/" element={<StoreHome />} />
        <Route path="/store/about" element={<StoreAbout />} />
        <Route path="/store/contact" element={<StoreContact />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/store/catalog" element={<StoreProductsPage />} />
        <Route path="/store/product/:id" element={<ProductViewPage />} />
        <Route path="/user/register" element={<UserRegister />} />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="text-center p-5">
              <h1>Oops! Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
