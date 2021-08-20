import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from"react-router-dom";
import './App.css';
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";
import Posts from "./components/posts/Posts";

function App() {
  return (
      <Router>
        <Switch>
    <div className={"styleMainDiv"}>
      <div className={'styleLink'}>
      <Link to={`/users`}>Users page</Link>
      </div>
      <br/>
      <br/>
      <div className={'styleLink'}>
      <Link to={`/posts`}>Posts page</Link>
    </div>
      <div>
        <br/>
        <Route path={`/users`} component={Users}/>
        <Route path={`/posts`} component={Posts}/>

      </div>
    </div>
        </Switch>
      </Router>
  );
}

export default App;
