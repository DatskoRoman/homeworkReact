
export default function PostDetails(props){
    let{location: {state}} = props;
    return (
        <div>
            <h3>UserId.{state.userId}. Id.{state.id}</h3>
            <h2>Title: {state.title}</h2>
            <p>Body: {state.body}</p>
        </div>
    )
}