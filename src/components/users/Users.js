import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../service/user.api";
import {Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
import './Users.css'

export default function Users(props){
    let {match:{url},history} = props;
    let [users, setUsers] = useState([]);

    useEffect(async ()=>{
        let response = await getUsers();
        setUsers([...response]);
    }, []);
    return(
        <div className={'usersFlex'}>
            <div>
            {users.map(value => <User history={history} item={value} key={value.id}/> )}
            </div>
            <div className={'withRoute'}>
            <Route path={`${url}/:id`} render={(props)=>{
                return <UserDetails{...props}/>
            }}/>
            </div>
        </div>
    )
}

