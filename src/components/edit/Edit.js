import {useState} from "react";
import {carEdit} from "../../services/car.service";

export default function Edit({item}) {
    let [model, setModel] = useState([]);
    let [price, setPrice] = useState([]);
    let [year, setYear] = useState([]);
    let [car, setCar] = useState({model:'', price:'', year:''})
    const onSubmitForm = (e) => {
        let id = item.id;
        let tempCar = {model, price, year,id}
        setCar({...tempCar});
        carEdit(tempCar).then();

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
                <input type="text" name={model}  onInput={onInputChangeModel} placeholder={'change model avto'}/>
                <input type="text" name={price}  onInput={onInputChangePrice} placeholder={'change price avto'}/>
                <input type="text" name={year}  onInput={onInputChangeYear} placeholder={'change year avto'}/>
                <button>Change</button>
                {/*<input type="submit" name={'save'}/>*/}
            </form>



        </div>
    )
}
