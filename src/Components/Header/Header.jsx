import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Header.css'

function Header() {
  const { cart } = useCart();

  return (
    <header>
        <div className="logo-container">
          <img id='logo de la empresa' src={logo} alt="Logo de la empresa"></img>
        </div>
      <nav>
        {/* Ícono de una casita que redirige al catálogo */}
        <Link to="/">
          <button>🏠</button>
        </Link>
        {/* Icono del carrito con cantidad de productos */}
        <Link to="/cart">
          🛒 Carrito ({cart.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;

//Encabezado