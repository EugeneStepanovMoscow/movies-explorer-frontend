import React, {useContext} from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function Profile () {
// подписка на контекст
const currentUser = useContext(CurrentUserContext);
//стейт переменные имя и почты
const [name, setName] = React.useState('Стартовое имя')
const [email, setEmail] = React.useState('')
//присвоение стейт переменным значений currentUser, при изменении последнего
React.useEffect(() =>{
  setName(currentUser.name)
  setEmail(currentUser.email)
}, [currentUser])

return (
  <>
    <HeaderLogin/>
    <main className='profile'>
      <h1 className='profile__greeting'>Привет, {name}!</h1>
      <form className='profile__form'>
        <div className='profile__info'>
          <p className='profile__title'>Имя</p>
          <input className='profile__input'
            name="name"
            type="text"
            required
            // placeholder={currentUser.name}
            // value={name || ''}
            // onChange={handleChange}
          />
        </div>
        <div className='profile__info'>
          <p className='profile__title'>E-mail</p>
          <input className='profile__input'
            name="E-mail"
            type="email"
            required
            // value={email || ''}
            // placeholder={currentUser.email}
            // onChange={handleChange}
          />
        </div>
        <button className='prifile__btn prifile__btn-edit'>Редактровать</button>
        <button className='prifile__btn prifile__btn-exit'>Выйти из аккаунта</button>
      </form>
    </main>
  </>
)
}

export default Profile
