export default function Post({item}) {
    // console.log(item);
    return (
        <div className={'stylePost'}>
            <p><i>
                {item.id}. {item.title}
            </i>
            </p>
        </div>
    )

}
