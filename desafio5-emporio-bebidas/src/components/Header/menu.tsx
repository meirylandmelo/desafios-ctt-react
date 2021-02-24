import { useEffect, useState } from 'react'
import './header.scss'

import axios from 'axios'

const Menu = () => {
  const [categories, setCategories] = useState<string[]>([])

  const token = localStorage.getItem('token')

  const getMenu = async () => {
    try {
      const request = await axios.get('http://localhost:4000/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCategories(request.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <nav>
      <ul>
        {categories.map((item: string, i) => (
          <li key={i}>
            <a href="#" title={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="fale-conosco">
        <a href="#" title="Fale conosco">
          Fale conosco
        </a>
      </div>
    </nav>
  )
}

export default Menu
