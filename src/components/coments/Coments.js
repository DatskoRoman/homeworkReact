import Coment from "../coment/Coment";

export default function Coments({item}) {
    console.log(item);
    return(
        <div>
            {
                item && item.map(value => <Coment item={value} key={value.body}/>)
            }
        </div>
    )
}