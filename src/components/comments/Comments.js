import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../service/post.service";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {
    let[comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);
    useEffect(()=> {
        getCommentsOfUser().then(value => setComments([...value]))
    },[]);

    const choose1 = (u) => {
      setComment({...u})
    }
    return (
        <div className={'wrap'}>
            <div>
                {comments.map(value => <Comment
                    key={value.id}
                    item={value}
                    choose1={choose1}
                />
                )
                }
            </div>
            {
                comment && <div className={'comment1'}>
                    <p>Info comment:</p>
                    PostId: {comment.postId}. Id: {comment.id}. Title: {comment.name} - {comment.email}.
                    <p>Body: {comment.body}.</p>

                </div>
            }
        </div>
    )
}




// import Comment from "../comment/Comment";
// import {useEffect, useState} from "react";
// import './Comments.css'
// import {getCommentsOfUser} from "../service/post.service";
//
//
// export default function Comments() {
//     let[comment, setComment]= useState(null)
//     let [comments, setComments] = useState([]);
//     useEffect(()=>{
//         getCommentsOfUser.then(value => console.log(value))
//     }, []);
//     console.log()
//
//     const choose1 = (comment1) => {
//         let chooseComment = comments.find(value => value.id == comment1);
//         setComment(chooseComment)
//         // getCommentOfUser(comment1.id).then(value => console.log(value));
//     }
//
//     return(
//         <div className={'flexComment'}>
//         <div>
//             {
//                 comments.map(value => <Comment item={value} key={value.body} choose1={choose1}/>)
//             }
//         </div>
//             <div>
//                 {
//                     comment && <div>
//                         <p>Info post:</p>
//                         {comment.id}. Title:{comment.title}.
//                         <p>Body: {comment.body}.</p>
//                     </div>
//                 }
//
//         </div>
//         </div>
//     )
// }