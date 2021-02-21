import { VscTrash } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'

import {
  addProductCart,
  decreaseQuatity,
  removeFromCart
} from 'store/ducks/cart/actions'
import { CartItem } from 'store/ducks/cart/types'
import './styles.scss'

export interface CardItemProps {
  product: CartItem
}

const CardItem = ({ product }: CardItemProps) => {
  const dispatch = useDispatch()

  return (
    <article className="card-item">
      <div className="card-body">
        <figure className="card-figure">
          <img src={product.image} alt={product.title} className="card-image" />
        </figure>
        <h3>{product.title}</h3>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="card-remove"
        >
          <VscTrash />
        </button>
      </div>
      <div className="card-footer">
        <p>{product.price}</p>
        <div className="card-action">
          <button
            onClick={() => dispatch(decreaseQuatity(product.id))}
            className="card-button card-button-decrease"
          >
            -
          </button>
          <span className="card-quantity">{product.quantity}</span>
          <button
            onClick={() =>
              dispatch(
                addProductCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1
                })
              )
            }
            className="card-button card-button-increase"
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardItem
