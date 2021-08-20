import {useEffect, useState} from "react";
import {getUser} from "../../service/user.api";

export default function UserDetails(props) {
    let {match:{params:{id}}} = props;
    let [user, setUser] = useState({})
    useEffect(()=>{
        getUser(id).then(value => setUser(value))
    },[id])
    return(
        <div className={'infoUser'}>
            <h2>Id: {user.id}. {user.name} {user.username}.</h2>
            <h3>Email: {user.email}</h3>
        </div>
    )
}