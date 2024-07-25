import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.tsx';
import Footer from './components/footer.tsx';
import Products from './components/products.tsx';
import ProductDetail from './components/productdetail.tsx'; // Importa el componente de detalle del producto

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} /> {/* Ruta para detalles del producto */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
