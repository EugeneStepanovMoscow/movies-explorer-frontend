import React, { useContext, useState, useEffect } from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin';

import regExp from '../../utils/regExp';
import messages from '../../utils/messages';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile ({
  handleLogOut,
  onSubmit,
  serverErrorMessage
})
{
// подписка на контекст
const currentUser = useContext(CurrentUserContext);

// стейт переменная состояния формы
const [isFormValid, setIsFormValid] = useState(true);
// стейт переменные состояния инпутов
const [isNameValid, setIsNameValid] = useState(true);
const [isEmailValid, setIsEmailValid] = useState(true);

// стейт переменные текстов ошибок
const [nameErrText, setNameErrText] = useState('');
const [emailErrText, setEmailErrText] = useState('');

// переменные начений инпутов
const [nameValue, setNameValue]  = useState('');
const [emailValue, setEmailValue]  = useState('');
// переменная изменеия значений инпутов
const [isDataChange, setIsDataChange] = useState(false)


// при изменении любой стейт переменной импута проверяетс на валидность все инпуты
useEffect(() => {
  if (isNameValid && isEmailValid) {
    setIsFormValid(true);
  } else {
    setIsFormValid(false);
    }
}, [isNameValid, isEmailValid]);

useEffect(() => {
  if (nameValue === currentUser.name && emailValue === currentUser.email) {
    setIsDataChange (false)
  } else {
    setIsDataChange (true)
  }
}, [nameValue, emailValue])


// присвоение стейт переменным значений currentUser, при изменении последнего
useEffect(() =>{
  setNameValue(currentUser.name)
  setEmailValue(currentUser.email)
}, [currentUser])

function handleChangeName(e) {
  if (!e.target.value.length) {
    setNameValue(e.target.value)
    setIsNameValid(false)
    setNameErrText(messages.error.notEmpty)
  } else if (e.target.value.length < 2) {
    setNameValue(e.target.value)
    setIsNameValid(false)
    setNameErrText(messages.error.minNameLength)
  } else if (e.target.value.length > 30) {
    setNameValue(e.target.value)
    setIsNameValid(false)
    setNameErrText(messages.error.maxNameLength)
  } else if ((!regExp.Name.test(String(e.target.value).toLowerCase()))) {
    setNameValue(e.target.value)
    setIsNameValid(false)
    setNameErrText(messages.error.notName)
  } else {
    setNameValue(e.target.value)
    setIsNameValid(true)
    setNameErrText(messages.success)
  }
}

function handleChangeEmail(e) {
  if (!e.target.value.length) {
    setEmailValue(e.target.value)
    setIsEmailValid(false)
    setEmailErrText(messages.error.notEmpty)
  } else if (e.target.value.length < 2) {
    setEmailValue(e.target.value)
    setIsEmailValid(false)
    setEmailErrText(messages.error.minNameLength)
  } else if (e.target.value.length > 30) {
    setEmailValue(e.target.value)
    setIsEmailValid(false)
    setEmailErrText(messages.error.maxNameLength)
  } else if ((!regExp.Email.test(String(e.target.value).toLowerCase()))) {
    setEmailValue(e.target.value)
    setIsEmailValid(false)
    setEmailErrText(messages.error.notEmail)
  } else {
    setEmailValue(e.target.value)
    setIsEmailValid(true)
    setEmailErrText(messages.success)
  }
}

function handleSubmit(e) {
  e.preventDefault();
  onSubmit(nameValue, emailValue);
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
            // placeholder={currentUser.name}
            value={nameValue || ''}
            onChange={handleChangeName}
          />
          <div className='profile__inp-err-box'>
            <p className={`profile__error ${isNameValid ? 'profile__error_success' : ''}`}>{nameErrText}</p>
          </div>
        </div>
        <div className='profile__info'>
          <p className='profile__title'>E-mail</p>
          <input className='profile__input'
            name="E-mail"
            type="email"
            required
            value={emailValue || ''}
            // placeholder={currentUser.email}
            onChange={handleChangeEmail}
          />
          <div className='profile__inp-err-box'>
            <p className={`profile__error ${isEmailValid ? 'profile__error_success' : ''}`}>{emailErrText}</p>
          </div>
        </div>
        <p className='form-pattern__error'></p>
        <button
          className='prifile__btn prifile__btn-edit'
          type="submit"
          disabled={!isDataChange || !isFormValid}
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
