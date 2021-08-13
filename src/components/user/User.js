
export default function User({item, chooseUser}) {

    return(
        <div className={"styleUser"}>
            <h2>{item.id}. {item.name} {item.username} </h2>
            <button onClick={()=>chooseUser(item)}>Posts
            </button>


        </div>
    )

}