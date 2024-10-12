import './App.css';
import HomePage from './Screens/HomePage/HomePage';
import ProductPage from './Screens/ProductPage/ProductPage';
import CartPage from './Screens/CartPage/CartPage';
import Header from './Components/Header/Header';
import { CartProvider } from './Components/CartContext/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

