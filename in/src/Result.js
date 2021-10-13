import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPizzas from './redux/actions/pizzasAction'
import Pizza  from  './components/Pizza'
import LoadingAnimation from './components/LoadingAnimation'
import Header from './components/Header'

function Result() {
  const dispatch = useDispatch()


  const pizzas = useSelector(
    (store) => store.pizzasReducer.pizzas
  )

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [])
  return (
    <div className="pizzaPosition">
      {pizzas.length > 0 ? (
        pizzas.map((el, index) => (
            <Pizza
            key={index}
            image={el.image}
            name={el.name}
            price={el.price}
            ingredients={el.ingredients}
            weight={el.weight}
            size={el.size}
          />
        ))
      ) : <LoadingAnimation/>}
    </div>
      
          
  )
}

export default Result


