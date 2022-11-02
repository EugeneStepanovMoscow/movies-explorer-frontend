import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
// перевод кода ошибки от сервера в сообщение
import serverErrorCode2Message from '../../utils/serverErrorCode2Message';
import requestProcessing from '../../utils/requestProcessing';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  // стейт переменная вошедшего пользователя
  const [currentUser, setCurrentUser] = useState({})
  //стейт переменная статуса входа пользавателя в систему
  const [loggedIn, setLoggedIn] = useState(false)
  // переменная ответов от сервера
  const [serverErrorMessage, setServerErrorMessage] = useState('')
  //стейт переменная массива информации о фильмах
  const [moviesList, setMoviesList] = useState([])

  const [savedMoviesList, setSavedMoviesList] = useState([])

  //хук перемещения между страницами
  const navigate= useNavigate()


  //функция регистарции пользователя на сервере
  function handleRegister(name, email, password) {
    mainApi.register(email, password, name)
      .then((res) => {
        handleLogin(email, password)
        setSavedMoviesList([])
      })
      .catch((err) => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  function handleLogin(email, password) {
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
  }

  // функция выхода пользователя
  function handleLogOut() {
    setLoggedIn(false)
    setServerErrorMessage('')
    setSavedMoviesList([])
    setMoviesList([])
    setCurrentUser({})
    localStorage.removeItem('jwt')
    navigate('login')
  }

  function handleProfileUpdate(name, email) {
    const token = localStorage.getItem('jwt');
    mainApi.profileUpdate(name, email, token)
      .then(res => {
        setCurrentUser({name: res.user.name, email: res.user.email})
        setServerErrorMessage(res.message)
        // console.log(res.code)
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
  }

  function handleFilmSearch(req) {
    movieApi.getMovies()
      .then(res => {
        setMoviesList(requestProcessing(req, res))
      })
      .catch(err => {
        setServerErrorMessage(serverErrorCode2Message(err.status))
      })
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
    // debugger
    // setsavedMoviesListList([])
    mainApi.getUserMovies(localStorage.getItem('jwt'))
      .then(res => {
        setSavedMoviesList(res)

        // res.forEach((movie) => {
        //    console.log(movie.movieId)
        //   //  setsavedMoviesListList([...savedMoviesListList, movie.movieId]);
        //    setsavedMoviesList(oldArray => [...oldArray, movie.movieId]);
        //   })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Запрос данных пользователя с сервера при старте и перезагрузке
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.jwtCheck(token)
        .then((res) => {
          setCurrentUser({name: res.dataFromDB.name, email: res.dataFromDB.email, id: res.dataFromDB._id})
          setServerErrorMessage('')
          // navigate('movies')
          setLoggedIn(true)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      setLoggedIn(false)
      navigate('')
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      getUserMovies();
    }
  }, [loggedIn])


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="register"
          element={<Register
                     onRegister={handleRegister}
                     serverErrorMessage={serverErrorMessage}/>}>
        </Route>

        <Route
          path="login"
          element={<Login
                    onLogin={handleLogin}
                    serverErrorMessage={serverErrorMessage}
                    loggedIn={loggedIn}/>}>
        </Route>

        <Route
          path='movies'
          element={<ProtectedRoute
                    component={Movies}
                    loggedIn={loggedIn}
                    onSubmit={handleFilmSearch}
                    moviesList={moviesList}
                    savedMoviesList={savedMoviesList}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                    />}>
        </Route>

        <Route
          path='saved-movies'
          element={<ProtectedRoute
                  component={SavedMovies}
                  moviesList={savedMoviesList}
                  deleteMovie={deleteMovie}
                  // path='/saved-movies'
                  loggedIn={loggedIn}/>}>
        </Route>

        <Route
          path='profile'
          element={<ProtectedRoute
                    component={Profile}
                    // path='/profile'
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
          exact path=""
          element={<Main/>}>
        </Route>

      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
