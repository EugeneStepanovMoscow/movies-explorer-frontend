import React from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import FormPattern from "../FormPattern/FormPattern"

function Login ({
  onLogin,
  serverErrorMessage
  })
  {
  return (
    <main className="login">
      <HeaderLink/>
      <FormPattern
        formName={'login'}
        formGreeting = {'Рады видеть!'}
        buttonText = {'Войти'}
        footerText = {'Ещё не зарегистрованы?'}
        footerLinkText = {'Регистрация'}
        errorText = {''}
        onSubmit={onLogin}
        serverErrorMessage={serverErrorMessage}
      />
    </main>
  )
}

export default Login
