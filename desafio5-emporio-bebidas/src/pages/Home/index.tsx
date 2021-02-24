import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import './home.scss'
import axios from 'axios'
import Header from 'components/Header'
import Product from 'components/Product'
import { ReactComponent as Icon } from 'images/beer.svg'
import { Item } from 'types/item'

const Home = () => {
  const [listProducts, setListProducts] = useState<Item[]>([])

  const token = localStorage.getItem('token')

  const getBeers = async () => {
    try {
      const request = await axios.get('http://localhost:4000/beers', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setListProducts(request.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getBeers()
  }, [])

  if (!token) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Header />
      <section className="section-featured">
        <header className="section-header">
          <Icon />
          <h2>Destaques no Empório</h2>
        </header>
        <div className="section-list">
          {listProducts.map((item: Item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
