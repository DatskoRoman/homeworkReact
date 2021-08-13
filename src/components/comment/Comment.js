import './Comment.css'
export default function Comment({item,choose1}) {
    return (
        <div className={"styleComment"}>
            <p><i>
                {item.body} {item.body} {item.body} {item.body} {item.body}
            </i>
            </p>
            <button onClick={()=>choose1(item.id)}> comment info</button>
        </div>
    )

}