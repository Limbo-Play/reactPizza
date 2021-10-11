import React from "react"
import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const count = useSelector((store) => store.counterReducer)
    const dispatch = useDispatch()
    console.log(count)
    const plusOne = () => { dispatch({ type: 'ADD_ONE', payload: 'test plus'}) }
    const minusOne = () => { dispatch({ type: 'MINUS_ONE', payload: 'test minus'}) }

    
    return (
    
        <>  <button className="buttonPlus" onClick={plusOne}>+</button>
                <span>{count.number}</span>
            <button className="buttonPlus" onClick={minusOne}>-</button>
        </>
  )
}

export default Counter;

