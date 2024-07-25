import React from 'react';

const OrderBy: React.FC = () => {
  return (
    <div className="d-flex align-items-center">
      <select className="form-select" aria-label="Ordenar por">
        <option value="best-reviews">Mejores reviews</option>
        <option value="price-asc">Precio ascendente</option>
        <option value="price-desc">Precio descendente</option>
      </select>
    </div>
  );
};
export default OrderBy;