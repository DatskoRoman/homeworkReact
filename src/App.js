import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "./services/user.api";
import {fetch_Users, pushUser} from "./redux/actions";


export default function App() {
  let state = useSelector(state => {
    console.log(state);
    let {rootReducer} = state;
    return rootReducer;
  });

  let dispatch = useDispatch();
  let {users} = state;

  useEffect(() => {
    fetchUsers().then(value => {

      dispatch(fetch_Users(value));
    });
  }, []);

  let onSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let user = {name};
    addUser(user).then(value => {
      console.log('saved user ->', value);
      dispatch(pushUser(value));
    });
  };


  return (
      <div>

        <form onSubmit={onSubmit}>
          <input type="text" name={'name'}/>
          <button>add user</button>
        </form>
        <hr/>


        {
          users.map((value) => <div key={value.id}>{value.name}</div>)
        }

      </div>
  );
}