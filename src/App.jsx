import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import routing
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'; // ✅ Import ProductDetails


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ Handles dynamic product pages */}
      </Routes>
      
    </Router>
  );
}

export default App;