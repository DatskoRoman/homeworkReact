export default function User({item}) {
    return(
        <div className={"styleUser"}>
            <h3>{item.id}. {item.name} {item.username} </h3>

        </div>
    )

}