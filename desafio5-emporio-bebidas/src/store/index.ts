import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducerCart from './ducks/cart'

const createRootReducer = () =>
  combineReducers({
    cart: reducerCart
  })

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }
