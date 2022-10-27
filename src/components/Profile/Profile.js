import React, {useContext} from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import FormPattern from '../FormPattern/FormPattern';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function Profile ({
  handleLogOut
})
{
// подписка на контекст
const currentUser = useContext(CurrentUserContext);
//стейт переменные имя и почты
const [name, setName] = React.useState('')
const [email, setEmail] = React.useState('')
//присвоение стейт переменным значений currentUser, при изменении последнего
React.useEffect(() =>{
  setName(currentUser.name)
  setEmail(currentUser.email)
}, [currentUser])

function handleChangeName(e) {
  // if (!e.target.value.length) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.notEmpty)
  // } else if (e.target.value.length < 2) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.minNameLength)
  // } else if (e.target.value.length > 30) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.maxNameLength)
  // } else if ((!regExpName.test(String(e.target.value).toLowerCase()))) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.notName)
  // } else {
    setName(e.target.value)
    // setIsNameValid(true)
    // setNameErrText(messages.success)
  // }
}

function handleChangeEmail(e) {
  // if (!e.target.value.length) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.notEmpty)
  // } else if (e.target.value.length < 2) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.minNameLength)
  // } else if (e.target.value.length > 30) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.maxNameLength)
  // } else if ((!regExpName.test(String(e.target.value).toLowerCase()))) {
  //   setIsNameValid(false)
  //   setNameErrText(messages.error.notName)
  // } else {
    setEmail(e.target.value)
    // setIsNameValid(true)
    // setNameErrText(messages.success)
  // }
}

return (
  <>
    <HeaderLogin/>
    <main className='profile'>
      <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>
      <form className='profile__form'>
        <div className='profile__info'>
          <p className='profile__title'>Имя</p>
          <input className='profile__input'
            name="name"
            type="text"
            required
            // placeholder={currentUser.name}
            value={name || ''}
            onChange={handleChangeName}
          />
        </div>
        <div className='profile__info'>
          <p className='profile__title'>E-mail</p>
          <input className='profile__input'
            name="E-mail"
            type="email"
            required
            value={email || ''}
            // placeholder={currentUser.email}
            // onChange={handleChange}
          />
        </div>
        <button className='prifile__btn prifile__btn-edit'>Редактровать</button>
      </form>
      <button
        className='prifile__btn prifile__btn-exit'
        onClick={handleLogOut}
      >Выйти из аккаунта</button>
    </main>
    <FormPattern
        formName={'login'}
        formGreeting = {'Рады видеть!'}
        buttonText = {'Войти'}
        footerText = {'Ещё не зарегистрованы?'}
        footerLinkText = {'Регистрация'}
        // onSubmit={onLogin}
        // serverErrorMessage={serverErrorMessage}
      />
  </>
)
}

export default Profile
