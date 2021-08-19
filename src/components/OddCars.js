import {useEffect, useState} from "react";

export default function OddCars() {
    let [users, setUsers] = useState([])
    let filter = users.filter(value => value.model.length  %2!== 0)
    console.log(filter)
    useEffect(()=>{
        fetch('http://195.72.146.25/api/v1/cars')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            })
    },[])
    return (
        <div>
            <h1>Odd Cars</h1>
            {
                filter.map(value =>
                    <div className={'styleUsers'} key={value.id}>
                        <h2>Id: {value.id}. Model: {value.model}; Price: {value.price}; Year: {value.year};</h2>
                    </div>
                )
            }
        </div>
    )

}