import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductList from '../../Components/ProductList/ProductList';
import CategoryFilter from '../../Components/CategoryFilter/CategoryFilter';
import './HomePage.css'; 

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
    <div className="homepage-container">
      <h1>Buscar productos</h1>
      <div className="filter-search-container"> 
        <CategoryFilter onCategorySelect={setSelectedCategory} />
        <SearchBar onSearch={searchProducts} />
      </div>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;