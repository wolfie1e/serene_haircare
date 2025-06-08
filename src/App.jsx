
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; 
import Ing from './components/Ing';     
import Abt from './components/Abt';     
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './components/LoginPopup/LoginPopup'; 
import Footer from './components/Footer/Footer';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };
    const removeFromCart = (itemId) => {
        //makes sure we don't go negative numbers
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    };
    // gives the total number of items in the cart for the navbar dot
    const getTotalCartItems = () => {
        let totalItemCount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItemCount += cartItems[item] ;
            }
        }
        return totalItemCount;
    }

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} totalCartItems={getTotalCartItems()} />
               
                <Routes>
                    <Route 
                        path='/' 
                        element={<Home 
                            cartItems={cartItems} 
                            addToCart={addToCart} 
                            removeFromCart={removeFromCart} 
                        />} 
                    />
                    <Route path='/cart' element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
                    <Route path='/ing' element={<Ing />} />
                    <Route path='/abt' element={<Abt />} />
                </Routes>
                <Footer/>
            </div>
        </>
    );
};

export default App;