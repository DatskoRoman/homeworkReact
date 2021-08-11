import Post from "../post/Post";

export default function Posts({items}) {
    console.log(items);
    return(
        <div>
            {
                items && items.map(value => <Post item={value} key={value.title}/>)
            }
        </div>
    )
}