import React from "react";
import "./SelectedPizza.css";
function SelectedPizza(props) {
  return (
    <>
      <div className="selectedPizzaPosition">
        <img src="calzone.png" />
        <div className="selectedInfo">
          <span className="nameAndCountPizza">
            <span>Peperoni</span>
            <span>1</span>
          </span>
          <span className="weightAndPrice">
            <span>430g</span>
            <span>195 UAH</span>
          </span>
        </div>
        <img className="closeImg" src="close.png" alt="cancel" />
      </div>
      <hr className="cartHr"></hr>
    </>
  );
}

export default SelectedPizza;
