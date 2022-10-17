import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';

// ипорт компонентов
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ErrPage from '../ErrPage/ErrPage';
import AboutMe from '../AboutMe/AboutMe';

function App() {
  //стейт переменная статуса входа пользавателя в систему
  const [loggedIn, setloggedIn] = React.useState(true)
  //стейт переменная массива информации о фильмах
  const [movies, setMovies] = React.useState([])
  //хук перемещения между страницами
  const history = useHistory()

  // Функция возврата на предыдущую страницу
  function handleBack () {
   history.goBack();
  }

  return (
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
        <Register/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/profile">
        <Profile/>
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
  );
}

export default App;
