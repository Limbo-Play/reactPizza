import React from 'react';
import Counterr from './Counterr';
import './PizzaCoverStyle.css'


function Pizza(props) {
    
    return (
      
        <div className="position">
            <div className="parentDiv">
                <div className="sizeOfPizza">
                    <span className="weightStyle">{props.weight}g</span>
                    <span className="sizeStyle">{props.size}см</span>
                </div>
          <img className="coverPizza" src={props.image} alt="Pizza properties"></img> 
      </div>
            <div className="nameAndAbout">
                <span className="pizzaNameSpan">{props.name}</span>
                <span className="pizzaAbout">{props.ingredients}</span>
                <hr/>
                <div className="priceAmountAdd">
                    <span className="price">{props.price} <b>UAH</b> </span>
                    <span className="amountOfPizza"> { <Counterr/> } </span>
                    <span> <button className="buttonAdd">Add</button> </span>
                </div>
            </div>
        </div>
      
  );
}

export default Pizza;