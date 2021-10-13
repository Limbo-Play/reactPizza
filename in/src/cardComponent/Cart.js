import React from "react";
import "./Cart.css";
import SelectedPizza from "./SelectedPizza";

function Cart() {


  
  return (
    <div className="cartPosition">
      <header className="headerPosition">
        <span>Cart</span>
        <button className="cancelImg"><img src="cancel.png" alt="close" /></button>
      </header>
      <SelectedPizza />
      <SelectedPizza />
      <SelectedPizza />
      <footer className="footerPosition">
        <span className="amountSpan">Amount: 850 UAH</span>
        <button className="toOrderButton">To order</button>
      </footer>
    </div>
  );
}

export default Cart;
