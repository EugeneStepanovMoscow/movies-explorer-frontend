import FormPattern from "../FormPattern/FormPattern"

function Login (

)
{
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
