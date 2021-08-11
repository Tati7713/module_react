export default function Simpson({name, surname, age, info, photo}) {
    return (

        <div className={'simpson'}>

            <h2>This is {name} {surname} - {age} age</h2>
            <div>
                <img src={photo} alt=""/>
            </div>
            <p>{info}</p>

        </div>

    );
}