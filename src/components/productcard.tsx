import React, { useState } from 'react';
import ProductModal from './productmodal.tsx';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  imagen: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, marca, precio, reviews, imagen }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="card mb-4" style={{ width: '15rem', height: 'auto' }}>
        <Link to={`/product/${id}`}>
          <img src={imagen} className="card-img-top" alt={nombre} style={{ height: '12rem', objectFit: 'cover' }} />
        </Link>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="me-2">
              <Link to={`/product/${id}`} className="text-decoration-none text-dark">
                <h5 className="card-title mb-1">{nombre}</h5>
              </Link>
              <p className="card-text mb-1">
                <strong>Reviews:</strong> {reviews.toFixed(1)} / 5
              </p>
            </div>
            <div className="text-end">
              <p className="card-text mb-0" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${precio.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-end">
            <button className="btn btn-warning" onClick={handleShow}>Lo Quiero!</button>
          </div>
        </div>
      </div>

      <ProductModal show={showModal} handleClose={handleClose} product={{ nombre, precio, imagen }} />
    </>
  );
};

export default ProductCard;
