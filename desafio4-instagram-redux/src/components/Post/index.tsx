
import { FiHeart } from "react-icons/fi";
import { PostUser } from "../../store/ducks/posts/types";
import axios from "axios"
import {useDispatch} from "react-redux"
import { getPosts } from "../../store/ducks/posts/actions";


const Post = ({userPicture, user, location, postPicture, likes, description, id}:PostUser) => {
  const dispatch = useDispatch()

  const listPosts = () => {
    axios.get("http://localhost:4000/posts?_sort=id&_order=desc")
      .then(resposta => dispatch(getPosts(resposta.data)))
  }

  const likePost = () => {

    axios.patch(`http://localhost:4000/posts/${id}`, {
      likes: likes + 1
    })
    .then(() => listPosts())
  }

    return(
        
          <div id={`post-${id}`} className="post">
            <header>
              <img src={userPicture} alt="user" />
              <div className="post-user">
                <strong>{user}</strong>
                <span>{location}</span>
              </div>
            </header>
            <div className="post-image">
              <img src={postPicture} alt="post" />
            </div>
            <div className="post-likes">
              <FiHeart onClick={likePost}/> {likes}
            </div>
            <p>{description}</p>
          </div>
    )
}

export default Post;