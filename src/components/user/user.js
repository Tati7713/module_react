import Address from './address'
import Company from './company'

export default function User({id, name, username, email, phone, website, address, company}) {

    return (

        <div className={'user'}>
            <h2>{name} (ID - {id})</h2>
            <p>Username: {username} <br/> Email: {email} <br/> Phone: {phone} <br/> Website: {website}</p>

            <Address {...address}/>
            <Company {...company}/>
        </div>

    );
}