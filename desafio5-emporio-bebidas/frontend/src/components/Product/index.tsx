import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import './styles.scss'

import { addProductCart } from 'store/ducks/cart/actions'
import { ProductProps } from 'types/item'

const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch()

  return (
    <article className="product-card">
      <figure className="product-figure">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </figure>
      <div className="product-info">
        <p className="product-description">{product.description}</p>
        <h3>{product.title}</h3>
        <p className="product-price">{product.price}</p>
      </div>
      <div className="product-footer">
        <button
          className="product-button-add"
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
        >
          <span>Adicionar</span>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </article>
  )
}

export default Product
