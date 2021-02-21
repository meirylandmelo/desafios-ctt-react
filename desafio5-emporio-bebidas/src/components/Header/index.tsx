import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from 'images/brand.svg'

import Menu from './menu'

import './header.scss'

const Header = () => {
  const cart = useSelector((state: any) => state.cart)

  return (
    <header className="header">
      <div className="header-alert">
        <p>
          A MAIOR <span>LOJA ESPECIALIZADA DE CERVEJA</span> DO BRASIL.
        </p>
      </div>
      <div className="header-bar container">
        <NavLink to="/home" className="header-logo" exact>
          <Logo />
        </NavLink>
        <div className="header-links">
          <a className="header-login" href="#">
            <AiOutlineUser />
            <span>Login</span>
          </a>
          <NavLink to="/cart" exact>
            <AiOutlineShoppingCart />
            <span>{cart.length > 0 ? cart.length : 'vazio :('}</span>
          </NavLink>
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header
