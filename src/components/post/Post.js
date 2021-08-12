import './Post.css'
export default function Post({item}) {
    return (
        <div className={'stylePost'}>
            <p><i>
               {item.title}
            </i>
            </p>
        </div>
    )

}