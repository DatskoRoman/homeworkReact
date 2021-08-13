import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getCommentOfUser} from "../service/post.service";

export default function Post({item, choose}) {

    let [comments, setComments] = useState([]);
    useEffect(()=>{
        getCommentOfUser(item.id).then(value => setComments(value))
    }, [item.id]);

    return(
        <div>
            <h3>User posts:</h3>
            <h2>{item.id}. {item.title}</h2>
            <button onClick={()=>choose(item.id)}> post info</button>
            <h3>User comments:</h3>
            <Comments item={comments}/>
        </div>
    )

}