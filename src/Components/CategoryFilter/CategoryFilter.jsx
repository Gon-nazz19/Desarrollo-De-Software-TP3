import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryFilter.css';

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
    <div className="category-filter"> {/* Clase para el contenedor */}
      <label htmlFor="category" className="category-label">Filtrar por categorías:</label> {/* Clase para la etiqueta */}
      <select id="category" className="category-select" onChange={(e) => onCategorySelect(e.target.value)}>
        <option value="">Categorías</option>
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
