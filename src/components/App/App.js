import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
import mainApi from '../../utils/mainApi';
import movieApi from '../../utils/MoviesApi';

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
import requestProcessing from '../../utils/requestProcessing';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  // стейт переменная вошедшего пользователя
  const [currentUser, setCurrentUser] = useState({})
  // переменная ответов от сервера
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  //стейт переменная статуса входа пользавателя в систему
  const [loggedIn, setloggedIn] = useState(true)
  //стейт переменная массива информации о фильмах
  const [moviesList, setMoviesList] = useState([])
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
        handleLogin(email, password)
      })
      .catch((err) => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((res) => {
        setloggedIn(true)
        const user = {name: res.userFromDB.name, email: res.userFromDB.email}
        setCurrentUser(user)
        setServerErrorMessage('')
        localStorage.setItem('jwt', res.token)
        history.push('/movies')
        // window.location.reload()
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  //функция выхода пользователя
  function handleLogOut() {
    setloggedIn(false)
    setServerErrorMessage('')
    localStorage.removeItem('jwt')
    history.push('/login')
  }

  function handleProfileUpdate(name, email) {
    mainApi.profileUpdate(name, email)
      .then(res => {
        setCurrentUser({name: name, email: email})
        setServerErrorMessage(res.message)
        // console.log(res.code)
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  function handleFilmSearch(req) {
    movieApi.get()
      .then(res => {
        setMoviesList(requestProcessing(req, res))
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  // Запрос данных пользователя с сервера при старте и перезагрузке
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getPersonInfo()
        .then((res) => {
          setCurrentUser({name: res.name, email: res.email})
          setloggedIn(true)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      setloggedIn(false)
      history.push('/login')
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
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

        <ProtectedRoute
          component={Movies}
          path='/movies'
          loggedIn={loggedIn}
          onSubmit={handleFilmSearch}
          moviesList={moviesList}
        />

        <ProtectedRoute
          component={SavedMovies}
          path='/saved-movies'
          loggedIn={loggedIn}
        />

        <ProtectedRoute
          component={Profile}
          path='/profile'
          loggedIn={loggedIn}
          handleLogOut={handleLogOut}
          onSubmit={handleProfileUpdate}
          serverErrorMessage={serverErrorMessage}
        />

        <Route exact path="/">
          <Main/>
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
