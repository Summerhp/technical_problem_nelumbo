import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/products.tsx';
import ProductDetail from './components/productdetail.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/moto/:id" element={<ProductDetail />} />
        <Route path="/celular/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
