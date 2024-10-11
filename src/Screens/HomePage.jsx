import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import ProductList from '../Components/ProductList';
import CategoryFilter from '../Components/CategoryFilter';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const searchProducts = async (query) => {
    try {
      let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await axios.get(url);
      setProducts(response.data.results);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  return (
    <div>
      <h1>Buscar productos</h1>
      <CategoryFilter onCategorySelect={setSelectedCategory} />
      <SearchBar onSearch={searchProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;


//Aquí se muestran la barra de búsqueda y los resultados de productos obtenidos desde la API.