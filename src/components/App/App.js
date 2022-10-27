import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';
import mainApi from '../../utils/mainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// ипорт компонентов
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ErrPage from '../ErrPage/ErrPage';
// перевод кода ошибки от сервера в сообщение
import serverErrorCode2Message from '../../utils/serverErrorCode2Message';

function App() {
  // стейт переменная вошедшего пользователя
  const [currentUser, setCurrentUser] = useState({})
  // переменная ответов от сервера
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  //стейт переменная статуса входа пользавателя в систему
  const [loggedIn, setloggedIn] = useState(true)
  //стейт переменная массива информации о фильмах
  const [movies, setMovies] = useState([])
  //хук перемещения между страницами
  const history = useHistory()

  // Функция возврата на предыдущую страницу
  function handleBack () {
   history.goBack();
  }

  //функция регистарции пользователя на сервере
  function handleRegister(name, email, password) {
    mainApi.register(email, password, name)
      .then((res) => {
        setServerErrorMessage('')
        handleLogin(email, password)
      })
      .catch((err) => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((res) => {
        setServerErrorMessage('')
        localStorage.setItem('jwt', res.token)
        history.push('/movies')
        window.location.reload()
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  //функция выхода пользователя
  function handleLogOut() {
    // setloggedIn(false)
    localStorage.removeItem('jwt')
    history.push('/login')
  }

  // Запрос данных пользователя с сервера при старте
  useEffect(() => {
    mainApi.getPersonInfo()
      .then(res => {
        setCurrentUser(res)
        console.log(currentUser)
       })
      .catch(err => {
        console.log(err)
      })
  }, [])





  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/main">
          <Main/>
        </Route>

        <Route path="/movies">
          <Movies
            movies={movies}
          />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>

        <Route path="/register">
          <Register
            onRegister={handleRegister}
            serverErrorMessage={serverErrorMessage}
          />
        </Route>

        <Route path="/login">
          <Login
            onLogin={handleLogin}
            serverErrorMessage={serverErrorMessage}
          />
        </Route>

        <Route path="/profile">
          <Profile
            handleLogOut={handleLogOut}
          />
        </Route>

        <Route exact path="/">
          {loggedIn ? <Redirect to="/main"/> : <Redirect to="/login"/>}
        </Route>

        <Route path="*">
          <ErrPage
            err = {'404'}
            errText = {'Страница не найдена'}
            handleBack = {handleBack}
          />
        </Route>

      </Switch>
      </CurrentUserContext.Provider>
  );
}

export default App;
