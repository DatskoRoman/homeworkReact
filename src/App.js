
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Coments from "./components/comments/Comments";

function App() {
  return (
    <div>
        <h2>Users:</h2>
        <div className={'users'}>
      <Users/>
        </div>
      <h2>User posts:</h2>
        <div className={'posts'}>
        <Posts/>
        </div>
      <h2>User comments:</h2>
        <div className={'comments'}>
        <Coments/>
        </div>
    </div>
  );
}

export default App;
