import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import * as mainApi from '../../utils/mainApi'
import * as movieApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// ипорт компонентов
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ErrPage from '../ErrPage/ErrPage';
import InfoMessageBox from '../InfoMessageBox/InfoMessageBox';
import messages from '../../utils/messages';
// перевод кода ошибки от сервера в сообщение
import serverErrorCode2Message from '../../utils/serverErrorCode2Message';
import requestProcessing from '../../utils/requestProcessing';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import constants from '../../utils/constants';

function App() {
  // стейт переменная вошедшего пользователя
  const [currentUser, setCurrentUser] = useState({})
  //стейт переменная статуса входа пользавателя в систему
  const [loggedIn, setLoggedIn] = useState(false)
  // переменная проверки токена на валидность
  const [isTokenChecked, setIsTokenChecked] = useState(false)
  // переменная ответов от сервера
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  //стейт переменная массива информации о фильмах
  const [moviesList, setMoviesList] = useState([])
  // стейт переменная массива сохраненных фильмов
  const [savedMoviesList, setSavedMoviesList] = useState([])
  // стейт переменная получения списка сохраненных фильмов
  const [isSavedMoviesListChecked, setIsSavedMoviesListChecked] = useState(false)
  // стейт переменная масива поиска в сахраненных фильмах
  const [savedMoviesListSearch, setSavedMoviesListSearch] = useState([])
  // стейт переменная загрузки фильмов
  const [isLoading, setIsLoading] = useState(false);
  // стейт переменная первого поиска
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  // стейт переменная массива фильмов первого запроса
  const [moviesDB, setMoviesDB] = useState([])
  const [isInfoMessageOpen, setIsInfoMessageOpen] = useState(false)
  //хук перемещения между страницами
  const navigate= useNavigate()

  //функция регистарции пользователя на сервере
  function handleRegister(name, email, password) {
    setIsLoading(true)
    mainApi.register(email, password, name)
      .then((res) => {
        handleLogin(email, password)
        setSavedMoviesList([])
      })
      .catch((err) => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
      .finally(() => setIsLoading(false))
  }

  function handleLogin(email, password) {
    setIsLoading(true)
    mainApi.login(email, password)
      .then((res) => {
        setCurrentUser({name: res.userFromDB.name, email: res.userFromDB.email, id: res.userFromDB._id})
        setServerErrorMessage('')
        localStorage.setItem('jwt', res.token)
        navigate('movies')
        // window.location.reload()
        setLoggedIn(true)
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
      .finally(() => setIsLoading(false))
  }

  // функция выхода пользователя
  function handleLogOut() {
    setLoggedIn(false)
    setServerErrorMessage('')
    setSavedMoviesList([])
    setMoviesList([])
    setCurrentUser({})
    setIsFirstSearch(true)
    setMoviesDB([])
    localStorage.removeItem('jwt')
    localStorage.removeItem('req')
    localStorage.removeItem('result')
    navigate('/')
  }

  function handleProfileUpdate(name, email) {
    setIsLoading(true)
    const token = localStorage.getItem('jwt');
    mainApi.profileUpdate(name, email, token)
      .then(res => {
        setCurrentUser({name: res.user.name, email: res.user.email})
        setServerErrorMessage(messages.profileUpdate)
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
      .finally(() => setIsLoading(false))

  }

// проверка на пустой ответ
  function isNotFound(req) {
   if (req.length === 0) {
    setServerErrorMessage(messages.error.notFoundMovies)
    }
  }


// поиск фильмов на сттранице movies
  function handleFilmSearch(req) {
    localStorage.setItem('req', JSON.stringify(req))
    setSavedMoviesListSearch([])
    setIsLoading(true)
    if (isFirstSearch) {
      movieApi.getMovies()
        .then(res => {
          setMoviesDB(res)
          setIsFirstSearch(false)
          let data = requestProcessing(req, res)
          isNotFound(data)
          setMoviesList(data)
          localStorage.setItem('result', JSON.stringify(data))
        })
        .catch(err => {
          setServerErrorMessage(serverErrorCode2Message(err.status))
        })
        .finally(() => setIsLoading(false))
    } else {
      let data = requestProcessing(req, moviesDB)
      isNotFound(data)
      setMoviesList(data)
      localStorage.setItem('result', JSON.stringify(data))
      setIsLoading(false)
    }
  }

  function handleSavedFilmSearch(req) {
    let data = requestProcessing(req, savedMoviesList)
    isNotFound(data)
    setSavedMoviesListSearch(data)
  }

  function handleBack() {
    navigate(-1)
  }

  function saveMovie(movieInfo) {
    const token = localStorage.getItem('jwt');
    mainApi.saveMovie(movieInfo, token)
    .then(res => {
      setSavedMoviesList([...savedMoviesList, res])
    })
    .catch(err => {
      console.log(err)
    })
  }

  function deleteMovie(savedMovie) {
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovie(savedMovie._id, token)
      .then(res => {
        getUserMovies()
      })
      .catch(err => {
        console.log(err)
      })
  }

  function getUserMovies() {
    mainApi.getUserMovies(localStorage.getItem('jwt'))
      .then(res => {
        setSavedMoviesList(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsSavedMoviesListChecked(true)})
  }

  // Запрос данных пользователя с сервера и из локального хранилища при старте и перезагрузке
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.jwtCheck(token)
        .then((res) => {
          setCurrentUser({name: res.dataFromDB.name, email: res.dataFromDB.email, id: res.dataFromDB._id})
          setServerErrorMessage('')
          setLoggedIn(true)
        })
        .catch(err => {
          setServerErrorMessage(messages.error.tokenError)
          handleLogOut()
        })
        .finally(() => setIsTokenChecked(true))
    } else {
      handleLogOut()
      setIsTokenChecked(true)
    }
    setMoviesList(JSON.parse(localStorage.getItem('result')))
  }, [])

  useEffect(() => {
    if (loggedIn) {
      getUserMovies();
    }
  }, [loggedIn])

  useEffect(() => {
    if (serverErrorMessage.length > 0) {
      setIsInfoMessageOpen(true)
      setTimeout(() => {
        setIsInfoMessageOpen(false)
        setServerErrorMessage('')
      }, constants.lifetime)
    } else {
      setIsInfoMessageOpen(false)
    }
  },[serverErrorMessage])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* отрисовываем только после проверки токена*/}
      {isTokenChecked &&
        <Routes>
          <Route
            path='/register'
            element={!loggedIn
                      ? <Register
                        onRegister={handleRegister}
                        serverErrorMessage={serverErrorMessage}
                        isLoading={isLoading}/>
                      : <Navigate to='/movies'/>}>
          </Route>

          <Route
            path='/login'
            element={!loggedIn
                      ? <Login
                          onLogin={handleLogin}
                          serverErrorMessage={serverErrorMessage}
                          loggedIn={loggedIn}
                          isLoading={isLoading}/>
                      : <Navigate to='/movies'/>}>
          </Route>

          <Route
            path='/movies'
            element={<ProtectedRoute
                      component={Movies}
                      loggedIn={loggedIn}
                      onSubmit={handleFilmSearch}
                      moviesList={moviesList}
                      savedMoviesList={savedMoviesList}
                      saveMovie={saveMovie}
                      deleteMovie={deleteMovie}
                      isLoading={isLoading}
                      isSavedMoviesListChecked={isSavedMoviesListChecked}/>}>
          </Route>

          <Route
            path='/saved-movies'
            element={<ProtectedRoute
                    component={SavedMovies}
                    // при проверке отправляем сохраненные фильмы для отображения
                    // при старте страици отображаются все сохраненные пользователем фильмы
                    // не совсем понимаю повторное замечание
                    moviesList={savedMoviesListSearch.length > 0 ? savedMoviesListSearch : savedMoviesList}
                    deleteMovie={deleteMovie}
                    onSubmit={handleSavedFilmSearch}
                    loggedIn={loggedIn}
                    isLoading={isLoading}/>}>
          </Route>

          <Route
            path='/profile'
            element={<ProtectedRoute
                      component={Profile}
                      isLoading={isLoading}
                      loggedIn={loggedIn}
                      handleLogOut={handleLogOut}
                      onSubmit={handleProfileUpdate}
                      serverErrorMessage={serverErrorMessage}/>}>
          </Route>

          <Route
            path="*"
            element={<ErrPage
                      err = {'404'}
                      errText = {'Страница не найдена'}
                      handleBack = {handleBack}/>}>
          </Route>

          <Route
            exact path="/"
            element={<Main
                      loggedIn={loggedIn}/>}>
          </Route>

        </Routes>
      }
      <InfoMessageBox messageText={serverErrorMessage} messageStatus={'ok'} active={isInfoMessageOpen}/>

    </CurrentUserContext.Provider>
  );
}

export default App;
