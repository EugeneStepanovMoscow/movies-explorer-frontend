import React, {useState} from "react";
import FormPattern from '../FormPattern/FormPattern';
import HeaderLink from '../HeaderLink/HeaderLink';

function Register ({
  onRegister,
  serverErrorMessage
  })
  {
  //стейт переменная значения для регистрации
  // const [regState, setRegState] = useState({
  //   email: '',
  //   password: '',
  //   name: '',
  // })
  // функция при регистрации
  // передаем переменные в app
  // вызываем на кнопке сохранить в форме
  // function handleSubmit(evt) {
  //   evt.preventDefault()
  //   onRegister(regState.email, regState.password, regState.name)
  //   console.log(regState.email)
  // }

  // function handleChange (evt) {
  //   const {name, value} = evt.target
  //   setRegState({...regState, [name]: value})
  // }


  return (
    <main className="register">
      <HeaderLink/>
      <FormPattern
        formName={'register'}
        formGreeting={'Добро пожаловать!'}
        buttonText={'Зарегистрироваться'}
        footerText={'Уже зарегистрированы?'}
        footerLinkText={'Войти'}
        onSubmit={onRegister}
        serverErrorMessage={serverErrorMessage}
      />
    </main>
  )
}

export default Register
