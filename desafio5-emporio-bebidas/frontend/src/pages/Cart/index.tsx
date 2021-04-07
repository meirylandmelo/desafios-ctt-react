import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'

import CardItem from 'components/CardItem'
import Header from 'components/Header'
import { removeAll } from 'store/ducks/cart/actions'
import { CartItem } from 'store/ducks/cart/types'

const Cart = () => {
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()
  const [finish, setFinish] = useState<boolean>(false)
  const sendCart = () => {
    dispatch(removeAll())
    setFinish(true)
  }

  return (
    <>
      <Header />
      <section className="section-cart">
        {finish ? (
          <p className="section-finish-success">
            Seu pedido foi realizado com sucesso{' '}
            <span>
              <MdDone />
            </span>
          </p>
        ) : (
          <>
            <header className="section-header">
              <h2>Meu Carrinho</h2>
              <a className="section-button-finish" href="#" onClick={sendCart}>
                <span>Finalizar</span>
                <AiOutlineSend />
              </a>
            </header>
            <div className="section-list">
              {cart.map((item: CartItem) => (
                <CardItem key={item.id} product={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default Cart
