
import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPosts} from "../../service/user.api";
import {Route} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";
import './Posts.css'

export default function Posts(props){
    let {match:{url}} = props;

    let [posts, setPosts] = useState([]);
    useEffect(async ()=>{
       let response = await getPosts();
        setPosts([...response]);
    },[])
    return(
        <div className={'postsFlex'}>
            <div>
            {posts.map(value => <Post item={value} key={value.id}/>)}
            </div>
            <div className={'fixed'}>
            <Route path={`${url}/:id`} component={PostDetails}/>
            </div>
        </div>
    )
}