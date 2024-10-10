import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductItem;

//Este componente representa un solo producto en la lista con un botón para ver detalles.