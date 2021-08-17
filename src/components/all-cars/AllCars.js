import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";
import './AllCars.css'

export default function AllCars() {

    let[cars, setCars]= useState([])
    useEffect(()=> {
        getCars().then(value => setCars(value));
    },[]);

    return(
        <div className={"reverseCars"}>
            {
                cars.map(value => <Car item={value} key={value.id}/>)
            }
        </div>
    );

}