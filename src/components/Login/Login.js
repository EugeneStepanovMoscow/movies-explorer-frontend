import React from 'react';
import FormPattern from "../FormPattern/FormPattern"

function Login () {
  function handleSubmit(evt) {
    evt.preventDefault()
  }
return (
  <main className="login">
    <FormPattern
      formName={'login'}
      formGreeting = {'Рады видеть!'}
      buttonText = {'Войти'}
      footerText = {'Ещё не зарегистрованы?'}
      footerLinkText = {'Регистрация'}
      errorText = {''}
    />
  </main>
)
}

export default Login
