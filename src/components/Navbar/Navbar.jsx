

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = ({ setShowLogin, totalCartItems }) => {
    const [page, setpage] = useState("home");
    return (
        <div className='navbar'>
            <Link to ="/" className='logo' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SERENE</Link>
            <ul className='mid'>
                <li className={page === "home" ? 'active' : ''}>
                    <Link to="/" onClick={() => setpage("home")}>
                        <button className='top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
                    </Link>
                </li>
                <li className={page === "ingredients" ? 'active' : ''}>
                    <Link to="/Ing" onClick={() => setpage("ingredients")}>
                        <button className='top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ingredients</button>
                    </Link>
                </li>
                <li className={page === "about-us" ? 'active' : ''}>
                    <Link to="/Abt" onClick={() => setpage("about-us")}>
                        <button className='top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</button>
                    </Link>
                </li>
            </ul>

            <div className='navbar-r'>
                <Link to="/cart" className='nav-cart'>
                    <i  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}className="fas fa-shopping-cart icon" style={{ fontSize: "1em" }}></i>
                    {totalCartItems > 0 && <div className='dot'></div>}
                </Link>
               <span  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ><button className='but' onClick={() => setShowLogin(true)}>Sign In </button></span> 
            </div>
     
        </div>
    );
};

export default Navbar;