import Geo from './geo'

export default function Address({street, suite, city, zipcode, geo}) {

    return (

        <div>
            <h4>Address:</h4>
            <p>{street} str., {suite}, {city}, zipcode ({zipcode})</p>

            <Geo {...geo}/>
        </div>

    );
}