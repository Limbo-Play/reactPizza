import React from 'react'
import './Order.css'
import OrderHeader from './OrderHeader'


function Order() {
    


    return (
        <div className="orderProperties">
            <OrderHeader />
            
            <form>
                <span>Name</span>
                <input type="text" className="inputInfo"></input>
                
                <span>Phone number</span>
                <input type="tel" className="inputInfo"></input>
                
                <span>City</span>
                <input type="text" className="inputInfo"></input>
                
                <span>Address</span>
                <input type="text" className="inputInfo"></input>
                <span className="submitPosition">
                    <input className="submitStyle" type="submit" value="Confirm">
                    </input>
                </span>
                
            </form>
        </div>
    )
}

export default Order