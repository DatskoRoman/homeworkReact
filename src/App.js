
import './App.css';
import ControlledForm from "./components/controlled-form/ControlledForm";
import AllCars from "./components/all-cars/AllCars";

function App() {
  return (
    <div className={'flexBlock'}>
        <AllCars/>
        <ControlledForm/>
    </div>
  );
}

export default App;
