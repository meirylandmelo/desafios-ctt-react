import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { getUser } from "../../store/ducks/users/actions"

const Perfil = () => {

    const dispatch = useDispatch()

    const { name, username, userPicture } = useSelector((state:any)=> state.usuario)

  useEffect(() => {
    axios.get('http://localhost:4000/user')
      .then(resposta => dispatch(getUser(resposta.data)))
  }, [dispatch])

    return (
        <div className="user-info">
          <img
            alt="Perfil"
            src={userPicture}
          />
          <div className="user-bio">
            <strong>{name}</strong>
            <span>{username}</span>
          </div>
        </div>
    )
}

export default Perfil;