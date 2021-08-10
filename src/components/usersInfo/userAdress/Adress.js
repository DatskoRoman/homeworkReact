export default function Adress({street, suite, city, zipcode}) {
    return(
        <div>
            <p>Street {street} - suite{suite}</p>
            <p>City {city} - zipcode{zipcode}</p>
        </div>
    )

}