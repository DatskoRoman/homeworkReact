export default function Simpson({item:{photo, name, surname,age, info, }}) {
    return(
    <div>
        <img src={photo} alt=""/>
    <h2>{name}</h2>
    <h3>{surname}. Age - {age}</h3>
    <p>{info}</p>

    </div>
);
}
