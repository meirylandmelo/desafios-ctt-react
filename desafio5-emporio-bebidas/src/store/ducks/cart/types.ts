export enum CartType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  DECREASE_ITEM = 'DECREASE_ITEM',
  REMOVE_ALL = 'REMOVE_ALL'
}

export interface CartItem {
  id: number
  title: string
  quantity: number
  price: string
  image: string
}
