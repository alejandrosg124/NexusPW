import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Navbar />
            
            <div> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>Página no encontrada</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
