import {useEffect, useState} from "react";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            })
    })
    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(value =>
                    <div className={'stylePosts'}>
                        <h3>Id: {value.id}.UserId: {value.userId}</h3>
                        <p><b>Title:</b> {value.title}</p>
                        <p> <b>Body:</b> {value.body}</p>
                    </div>


                // <h2 key={value.id}>{value.body}</h2>
                )
            }
        </div>
    )

}