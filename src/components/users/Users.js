import {useEffect, useState} from "react";
import User from "../user/User";
import {getPostOfUser,getUsers} from "../service/user.service";
import Post from "../post/Post";
import './flexUser.css'

export default function Users() {

    let[users, setUsers]= useState([]);
    let[user, setUser] = useState({});
    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value]));
    },[]);

    useEffect(()=>{
        getPostOfUser(user.id).then(value => setPosts([...value]));
    }, [user]);

    // console.log(posts);

    let chooseUser = userItem => {
      setUser(userItem);
        // console.log(userItem);
    };

    return(
        <div className={"flexUser"}>
            <div>
            {
                users && users.map(value => <User item={value} key={value.id} chooseUser={chooseUser}/>)
            }
            </div>
            <div>
                {
                    posts && posts.map(value => <Post item={value}  key={value.id}/>)
                }

            </div>
        </div>
    );

}