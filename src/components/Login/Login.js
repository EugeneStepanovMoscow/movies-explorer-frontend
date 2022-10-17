import FormPattern from "../FormPattern/FormPattern"

function Login (

)
{
return (
  <>
    <FormPattern
      formName={'login'}
      formGreeting = {'Рады видеть!'}
      buttonText = {'Войти'}
      footerText = {'Ещё не зарегистрованы?'}
      footerLinkText = {'Регистрация'}
      errorText = {''}
    />
  </>
)
}

export default Login
