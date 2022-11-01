import React, {useEffect} from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import FormPattern from "../FormPattern/FormPattern"
import { useHistory } from 'react-router-dom';

function Login ({
  onLogin,
  serverErrorMessage,
  loggedIn
  })
  {

  const history = useHistory()

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies')
    }
  },[])

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
