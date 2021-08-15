
export default function Comment({item, choose1}){
    const onClickComment = () => {
        choose1(item)
    }
return (
    <div>
        <h3>User comments:</h3>
        <h2>{item.id}. {item.name}</h2>
        <button onClick={onClickComment}>comment info</button>
    </div>
);
}



// import {useEffect, useState} from "react";
// import {getCommentOfUser} from "../service/post.service";
//
// export default function Comment({item,choose1}) {
//
//     return (
//         <div className={"styleComment"}>
//             <p><i>
//                 {item.body}
//             </i>
//             </p>
//             <button onClick={()=>choose1(item.id)}> comment info</button>
//         </div>
//     )
//
// }