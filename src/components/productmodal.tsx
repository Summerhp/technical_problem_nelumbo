import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ProductModalProps {
  show: boolean;
  handleClose: () => void;
  product: {
    nombre: string;
    precio: number;
    imagen: string;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compra a Crédito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={product.imagen} alt={product.nombre} className="img-fluid mb-3" />
          <h5>{product.nombre}</h5>
          <p>Precio: ${product.precio.toFixed(2)}</p>
        </div>
        <div className="text-center my-3">
          <p>Te vas a llevar este producto por solo</p>
          <h4><strong>$120 p/semana!</strong></h4>
        </div>
        <div className="d-grid gap-2">
          <Button variant="warning" size="lg">COMPRAR A CRÉDITO</Button>
          <Button variant="link">Comprar a contado</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
