import React from 'react';
import ProductCard from './productcard';

interface Product {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  imagen: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="col">
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard
              id={product.id}
              nombre={product.nombre}
              marca={product.marca}
              precio={product.precio}
              reviews={product.reviews}
              imagen={product.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
