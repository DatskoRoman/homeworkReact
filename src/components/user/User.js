import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../services/user.service";

export default function User({item}) {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPostOfUser(item.id).then(value => setPosts(value))
        }, [item.id]);
    return(
        <div>
            <h2>{item.id}. {item.name} {item.username} </h2>
            <Posts items={posts}/>
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