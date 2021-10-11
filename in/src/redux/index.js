import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import pizzasReducer from './reducers/pizzasReducer'
import loadingsReducer from './reducers/loadingReducer'
import counterReducer from './reducers/counter'


const rootReducer = combineReducers({
  pizzasReducer,
  loadingsReducer,
  counterReducer,
})

const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store