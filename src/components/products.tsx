import React, { useState, useEffect } from 'react';
import OrderBy from './orderby.tsx';
import SearchBar from './searchbar.tsx';
import Filters from './filters.tsx';
import ProductGrid from './productgrid.tsx';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';

interface Celular {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  favorito: boolean;
  informacion: {
    fabricante: string;
    peso: string;
    dimensiones: string;
    pais_de_origen: string;
    numero_de_modelo: string;
    color: string;
    material: string;
    cantidad_de_piezas: number;
    caracteristicas_especiales: string;
    componentes_incluidos: string;
  };
}

interface Moto {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  favorito: boolean;
  informacion: {
    motor: string;
    potencia: string;
    peso: string;
    transmision: string;
  };
}

interface Product {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  imagen: string;
}

interface Brand {
  id: number;
  name: string;
}

const normalizeProduct = (product: Celular | Moto): Product => ({ ...product, });

const getBrandsFromMotos = (): Brand[] => {
  const products: Moto[] = motos as Moto[];
  const brands = products.map(product => product.marca);
  return Array.from(new Set(brands));
};

const getBrandsFromCelulares = (): Brand[] => {
  const products: Celular[] = celulares as Celular[];
  const brands = products.map(product => product.marca);
  return Array.from(new Set(brands));
};

const getAllBrands = (): Brand[] => {
  const brandsFromJSON1 = getBrandsFromMotos();
  const brandsFromJSON2 = getBrandsFromCelulares();
  return [...brandsFromJSON1, ...brandsFromJSON2];
};

const Products: React.FC = () => {
  const allBrands = getAllBrands();
  const allProducts: Product[] = [
    ...celulares.map(normalizeProduct),
    ...motos.map(normalizeProduct)
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all-categories');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedCategory !== 'all-categories') {
      filtered = filtered.filter(product =>
        selectedCategory === 'celulares'
          ? celulares.some(celular => celular.id === product.id)
          : motos.some(moto => moto.id === product.id)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-align-content-start">
            <div className="col">
              Ordenar por:
            </div>
            <div className="col d-flex align-items-center">
              <OrderBy />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <SearchBar
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSearch={setSearchTerm}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Filters brands={allBrands} />
        </div>
        <div className="col-md-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
