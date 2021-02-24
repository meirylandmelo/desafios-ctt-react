import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Redirect } from 'react-router-dom'
import './login.scss'

import axios from 'axios'
import brand from 'images/brand.svg'

const Login = () => {
  const nameUser = useRef<HTMLInputElement>(null)
  const emailUser = useRef<HTMLInputElement>(null)
  const passwordUser = useRef<HTMLInputElement>(null)
  const ageUser = useRef<HTMLInputElement>(null)

  const [registered, setRegistered] = useState<boolean>(false)
  const [errorAge, setErrorAge] = useState<boolean>(false)

  const register = async () => {
    const request = {
      name: nameUser.current?.value,
      email: emailUser.current?.value,
      password: passwordUser.current?.value,
      age: ageUser.current?.value || 0
    }

    if (request?.age >= 18) {
      setErrorAge(false)
      try {
        const resposta = await axios.post(
          'http://localhost:4000/register',
          request
        )
        localStorage.setItem('token', resposta.data.accessToken)

        if (resposta.data.accessToken) {
          setRegistered(true)
        }
      } catch (error) {
        if (error.response.status === 400) {
          toast.error('Preencha todos os campos!')
        }
        console.log(error.response.status)
      }
    } else {
      setErrorAge(true)
    }
  }

  return (
    <div className="login-container">
      <div>
        <div>
          <img className="brand" src={brand} alt="Empório da cerveja" />
        </div>
        <div>
          <p>
            Bem-vindo a loja oficial das maiores cervejarias do mundo.
            <span> Cadastre-se.</span>
          </p>
        </div>
        {!registered ? (
          <div>
            <input type="text" placeholder="Nome" ref={nameUser} />
            <br />
            <input type="email" placeholder="Email" ref={emailUser} />
            <br />
            <input
              type="password"
              placeholder="Digite sua senha"
              ref={passwordUser}
            />
            <br />
            <input type="text" placeholder="Digite sua idade" ref={ageUser} />
            <br />
            <button onClick={register}>Cadastrar</button>
            {errorAge && (
              <p className="login-age">Acesso negado, menor de 18 anos!</p>
            )}
          </div>
        ) : (
          <Redirect to="/home" />
        )}
      </div>
    </div>
  )
}

export default Login
