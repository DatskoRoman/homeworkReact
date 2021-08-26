
import './App.css';
import {useReducer} from "react";
import reducer from "./reducer/Reducer";

function App() {
  let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
  return (
    <div>
      <h1>State 1 - {a}</h1>
      <button onClick={()=> dispatch({obj: '1', diya: '+'})}>inc</button>
      <button onClick={()=> dispatch({obj: '1', diya: '-'})}>inc</button>
        <h1>State 2 - {b}</h1>
        <button onClick={()=> dispatch({obj: '2', diya: '+'})}>inc</button>
        <button onClick={()=> dispatch({obj: '2', diya: '-'})}>inc</button>
        <h1>State 3 - {c}</h1>
        <button onClick={()=> dispatch({obj: '3', diya: '+'})}>inc</button>
        <button onClick={()=> dispatch({obj: '3', diya: '-'})}>inc</button>
    </div>
  );
}

export default App;
