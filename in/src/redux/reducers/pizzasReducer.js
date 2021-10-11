import actions from '../actionTypes'

const initialState = {
  pizzas: []
}

function pizzasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_PIZZAS:
      return {
        pizzas: action.payload,
      }
    default:
      return state
  }

}

export default pizzasReducer