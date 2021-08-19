import {useEffect, useState} from "react";
import {carDelete, getCars, saveCar} from "../../services/car.service";
import Car from "../car/Car";
import './AllCars.css'

export default function AllCars() {

    let [cars, setCars] = useState([]);
    let [model, setModel] = useState([]);
    let [price, setPrice] = useState([]);
    let [year, setYear] = useState([]);
    let [checkCar, setCheckCar] = useState({})
    useEffect(()=> {
        getCars().then(value => setCars(value));
    }, [checkCar]);

    const onSubmitForm = (e) => {
        e.preventDefault()
        let tempCar = {model, price, year}
        // setCar({...tempCar});
        saveCar(tempCar).then(value => setCars([...cars, value]))

    }

    function deleteCarObj(carId) {

        carDelete(carId);

        setCars(cars.filter(item => item.id !== carId));
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

    return(
        <div className={"reverseCars"}>
            {
                cars && cars.map(value => <Car item={value} key={value.id} setCheckCar={setCheckCar} deleteCarObj={deleteCarObj}/>)
            }

            <form className={"fixedBlockInput"} onSubmit={onSubmitForm}>
                <h1 className={'h1CreateCar'}>Create new car:</h1>
                <input type="text" name={model} onInput={onInputChangeModel} placeholder={'create model auto'}/>
                <input type="text" name={price}  onInput={onInputChangePrice} placeholder={'create price auto'}/>
                <input type="text" name={year}  onInput={onInputChangeYear} placeholder={'create year auto'}/>
                <button>Submit</button>
                {/*<input type="submit" name={'save'}/>*/}
            </form>
        </div>
    );

}