import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  const { cart } = useCart();

  return (
    <header>
      <h1>elegir nombre</h1>
      {/* Icono del carrito con cantidad de productos */}
      <Link to="/cart">🛒 Carrito ({cart.length})</Link>
    </header>
  );
}

export default Header;

//Encabezado