import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUsuario from './components/RegisterUsuario';
import Confirmacion from './components/ConfirmarEmail';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterUsuario />} />
        <Route path="/confirmar/:id" element={<Confirmacion />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
