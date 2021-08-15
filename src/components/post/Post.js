
export default function Post({item, choose}) {


    return(
        <div>
            <h3>User posts:</h3>
            <h2>{item.id}. {item.title}</h2>
            <button onClick={()=>choose(item.id)}> post info</button>
        </div>
    )

}