import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import './Comments.css'


export default function Comments({item}) {
    let[comments, setComments]= useState([])
    const choose = (id) => {
        let chooseComments = comments.find(value => value.id === id);
        setComments(chooseComments)
    }

    return(
        <div className={'flexComment'}>
        <div>
            {
                item && item.map(value => <Comment item={value} key={value.body} choose={choose}/>)
            }
        </div>
        </div>
    )
}