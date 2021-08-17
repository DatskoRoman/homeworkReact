import {useState} from "react";
import {saveCar} from "../../services/car.service";
import './ControlledForm.css'

export default function ControlledForm() {
    let [model, setModel] = useState([]);
    let [price, setPrice] = useState([]);
    let [year, setYear] = useState([]);
    let [car, setCar] = useState({model:'', price:'', year:''})
    const onSubmitForm = (e) => {
      let tempCar = {model, price, year}
        setCar({...tempCar});
      saveCar(tempCar).then();

    }
    let onInputChangeModel = (e) =>{
        // console.log(e.value);
        // let model1 = e.target.value;
        setModel(e.target.value)
    }
    let onInputChangePrice = (e) =>{
        // let price1 = e.target.value;
        setPrice(e.target.value)
    }
    let onInputChangeYear = (e) =>{
        // let year1 = e.target.value;
        setYear(e.target.value)
    }
    return (
        <div >

            <form className={"fixedBlockInput"} onSubmit={onSubmitForm}>
                <h1 className={'h1CreateCar'}>Create new car:</h1>
                <input type="text" name={model}  onInput={onInputChangeModel} placeholder={'create model auto'}/>
                <input type="text" name={price}  onInput={onInputChangePrice} placeholder={'create price auto'}/>
                <input type="text" name={year}  onInput={onInputChangeYear} placeholder={'create year auto'}/>
                <button>Submit</button>
                {/*<input type="submit" name={'save'}/>*/}
            </form>



        </div>
    )
}
