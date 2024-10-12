import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../Components/CartContext/CartContext';
import ProductAttributes from '../../Components/ProductAttributes/ProductAttributes';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos para el carrusel
import { Carousel } from 'react-responsive-carousel';
import './ProductPage.css';

function ProductDetailPage() {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      {/* Carrusel de imágenes */}
      {product.pictures && product.pictures.length > 1 ? (
        <Carousel showArrows={true} autoPlay={false} infiniteLoop={true} className='carousel'>
          {product.pictures.map((picture, index) => (
            <div key={index}>
              <img src={picture.url} alt={`Imagen ${index + 1} de ${product.title}`} className='carouselImage' />
            </div>
          ))}
        </Carousel>
      ) : (
        <img src={product.thumbnail} alt={product.title} />
      )}
      
      <p>Precio: ${product.price}</p>
      <ProductAttributes attributes={product.attributes} />
      <button onClick={handleAddToCart}>Añadir al carrito</button>
      <button onClick={() => window.history.back()}>Volver</button>
    </div>
  );
}

export default ProductDetailPage;

//Aquí se obtiene el detalle de un producto utilizando su id y se muestran sus detalles.