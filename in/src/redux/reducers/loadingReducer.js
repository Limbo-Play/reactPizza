import actions from '../actionTypes'

const initialState = {
  loadings: [],
}

function loadingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_LOADING:
      return {
        loadings: action.payload,
      }
    case actions.FINISH_LOADING:
      return {
        loadings: action.payload,
      }
    default:
      return state
  }
}

export default loadingsReducer
