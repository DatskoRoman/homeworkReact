export default function Coment({item}) {
    return (
        <div className={"styleComment"}>
            <p>
                <b>{item.id}. </b>
                {item.body}
            </p>
        </div>
    )

}