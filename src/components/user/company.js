export default function Company({name, catchPhrase, bs}) {

    return (
      <div>
          <h4>Company:</h4>
          <p>"{name}"<br/> {catchPhrase} <br/> {bs} </p>
      </div>
    );
}