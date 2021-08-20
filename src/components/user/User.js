import {
    Link,
    withRouter
} from"react-router-dom";
import './User.css'

function User ({item, history}) {
    const navigateTo = () => {
        history.push(`/users/${item.id}`);
    }
    return (
        <div className={'borderUser'}>
            <h3>{item.id}. {item.name}</h3>
            <button onClick={navigateTo}> go to details</button>
        </div>
    )

}
export default withRouter(User);