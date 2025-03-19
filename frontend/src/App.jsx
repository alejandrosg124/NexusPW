import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import DetalleProducto from './pages/DetalleProducto';

function App() {
    return (
        <Router>
            <Navbar />
            
            <div> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>Página no encontrada</h1>} />
                    <Route path="producto/:id" element={<DetalleProducto/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
