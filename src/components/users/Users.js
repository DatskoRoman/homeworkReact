import {useEffect, useState} from "react";
import './Users.css'

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
             .then(value => {
                 setUsers([...value]);
             })
    })
    return (
        <div>
            <h1>Users</h1>
            {
                users.map(value =>
                    <div className={'styleUsers'}>
                        <h2>Id: {value.id}. {value.name} {value.username}</h2>
                        <p><b>Email:</b> {value.email}</p>
                    </div>
                )
            }
        </div>
    )

}