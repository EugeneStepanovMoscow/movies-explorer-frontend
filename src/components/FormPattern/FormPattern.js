import React from 'react';
import { useState, useEffect } from "react";

import messages from '../../utils/messages';
import regExp from '../../utils/regExp';

function FormPattern({
  formName,
  buttonText,
  onSubmit,
  formGreeting,
  footerText,
  footerLinkText,
  serverErrorMessage,
})
{
  // стейт переменная состояния формы
  const [isFormValid, setIsFormValid] = useState(false);
  // стейт переменные состояния инпутов
  const [isNameValid, setIsNameValid] = useState (false);
  const [isEmailValid, setIsEmailValid] = useState (false);
  const [isPasswordValid, setIsPasswordValid] = useState (false);
  // стейт переменные текстов ошибок
  const [nameErrText, setNameErrText] = useState('');
  const [emailErrText, setEmailErrText] = useState('');
  const [passwordErrText, setPasswordErrText] = useState('');

  // переменные начений инпутов
  const [nameValue, setNameValue]  = useState('');
  const [emailValue, setEmailValue]  = useState('');
  const [passwordValue, setPasswordValue]  = useState('');

  useEffect(() => {
    if (formName === 'login') {
      setIsNameValid(true)
    } else {
      setIsNameValid(false)
    }
  }, [formName])

  // при изменении любой стейт переменной импута проверяетс на валидность все инпуты
  useEffect(() => {
    if (isNameValid && isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isNameValid, isEmailValid, isPasswordValid]);

  function handleChangeName(e) {
    if (!e.target.value.length) {
      setIsNameValid(false)
      setNameErrText(messages.error.notEmpty)
    } else if (e.target.value.length < 2) {
      setIsNameValid(false)
      setNameErrText(messages.error.minNameLength)
    } else if (e.target.value.length > 30) {
      setIsNameValid(false)
      setNameErrText(messages.error.maxNameLength)
    } else if ((!regExp.Name.test(String(e.target.value).toLowerCase()))) {
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
      setIsEmailValid(false)
      setEmailErrText(messages.error.notEmpty)
    } else if ((!regExp.Email.test(String(e.target.value).toLowerCase()))) {
      setIsEmailValid(false)
      setEmailErrText(messages.error.notEmail)
    } else {
      setEmailValue(e.target.value.toLowerCase())
      setIsEmailValid(true)
      setEmailErrText(messages.success)
    }
  }

  function handleChangePassword(e) {
    if (!e.target.value.length) {
      setIsPasswordValid(false)
      setPasswordErrText(messages.error.notEmpty)
    } else if (e.target.value.length < 3) {
      setIsPasswordValid(false)
      setPasswordErrText(messages.error.minPsswordLength)
    } else {
      setPasswordValue(e.target.value)
      setIsPasswordValid(true)
      setPasswordErrText(messages.success)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formName === 'login') {
        onSubmit(emailValue, passwordValue);
    } else {
        onSubmit(nameValue, emailValue, passwordValue);
    }
  }
// прописать значения переменных импутов в стейт переменные
// прописать выбор отправляемых переменных в зависимости от названия формы
// переработать форму. оставить тоько саму формк.
// попробовать использовать форму в профиле.

  return (
    <>
    <div className="form-pattern">
      <h2 className="form-pattern__greeting">{formGreeting}</h2>
      <form
        className="form-pattern__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="form-pattern__fieldset">
{/* ------------------------------Имя */}
          <label className={`form-pattern__label ${formName === 'login' ? 'form-pattern__lable_hide' : ''}`}>Имя</label>
          <input
            className={`form-pattern__inp ${formName === 'login' ? 'form-pattern__inp_hide' : ''}`}
            type='text'
            name='name'
            onChange={handleChangeName}
            required
          />
          <div className={`form-pattern__inp-err-box ${formName === 'login' ? 'form-pattern__inp-err-box_hide' : ''}`}>
            <p className={`form-pattern__error ${isNameValid ? 'form-pattern__error_success' : ''}`}>{nameErrText}</p>
          </div>
{/* ------------------------------Email */}
          <label className="form-pattern__label">E-mail'</label>
          <input
            className="form-pattern__inp"
            type='email'
            onChange={handleChangeEmail}
          />
          <div className="form-pattern__inp-err-box">
            <p className={`form-pattern__error ${isEmailValid ? 'form-pattern__error_success' : ''}`}>{emailErrText}</p>
          </div>
{/* -----------------------------password */}
          <label className='form-pattern__label'>Пароль</label>
          <input
            className='form-pattern__inp'
            type='password'
            onChange={handleChangePassword}
          />
          <div className="form-pattern__inp-err-box">
            <p className={`form-pattern__error ${isPasswordValid ? 'form-pattern__error_success' : ''}`}>{passwordErrText}</p>
          </div>
{/*-------------------------------секция отображения ошибки сервера*/}
          <div className="form-pattern__server-err-box">
            <p className='form-pattern__server-err-text'>{serverErrorMessage}</p>
          </div>

          <button
            className={`form-pattern__btn-save ${!isFormValid ? 'form-pattern__btn-save_disable' : ''}`}
            type="submit"
            disabled={!isFormValid}
            // document.getElementById('id').classList.add('class');
            // Element.setAttribute()

            // {...isFormValid ? 'disabled' : ''}
            >{buttonText}
          </button>
        </fieldset>
        <p className="form-pattern__footer-text">{footerText}
          <a className="form-patter__footer-link" href={formName === 'login' ? '/register' : '/login'}>{footerLinkText}</a>
        </p>
      </form>
    </div>
    </>

  )
}

export default FormPattern

