import React from 'react';
import { useState, useEffect } from "react";
import HeaderLink from '../HeaderLink/HeaderLink';

function FormPattern({
  formName,
  buttonText,
  handleSubmitMain,
  formGreeting,
  footerText,
  footerLinkText,
})
{
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // стейт переменная состояния формы
  const [isFormValid, setIsFormValid] = useState(false);
  // стейт переменные состояния инпутов
  const [isNameValid, setIsNameValid] = useState (false);
  const [isEmailValid, setIsEmailValid] = useState (false);
  const [isPasswordValid, setPasswordValid] = useState (false);
  // стейт переменные текстов ошибок
  const [nameErrText, setNameErrText] = useState('');
  const [emailErrText, setEmailErrText] = useState('');
  const [passwordErrText, setPasswordErrText] = useState('');

  // переменные начений инпутов
  const [nameValue, setNameValue]  = useState('');
  // const email = '';
  // const password = '';

  // при изменении любой стейт переменной импута проверяетс на валидность все инпуты
  useEffect(() => {
    if (isNameValid && isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isNameValid, isEmailValid, isPasswordValid]);

  function handleChangeName(e) {
    setNameValue(e.target.value)
    if (!e.target.value.length) {
      setIsNameValid(false)
      setNameErrText('Поле должно быть заполнено')
    } else if (e.target.value.length < 2) {
      setIsNameValid(false)
      setNameErrText('Имя должно быть больше 2 символов')
    } else if (e.target.value.length > 30) {
      setIsNameValid(false)
      setNameErrText('Имя должно быть меньше 30 символов')
    } else {
      setIsNameValid(true)
      setNameErrText('Все ОК')
    }
  }

  function handleChangeEmail(e) {
    if (!e.target.value.length) {
      setIsEmailValid(false)
      setEmailErrText('Поле должно быть заполнено')
    } else if ((!regexp.test(String(e.target.value).toLowerCase()))) {
      setIsEmailValid(false)
      setEmailErrText('Значение должно быть почтой')
    } else {
      setIsEmailValid(true)
      setEmailErrText('Все ОК')
    }
  }

  function handleChangePassword(e) {
    if (!e.target.value.length) {
      setPasswordValid(false)
      setPasswordErrText('Поле должно быть заполнено')
    } else if (e.target.value.length < 3) {
      setPasswordValid(false)
      setPasswordErrText('Значение пароля должно быть больше 3 символов')
    } else {
      setPasswordValid(true)
      setPasswordErrText('Все ОК')
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameValue)
    // if (formName === 'login') {
    //     onSubmit(email, password);
    // } else {
    //     onSubmit(name, email, password);
    // }
  }


  return (
    <div className="form-pattern">
      <HeaderLink/>
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
            <p className="form-pattern__error">{nameErrText}</p>
          </div>
{/* ------------------------------Email */}
          <label className="form-pattern__label">E-mail'</label>
          <input
            className="form-pattern__inp"
            type='email'
            onChange={handleChangeEmail}
          />
          <div className="form-pattern__inp-err-box">
            <p className="form-pattern__error">{emailErrText}</p>
          </div>
{/* -----------------------------password */}
          <label className='form-pattern__label'>Пароль</label>
          <input
            className='form-pattern__inp'
            type='password'
            onChange={handleChangePassword}
          />
          <div className="form-pattern__inp-err-box">
            <p className="form-pattern__error" id="nameErr">{passwordErrText}</p>
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
  )
}

export default FormPattern

