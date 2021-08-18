import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from"react-router-dom";
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router>
        <div className={'styleGref'}>
            <div className={'styleLink'}>
                <Link to={'/Reloud'}>Reloud</Link>
            </div>
          <div className={'styleLink'}>
              <Link to={'/users'}>Users</Link>
          </div>
            <div className={'styleLink'}>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <div className={'styleLink'}>
                <Link to={'/comments'}>Comments</Link>
            </div>
        </div>
        <div>
            <Switch>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
            <Route path={'/comments'} component={Comments}/>
            </Switch>
        </div>
      </Router>

  );
}

export default App;

// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список