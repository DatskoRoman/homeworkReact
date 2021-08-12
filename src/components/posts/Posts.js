import {useEffect, useState} from "react";
import {getPostOfUser, getPostsOfUser} from "../service/post.service";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPostsOfUser().then(value => setPosts(value))
    }, []);
    return(
        <div>
            {
                posts.map(value => <Post item={value} key={value.title}/>)
            }
        </div>
    );
}