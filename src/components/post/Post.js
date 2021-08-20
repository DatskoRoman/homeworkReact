import {
    Link,
    withRouter
} from"react-router-dom";
import './Post.css'

export default function Post({item}){
    return(
     <div className={'borderPost'}>
         <h3>Post userId. {item.userId}. </h3>
         Id.{item.id}  - <Link to={{pathname:`/posts/${item.id}`, state: item}}> Post details</Link>
     </div>
    )
}
