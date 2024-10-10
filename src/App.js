import './App.css';

function App() {
  return (
    <div className="App">
      <Router className='Bar-Nav'>
          <NavBar/>
          <Routes>

            <Route 
            className='elemento'
            path='/ListaDeProductos'
            element={<ListaDeProductos/> }
            />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
