import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.pictures[0].url} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/">Back to search</Link>
    </div>
  );
}

export default ProductPage;
//Aquí se obtiene el detalle de un producto utilizando su id y se muestran sus detalles.