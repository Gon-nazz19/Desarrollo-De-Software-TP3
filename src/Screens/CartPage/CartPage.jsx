import React from 'react';
import { useCart } from '../../Components/CartContext/CartContext';
import './CartPage.css'; 

function CartPage() {
  const { cart, dispatch } = useCart();

  // Calcular el precio total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} className="product-image" />
                <div className="product-details">
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                </div>
                <button className="remove-button" onClick={() => handleRemove(product.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumen de compra</h2>
            <p>Productos: {cart.length}</p>
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

