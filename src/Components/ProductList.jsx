import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

//Este componente muestra una lista de productos obtenidos desde la API de Mercado Libre.