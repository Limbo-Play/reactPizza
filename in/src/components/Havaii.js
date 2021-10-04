import React from 'react';
import './Havaii.png';
import './PizzaCoverStyle.css'
import './PizzaPropertiesHavaii.png'

function Havaii() {
    return (
      
        <div className="position">
            <div className="parentDiv">
          <img className="sizeOfPizza" src="PizzaPropertiesHavaii.png" title="Інші розміри поки що недоступні"></img>
          <img className="coverPizza" src="Havaii.png"></img> 
      </div>
            <div className="nameAndAbout">
                <span className="pizzaNameSpan">Havaii</span>
                <span className="pizzaAbout">tomato sauce, parmesan cheese,<br/> mozzarella cheese, ricotta cheese, ham, tomatoes.</span>
                <hr noshade/>
                <div className="priceAmountAdd">
                    <span className="price">180 <b>UAH</b> </span>
                    <span className="amountOfPizza"> <button className="buttonPlus">+</button> 0 <button className="buttonPlus">-</button> </span>
                    <span> <button className="buttonAdd">Add</button> </span>
                </div>
            </div>
        </div>
      
  );
}

export default Havaii;