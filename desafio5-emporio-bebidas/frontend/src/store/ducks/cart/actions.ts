import { action } from 'typesafe-actions'

import { CartItem, CartType } from './types'

export const addProductCart = (product: CartItem) =>
  action(CartType.ADD_TO_CART, { product })

export const removeFromCart = (id: number) =>
  action(CartType.REMOVE_FROM_CART, { id })

export const decreaseQuatity = (id: number) =>
  action(CartType.DECREASE_ITEM, { id })

export const removeAll = () => action(CartType.REMOVE_ALL)
