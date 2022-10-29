import React, { useContext, useState, useEffect } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';

import regExp from '../../utils/regExp';
import messages from '../../utils/messages';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile ({
  handleLogOut,
  onSubmit
})
{
// подписка на контекст
const currentUser = useContext(CurrentUserContext);
//стейт переменные имя и почты
const [name, setName] = useState('')
const [email, setEmail] = useState('')

// стейт переменная состояния формы
const [isFormValid, setIsFormValid] = useState(true);
// стейт переменные состояния инпутов
const [isNameValid, setIsNameValid] = useState(true);
const [isEmailValid, setIsEmailValid] = useState(true);

// стейт переменные текстов ошибок
const [nameErrText, setNameErrText] = useState('');
const [emailErrText, setEmailErrText] = useState('');


// // переменные начений инпутов
// const [nameValue, setNameValue]  = useState('');
// const [emailValue, setEmailValue]  = useState('');


// при изменении любой стейт переменной импута проверяетс на валидность все инпуты
useEffect(() => {
  if (isNameValid && isEmailValid) {
    setIsFormValid(true);
  } else {
    setIsFormValid(false);
    }
}, [isNameValid, isEmailValid]);


//присвоение стейт переменным значений currentUser, при изменении последнего
useEffect(() =>{
  console.log(currentUser.name)
  setName(currentUser.name)
  setEmail(currentUser.email)
}, [])

function handleChangeName(e) {
  if (!e.target.value.length) {
    setIsNameValid(false)
    setEmailErrText(messages.error.notEmpty)
  } else if (e.target.value.length < 2) {
    setIsNameValid(false)
    setEmailErrText(messages.error.minNameLength)
  } else if (e.target.value.length > 30) {
    setIsNameValid(false)
    setEmailErrText(messages.error.maxNameLength)
  } else if ((!regExp.Name.test(String(e.target.value).toLowerCase()))) {
    setIsNameValid(false)
    setEmailErrText(messages.error.notName)
  } else {
    setName(e.target.value)
    setIsNameValid(true)
    setEmailErrText('')
  }
}

function handleChangeEmail(e) {
  if (!e.target.value.length) {
    setIsEmailValid(false)
    setNameErrText(messages.error.notEmpty)
  } else if (e.target.value.length < 2) {
    setIsEmailValid(false)
    setNameErrText(messages.error.minNameLength)
  } else if (e.target.value.length > 30) {
    setIsEmailValid(false)
    setNameErrText(messages.error.maxNameLength)
  } else if ((!regExp.Email.test(String(e.target.value).toLowerCase()))) {
    setIsEmailValid(false)
    setNameErrText(messages.error.notName)
  } else {
    setEmail(e.target.value)
    setIsEmailValid(true)
    setNameErrText('')
  }
}

function handleSubmit(e) {
  e.preventDefault();
  onSubmit(name, email);
}

return (
  <>
    <HeaderLogin/>
    <main className='profile'>
      <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>
      <form
        className='profile__form'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='profile__info'>
          <p className='profile__title'>Имя</p>
          <input className='profile__input'
            name="name"
            type="text"
            required
            placeholder={name}
            // value={name || ''}
            onChange={handleChangeName}
          />
        </div>
        <div className='profile__info'>
          <p className='profile__title'>E-mail</p>
          <input className='profile__input'
            name="E-mail"
            type="email"
            required
            // value={email || ''}
            placeholder={email}
            onChange={handleChangeEmail}
          />
        </div>
        <p className='form-pattern__error'>{emailErrText || nameErrText}</p>
        <button
          className='prifile__btn prifile__btn-edit'
          type="submit"
          disabled={!isFormValid}
          >Редактровать
        </button>
      </form>
      <button
        className='prifile__btn prifile__btn-exit'
        onClick={handleLogOut}
        >Выйти из аккаунта
      </button>
    </main>
  </>
)
}

export default Profile
