import React from 'react';
import './Logo.png';
import './Cart.png';
import './Components.css';


function Header() {
    return (
    <header className="header">
        <div className="omgLogo">
          <img className="logo  logoPosition" src="Logo.png" alt="Logo" ></img>
          <div className="omgPizzaText">
            <div className="omg">Omg...</div>
            <div className="pizza">Pizza</div>
          </div>
          
        </div>
        <div className="sumAndCart">
          <img className="cart" src="Cart.png" alt="cart"></img>
          <span>0 UAH</span>
         </div>
    </header>
  )
}

export default Header;