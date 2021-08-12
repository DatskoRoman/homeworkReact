export default function Post({item}) {
    return (
        <div className={'stylePost'}>
            <p>
                <b>{item.id}. </b>
                {item.title}
            </p>
        </div>
    )

}