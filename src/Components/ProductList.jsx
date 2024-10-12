import React from 'react';
import ProductItem from './ProductItem';
import '../Styles/ProductList.css';

function ProductList({ products }) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-list__item">
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
//Este componente muestra una lista de productos obtenidos desde la API de Mercado Libre.