
import './App.css';
import {useReducer} from "react";
import reducer from "./reducer/Reducer";

function App() {
  let [{a}, dispatch] = useReducer(reducer, {a: 0});
  return (
    <div>
      <h1>State 1 - {a}</h1>
      <button onClick={()=> dispatch({obj: '1', diya: '+'})}>inc</button>
      <button onClick={()=> dispatch({obj: '1', diya: '-'})}>inc</button>
    </div>
  );
}

export default App;
