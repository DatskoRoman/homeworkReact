import {useEffect, useState} from "react";
import {carEdit, getCars} from "../../services/car.service";
import './Edit.css'

export default function Edit({item, setCheckCar}) {

    let [cars, setCars] = useState([]);
    let [model, setModel] = useState([]);
    let [price, setPrice] = useState([]);
    let [year, setYear] = useState([]);
    let [car, setCar] = useState({model:'', price:'', year:''})
    // useEffect(()=> {
    //     getCars().then(value => setCars(value));
    // }, []);

    const onSubmitForm = (e) => {
        e.preventDefault()
        let id = item.id;
        let tempCar = {model, price, year,id}
        setCar({...tempCar});
        carEdit(tempCar).then(value => {
            setCars([...cars, value]);
            setCheckCar(value);
        })
        console.log(cars)

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

            <form className={"change"} onSubmit={onSubmitForm}>
                <h3 className={'h3Change'}>Change your auto</h3>
                <input type="text" name={model}  onInput={onInputChangeModel} placeholder={'change model auto'}/>
                <input type="text" name={price}  onInput={onInputChangePrice} placeholder={'change price auto'}/>
                <input type="text" name={year}  onInput={onInputChangeYear} placeholder={'change year auto'}/>
                <button className={'editButton'}>Change</button>
            </form>



        </div>
    )
}
