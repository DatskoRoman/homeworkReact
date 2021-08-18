
import './App.css';
import ControlledForm from "./components/controlled-form/ControlledForm";
import AllCars from "./components/all-cars/AllCars";

function App() {
  return (
    <div className={'flexBlock'}>
        <div>
            <h1>Info about car:</h1>
            <AllCars/>
        </div>
        {/*<ControlledForm/>*/}
    </div>
  );
}

export default App;
