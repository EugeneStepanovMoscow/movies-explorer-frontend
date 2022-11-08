import React from "react";
import FormPattern from '../FormPattern/FormPattern';
import HeaderLink from '../HeaderLink/HeaderLink';

function Register ({
  onRegister,
  serverErrorMessage,
  isLoading
  })
  {
  return (
    <main className="register">
      <div className='register__link-box'>
        <HeaderLink/>
      </div>
      <FormPattern
        formName={'register'}
        formGreeting={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        footerText={'Уже зарегистрированы?'}
        footerLinkText={'Войти'}
        onSubmit={onRegister}
        serverErrorMessage={serverErrorMessage}
        isLoading={isLoading}
      />
    </main>
  )
}

export default Register
