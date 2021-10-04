import React from 'react';
import './Peperoni.png';
import './PizzaCoverStyle.css'
import './PizzaPropertiesPeperoni.png'

function Peperoni() {
    return (
      
        <div className="position">
            <div className="parentDiv">
          <img className="sizeOfPizza" src="PizzaPropertiesPeperoni.png" title="Інші розміри поки що недоступні"></img>
          <img className="coverPizza" src="Peperoni.png"></img> 
      </div>
            <div className="nameAndAbout">
                <span className="pizzaNameSpan">Peperoni</span>
                <span className="pizzaAbout">tomato sauce, parmesan cheese,<br/> mozzarella cheese, ricotta cheese, ham, tomatoes.</span>
                <hr noshade/>
                <div className="priceAmountAdd">
                    <span className="price">195 <b>UAH</b> </span>
                    <span className="amountOfPizza"> <button className="buttonPlus">+</button> 0 <button className="buttonPlus">-</button> </span>
                    <span> <button className="buttonAdd">Add</button> </span>
                </div>
            </div>
        </div>
      
  );
}

export default Peperoni;