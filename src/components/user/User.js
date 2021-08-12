import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getComentOfUser, getPostOfUser} from "../services/user.service";
import Coments from "../coments/Coments";
import './User.css'

export default function User({item}) {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPostOfUser(item.id).then(value => setPosts(value))
        }, [item.id]);
    let [coments, setComents] = useState([]);
    useEffect(()=>{
        getComentOfUser(item.id).then(value => setComents(value))
    }, [item.id]);

    return(
        <div className={"styleUser"}>
            <h2>{item.id}. {item.name} {item.username} </h2>
            <h3>User posts</h3>
            <Posts items={posts}/>
            <h3>User coments</h3>
            <Coments item={coments}/>
        </div>
    )

}
// import {useEffect, useState} from "react";
// // import Post from "../post/Post";
//
// export default function User() {
//     // let [users, setUsers] = useState([])
//     let users = []
//     useEffect(efect => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => {
//                 // setUsers(value);
//                 console.log(value);
//             })
//     }, [])
//     return (
//         <div>
//             {/*{users.map(value=><Post item={value} key={value.id}/>)}*/}
//         </div>
//     );
// }