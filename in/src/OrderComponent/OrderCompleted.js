import React from 'react'
import './OrderCompleted.css'


function OrderCompleted() {
    

    return (

        <div className="orderComplProperties">
            <header className="orderText"><p>Order Completed</p></header>
            <img src="orderCompleted.png" />
            <span>
                <input className="doneStyle" type="submit" value="Done"></input>
            </span>
        </div>
    )
}

export default OrderCompleted