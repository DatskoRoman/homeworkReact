import {useEffect, useState} from "react";
import {getPostsOfUser} from "../service/post.service";
import Post from "../post/Post";
import './posts.css'

export default function Posts() {

    let[posts, setPosts]= useState([])
    let[post, setPost]= useState(null)
    useEffect(()=> {
        getPostsOfUser().then(value => setPosts(value));
    },[])
    const choose = (id) => {
      let choosePost = posts.find(value => value.id == id);
      setPost(choosePost)
    }
    return(
        <div className={'flexPost'}>
            <div>
            {
                posts.map(value => <Post item={value} key={value.id} choose={choose}/>)
            }
            </div>
            <div>
            {
                post && <div className={'comment'}>
                    {post.id} {post.title}. {post.body}
                </div>
            }
            </div>
        </div>
    );

}