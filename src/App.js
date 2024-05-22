import React from 'react';
import Home from './pages//Home';
import Suppliers from './pages//Suppliers';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div id="main-container">
            <Navbar/>

            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path ="/Categories" element={<Categories />} />
                <Route path = "/Suppliers" element={<Suppliers />}/> 
            </Routes>

        </div>
    );
}

export default App;
