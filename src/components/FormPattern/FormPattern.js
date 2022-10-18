import React from "react";
import logo from '../../images/header-logo.svg';

function FormPattern({
  title,
  formName,
  buttonText,
  handleChange,
  handleSubmit,
  name,
  password,
  formGreeting,
  footerText,
  footerLinkText,
  errorText
})
{

  return (
    <div className="form-pattern">
      <img className="form-pattern__logo" src={logo} alt='logo'/>
      <h2 className="form-pattern__greeting">{formGreeting}</h2>
      <form
        className="form-pattern__form"
        // name={`form-pattern-${formName}`}
        // id={`form-pattern-${formName}`}
        onSubmit={handleSubmit}
      >
        <fieldset className="form-pattern__fieldset">
          <label className="form-pattern__label">{`${formName === 'login' ? 'E-mail' : 'Имя'}`}</label>
          <input
            className="form-pattern__inp"
            name={`${formName === 'login' ? 'email' : 'name'}`}
            type={`${formName === 'login' ? 'email' : 'text'}`}
            placeholder={`${formName === 'login' ? 'E-mail' : 'Имя'}`}
            required
            // value={name || ''}
            onChange={handleChange}
          />
          <p className="form-pattern__error">{errorText}</p>
          <label className="form-pattern__label">{`${formName === 'login' ? 'Пароль' : 'E-mail'}`}</label>
          <input
            className="form-pattern__inp"
            name={`${formName === 'login' ? 'password' : 'email'}`}
            type={`${formName === 'login' ? 'password' : 'email'}`}
            placeholder={`${formName === 'login' ? '' : 'E-mail'}`}
            required
            // value={name || ''}
            onChange={handleChange}
          />
          <p className="form-pattern__error">{errorText}</p>
          <label className={`form-pattern__label ${formName === 'login' ? 'form-pattern__lable_hide' : ''}`}>Пароль</label>
          <input
            className={`form-pattern__inp ${formName === 'login' ? 'form-pattern__inp_hide' : ''}`}
            name="password"
            type="password"
            placeholder="Пароль"
            required
            // value={password || ''}
            onChange={handleChange}
          />
          <p className={`form-pattern__error ${formName === 'login' ? 'form-pattern__error_hide' : ''}`}>{errorText}</p>
          <button className="form-pattern__btn-save" type="submit">{buttonText}</button>
        </fieldset>
        <p className="form-pattern__footer-text">{footerText}
          <a className="form-patter__footer-link" href={formName === 'login' ? '/register' : '/login'}>{footerLinkText}</a>
        </p>
      </form>
    </div>
  )
}

export default FormPattern

