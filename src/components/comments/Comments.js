import Comment from "../comment/Comment";

export default function Comments({item}) {
    console.log(item);
    return(
        <div>
            {
                item && item.map(value => <Comment item={value} key={value.body}/>)
            }
        </div>
    )
}