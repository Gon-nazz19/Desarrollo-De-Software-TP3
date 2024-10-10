import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);

  const searchProducts = async (query) => {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    setProducts(response.data.results);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <SearchBar onSearch={searchProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;

//Aquí se muestran la barra de búsqueda y los resultados de productos obtenidos desde la API.