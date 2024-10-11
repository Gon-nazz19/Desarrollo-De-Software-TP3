import React from 'react';
import '../App.css';

function ProductAttributes({ attributes }) {
  return (
    <div className="product-attributes">
      <h2>Características del producto</h2>
      <table>
        <tbody>
          {attributes
            .filter(attr => attr.value_name) // Filtrar los atributos que tienen valor
            .map((attr, index) => (
              <tr key={index}>
                <td>{attr.name}</td>
                <td>{attr.value_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductAttributes;

