// отримати всіх юзерів з https://jsonplaceholder.typicode.com/ вивести на сторінку
//     До кожного юзера отримати пости та вивести в межах User компоненти
// До кожного поста отримати комментарі, та вивести в межах Post компоненти
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div>
<Users/>
        <Posts/>
    </div>
  );
}

export default App;
