const ADD_ONE = 'ADD_ONE'
const MINUS_ONE = 'MINUS_ONE'


const initialState = {
  number: 0
};
function counterReducer(state = initialState, action) {
switch(action.type) {
  case ADD_ONE:
    return {
      number: state.number + 1
    };
  case MINUS_ONE:
    return {
      number: Math.max(state.number - 1, 0)
    };
  default:
    return state;
  }
}
export default counterReducer;