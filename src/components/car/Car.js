import './Car.css'
export default function Car({item}){

    return (
        <div className={'carBlock'}>
            <h2>Id: {item.id}. Model: {item.model}. </h2>
            <p>Price: {item.price}. Year: {item.year}</p>
        </div>
    );
}