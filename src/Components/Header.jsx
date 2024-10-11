import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const { cart } = useCart();

  return (
    <header>
      <h1>Mi Tienda</h1>
      {/* Icono del carrito con cantidad de productos */}
      <Link to="/cart">🛒 Carrito ({cart.length})</Link>
    </header>
  );
}

export default Header;
