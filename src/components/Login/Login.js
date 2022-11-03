import React, { useEffect } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import FormPattern from "../FormPattern/FormPattern"
import { useNavigate } from 'react-router-dom';

function Login ({
  onLogin,
  serverErrorMessage,
  loggedIn
  })
  {

  const navigate = useNavigate()

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies')
    }
  },[])

  return (
    <main className="login">
      <div className='login__link-box'>
        <HeaderLink/>
      </div>
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
