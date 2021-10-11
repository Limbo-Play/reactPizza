import actionTypes from '../actionTypes'
import loadings from '../loadings'
import { finishLoading, startLoading } from './loadingAction'

function fetchPizzas() {
  return async (dispatch, getState) => {
    try {
        dispatch(startLoading(loadings.FETCH_PIZZAS_LOADING))
        const token = 'OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al'
        const URL = 'https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod'
        const response = await fetch(URL + "/pizzas", {
            headers: {
                'x-api-key': token,
            },
        })
        
        const pizzas = await response.json()
        

      dispatch({
        type: actionTypes.FETCH_PIZZAS,
        payload: pizzas,
      })
      dispatch(finishLoading(loadings.FETCH_PIZZAS_LOADING))
    } catch (e) {
      console.log(e)
    }
  }
}

export default fetchPizzas