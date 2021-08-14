import './App.css'
import {usersList} from './components/users/users'
import User from './components/user/user'

function App() {

  return (

      <div className={'Users'}>
          <User  {...usersList[0]}/>
          <User  {...usersList[1]}/>
          <User  {...usersList[2]}/>
          <User  {...usersList[3]}/>
          <User  {...usersList[4]}/>
          <User  {...usersList[5]}/>
          <User  {...usersList[6]}/>
          <User  {...usersList[7]}/>
          <User  {...usersList[8]}/>
          <User  {...usersList[9]}/>
      </div>

  );
}
export default App;

// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву


