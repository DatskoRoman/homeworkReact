
export default function Comment({item}) {
    return (
        <div className={"styleComment"}>
            <p><i>
                {item.body}
            </i>
            </p>
        </div>
    )

}