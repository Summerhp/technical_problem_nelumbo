import React from 'react';
import { useParams } from 'react-router-dom';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';
import ProductGrid from './productgrid.tsx';

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    informacion: {
        fabricante?: string;
        peso?: string;
        dimensiones?: string;
        pais_de_origen?: string;
        numero_de_modelo?: string;
        color?: string;
        material?: string;
        cantidad_de_piezas?: number;
        caracteristicas_especiales?: string;
        componentes_incluidos?: string;
        motor?: string;
        potencia?: string;
        transmision?: string;
    };
}
const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const normalizeProduct = (product: any): Product => ({ ...product });
    let allProducts: Product[] = [];
    let product: Product | undefined;
    if (id.startsWith('C')) {
        allProducts = celulares.map(normalizeProduct);
        product = allProducts.find((prod) => prod.id === id);
    } else {
        allProducts = motos.map(normalizeProduct);
        product = allProducts.find((prod) => prod.id === id);
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    const relatedProducts = allProducts.filter((prod) => prod.id !== id);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.imagen} alt={product.nombre} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>{product.nombre}</h1>
                        <h2>{product.marca}</h2>
                        <h1><strong>Precio:</strong> ${product.precio.toFixed(2)}</h1>
                        <p><strong>Reviews:</strong> {product.reviews.toFixed(1)} / 5</p>
                        <h3>Información detallada</h3>
                        <ul>
                            {product.informacion.fabricante && <li><strong>Fabricante:</strong> {product.informacion.fabricante}</li>}
                            {product.informacion.peso && <li><strong>Peso:</strong> {product.informacion.peso}</li>}
                            {product.informacion.dimensiones && <li><strong>Dimensiones:</strong> {product.informacion.dimensiones}</li>}
                            {product.informacion.pais_de_origen && <li><strong>País de Origen:</strong> {product.informacion.pais_de_origen}</li>}
                            {product.informacion.numero_de_modelo && <li><strong>Número de Modelo:</strong> {product.informacion.numero_de_modelo}</li>}
                            {product.informacion.color && <li><strong>Color:</strong> {product.informacion.color}</li>}
                            {product.informacion.material && <li><strong>Material:</strong> {product.informacion.material}</li>}
                            {product.informacion.cantidad_de_piezas && <li><strong>Cantidad de Piezas:</strong> {product.informacion.cantidad_de_piezas}</li>}
                            {product.informacion.caracteristicas_especiales && <li><strong>Características Especiales:</strong> {product.informacion.caracteristicas_especiales}</li>}
                            {product.informacion.componentes_incluidos && <li><strong>Componentes Incluidos:</strong> {product.informacion.componentes_incluidos}</li>}
                            {product.informacion.motor && <li><strong>Motor:</strong> {product.informacion.motor}</li>}
                            {product.informacion.potencia && <li><strong>Potencia:</strong> {product.informacion.potencia}</li>}
                            {product.informacion.transmision && <li><strong>Transmisión:</strong> {product.informacion.transmision}</li>}
                        </ul>
                    </div>
                </div>
                <div className="text-end">
                    <a href="#" className="btn btn-warning">LO QUIERO A CRÉDITO</a>
                </div>
            </div>
            <br />
            <br />
            <h5 className='text-center'>Productos relacionados</h5>
            <ProductGrid products={relatedProducts} />
        </>
    );
};
export default ProductDetail;
