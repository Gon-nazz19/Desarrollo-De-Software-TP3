import React from 'react';
import { useCart } from '../../Components/CartContext/CartContext';

function CartPage() {
  const { cart, dispatch } = useCart();

  // Calcular el precio total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <button onClick={() => handleRemove(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Precio Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;

