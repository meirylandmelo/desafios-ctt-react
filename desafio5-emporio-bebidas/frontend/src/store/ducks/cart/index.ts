import { CartItem, CartType } from './types'

const initialState: CartItem[] = []

function reducerCart(state = initialState, action: any) {
  let productIndex

  switch (action.type) {
    case CartType.ADD_TO_CART:
      productIndex = state.findIndex(
        (item) => item.id === action.payload.product.id
      )

      if (productIndex >= 0) {
        state[productIndex].quantity += 1
      } else {
        state.push(action.payload.product)
      }

      return [...state]
    case CartType.DECREASE_ITEM:
      productIndex = state.findIndex((item) => item.id === action.payload.id)

      if (productIndex >= 0) {
        state[productIndex].quantity -= 1

        if (state[productIndex].quantity <= 0) {
          state.splice(productIndex, 1)
        }
      }

      return [...state]
    case CartType.REMOVE_FROM_CART:
      productIndex = state.findIndex((item) => item.id === action.payload.id)

      if (productIndex >= 0) {
        state.splice(productIndex, 1)
      }

      return [...state]
    case CartType.REMOVE_ALL:
      return []

    default:
      return state
  }
}

export default reducerCart
