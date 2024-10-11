import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryFilter({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <label htmlFor="category">Filtrar por categorias:</label>
      <select id="category" onChange={(e) => onCategorySelect(e.target.value)}>
        <option value="">Categorias</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
