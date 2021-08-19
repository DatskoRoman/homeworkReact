import './Car.css'
import {carDelete} from "../../services/car.service";
import Edit from "../edit/Edit";
import {useState} from "react";

export default function Car({item, setCheckCar, deleteCarObj}){
let[edit, setEdit]=useState('')
    return (
        <div className={'carBlock'}>
            <h2>Id: {item.id}. Model: {item.model}. </h2>
            <p>Price: {item.price}. Year: {item.year}</p>
            <div className={'buttonCar'}>
                <button onClick={()=>deleteCarObj(item.id)
                } className={'buttonDelete'}>Delete</button>

                <button onClick={()=>{
                    setEdit(<Edit item={item} setCheckCar={setCheckCar}/>)
                }} className={'buttonEdit'}>Edit</button>
            </div>
            <div>{edit}</div>
        </div>
    );
}