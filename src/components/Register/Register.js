import FormPattern from '../FormPattern/FormPattern'

function Register (

)
{
return (
  <>
    <FormPattern
      formName={'register'}
      formGreeting = {'Добро пожаловать!'}
      buttonText = {'Зарегистрироваться'}
      footerText = {'Уже зарегистрированы?'}
      footerLinkText = {'Войти'}
      errorText = {''}
    />
  </>
)
}

export default Register
