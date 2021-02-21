export interface Item {
  id: number
  title: string
  price: string
  description: string
  image: string
}

export interface ProductProps {
  product: Item
}
