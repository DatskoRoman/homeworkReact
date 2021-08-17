import './Car.css'
import {carDelete, carEdit} from "../../services/car.service";
import Edit from "../edit/Edit";
import {useState} from "react";

export default function Car({item}){
let[edit, setEdit]=useState('')
    return (
        <div className={'carBlock'}>
            <h2>Id: {item.id}. Model: {item.model}. </h2>
            <p>Price: {item.price}. Year: {item.year}</p>
            <div className={'buttonCar'}>
                <button onClick={()=>{
                    carDelete(item)
                }} className={'buttonDelete'}>Delete</button>

                <button onClick={()=>{
                    setEdit(<Edit item={item}/>)
                }} className={'buttonEdit'}>Edit</button>
            </div>
            <div>{edit}</div>
        </div>
    );
}