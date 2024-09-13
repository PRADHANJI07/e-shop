import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Home from './Home';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import CategoriesList from './components/CategoriesList';
import CategoryProducts from './components/CategoryProducts';
import CartPage from './components/CartPage';
import Loader from './components/Loader';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check localStorage for token and email on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');

    if (token && email) {
      setUserEmail(email);
      setIsLoggedIn(true);
    }

    // Simulate some delay for loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home
            userEmail={userEmail}
            isLoggedIn={isLoggedIn}
            setUserEmail={setUserEmail}
            setIsLoggedIn={setIsLoggedIn}
          />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signin"
          element={<Signin setUserEmail={setUserEmail} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn && userEmail === "adminuser@example.com"
            ? <Dashboard />
            : <Signin setUserEmail={setUserEmail} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/category-list" element={<CategoriesList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
