import {useEffect, useState} from "react";
import './Comments.css'

export default function Comments() {
    let [comments, setComments] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value]);
            })
    })
    return (
        <div>
            {
                comments.map(value =>
                    <div className={'styleComments'}>
                        <h3><b>Post id:</b> {value.postId}.Id: {value.id}</h3>
                        <p><b>Name:</b> {value.name}</p>
                        <p> <b>Email:</b> {value.email}</p>
                        <p> <b>Body:</b> {value.body}</p>
                    </div>
                )
            }
        </div>
    )

}