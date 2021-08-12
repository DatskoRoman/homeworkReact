import {getComentsOfUser} from "../service/comment.service";
import Coment from "../comment/Comment";
import {useEffect, useState} from "react";

export default function Coments() {
    let [coments, setComents] = useState([]);
    useEffect(()=>{
        getComentsOfUser().then(value => setComents(value))
    }, []);
    return(
        <div>
            {
                coments.map(value => <Coment item={value} key={value.body}/>)
            }
        </div>
    )
}