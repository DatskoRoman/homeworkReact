import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom";

import './App.css';
import EvenCar from "./components/EvenCar";
import OddCars from "./components/OddCars";

function App() {
  return (
      <Router>
        <div className={'styleGref'}>
          <div className={'styleLink'}>
            <Link to={'/EvenCar'}>Even Cars</Link>
          </div>
            <br/>
          <div className={'styleLink'}>
            <Link to={'/OddCars'}>Odd Cars</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route path={'/EvenCar'} component={EvenCar}/>
            <Route path={'/OddCars'} component={OddCars}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
