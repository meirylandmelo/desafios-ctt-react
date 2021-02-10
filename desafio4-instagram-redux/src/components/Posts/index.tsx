
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/ducks/posts/actions";
import axios from "axios";
import { useEffect } from "react";
import { PostUser } from "../../store/ducks/posts/types";
import Post from "../Post"

const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector((state: any) => state.posts)

    useEffect(() => {
      axios.get("http://localhost:4000/posts?_sort=id&_order=desc")
        .then(resposta => dispatch(getPosts(resposta.data)))
    }, [dispatch])

    return (
        <div className="post-container">
          {
            posts.map((item:PostUser) => <Post key={item.id} 
            id={item.id}
            userPicture={item.userPicture} 
            user={item.user}
            location={item.location}
            postPicture={item.postPicture}
            likes={item.likes}
            description={item.description}
            /> 
            )
          }
        </div>
    )
}

export default Posts