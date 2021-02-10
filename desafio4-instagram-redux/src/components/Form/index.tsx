import { useRef} from 'react'
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux'
import { getPosts } from "../../store/ducks/posts/actions";


const Form  = () => {

  const dispatch = useDispatch()

  let inputURL = useRef<HTMLInputElement> (null)
  let inputDescription = useRef<HTMLInputElement>(null)
  const { username, userPicture } = useSelector((state:any)=> state.usuario)

  const listPosts = () => {
    axios.get("http://localhost:4000/posts?_sort=id&_order=desc")
      .then(resposta => dispatch(getPosts(resposta.data)))
  }

  const upPost = () => {
    const picture = inputURL.current?.value
    const descriptionPost = inputDescription.current?.value

    axios.post("http://localhost:4000/posts", {
      user: username,
      userPicture, 
      postPicture: picture,
      description: descriptionPost,
      likes: 0
    })
    .then(() => {
      listPosts()
    })
  }

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputURL}/>
        <input type="text" placeholder="Digite uma descrição" ref={inputDescription}/>
        <button onClick={upPost}>Postar!</button>
      </div>
  );
}

export default Form