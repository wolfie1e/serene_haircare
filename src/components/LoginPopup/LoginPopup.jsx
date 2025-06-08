import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign In");

  return (
    <div className='popup'>
      <div className="popup-box">
        <div className="popup-head">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross} alt="close" />
        </div>

        <div className="popup-inputs">
          {currState === "Sign In" && <input type="text" placeholder="Your name" />}
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="popup-btn">
          {currState === "Login" ? "Login" : "Create account"}
        </button>

        <div className="popup-check">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p className="popup-toggle">
            Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p className="popup-toggle">
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
