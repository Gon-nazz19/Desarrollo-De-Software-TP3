import React from 'react';
import { Link } from 'react-router-dom';
import"./ProductItem.css";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalles</Link>
    </div>
  );
}

export default ProductItem;

//Este componente representa un solo producto en la lista con un botón para ver detalles.