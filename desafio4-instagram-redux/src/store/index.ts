import { createStore } from "redux"
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerPosts from "./ducks/posts";
import reducerUsuarios from "./ducks/users";

const createRootReducer = () => combineReducers({
    usuario: reducerUsuarios,
    posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }