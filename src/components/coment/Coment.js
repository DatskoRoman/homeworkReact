import './Coment.css'
export default function Coment({item}) {
    return (
        <div className={"styleComment"}>
            <p><i>
                {item.body}
            </i>
            </p>
        </div>
    )

}