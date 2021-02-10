import axios from "axios";
import { useEffect, useState } from "react";

interface interfaceStories {
    id: number,
    user: string,
    userPicture: string,
    time: string
}
const  Stories = () => {
    const [listStories, setListStories] = useState<interfaceStories[]>([])

    useEffect(() => {
        axios.get("http://localhost:4000/stories")
            .then(resposta => setListStories(resposta.data))
    }, [])

    return (
        <div className="stories">
            <h2>Stories</h2>
            {
                listStories !== null &&
                listStories.map((item:interfaceStories) => 
                <div className="storie" key={item.id}>
                <div className="storie-image">
                    <img src={item.userPicture} alt="user" />
                </div>
                <div className="storie-user">
                    <strong>{item.user}</strong>
                    <span>{item.time}</span>
                </div>
                </div>
            )
            } 
        </div>
    )
}

export default Stories;