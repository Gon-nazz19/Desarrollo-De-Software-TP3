import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductAttributes from '../Components/ProductAttributes';
import { useCart } from '../Components/CartContext';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();  // Para agregar productos al carrito

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });  // Añadir el producto al carrito
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.pictures[0].url} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>

      <ProductAttributes attributes={product.attributes} />

      <button onClick={handleAddToCart}>Comprar</button>

      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default ProductPage;

//Aquí se obtiene el detalle de un producto utilizando su id y se muestran sus detalles.