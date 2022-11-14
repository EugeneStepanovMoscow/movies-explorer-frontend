import constants from "./constants";

function headersSet(token) {
  return {
    'authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

function responseCheck(res) {
  if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res);
    }
}

// запрос проверки токена
export function jwtCheck(token) {
  return fetch(`${constants.MainApiBaseUrl}users/me`, {
    method: 'GET',
    headers: headersSet(token),
    })
    .then(res => responseCheck(res))
}

// запрос на вход, получение токена
export function login(email, password) {
  return fetch(`${constants.MainApiBaseUrl}signin`, {
      method: 'POST',
      // headers: headersSet(token),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    })
    .then(res => responseCheck(res))
}

//-----------------Получение списка сохраненных фильмов пользователя
export function getUserMovies(token) {
  return fetch(`${constants.MainApiBaseUrl}movies`, {
      method: 'GET',
      headers: headersSet(token),
    })
    .then(res => responseCheck(res))
  }

//регистрация нового пользователя
export function register(email, password, name) {
  return fetch(`${constants.MainApiBaseUrl}signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      })
    })
    .then(res => responseCheck(res))
}

//---------------------Обновление прфиля
export function profileUpdate(newName, newEmail, token) {
    return fetch(`${constants.MainApiBaseUrl}users/me`, {
      method: 'PATCH',
       headers: headersSet(token),
       body: JSON.stringify({
         name: newName,
         email: newEmail
       })
     })
     .then(res => responseCheck(res))
  }

// ---------------------Сохранене фильмаа
export function saveMovie(movieInfo, token) {
    const imageUrl = constants.MovieImageUrl + movieInfo.image.url;
    const previewUrl = constants.MovieApiUrl + movieInfo.image.formats.thumbnail.url
    return fetch(`${constants.MainApiBaseUrl}movies`, {
      method: 'POST',
      headers: headersSet(token),
      body: JSON.stringify({
        country: movieInfo.country,
        director: movieInfo.director,
        duration: movieInfo.duration,
        year: movieInfo.year,
        description: movieInfo.description,
        image: imageUrl,
        trailerLink: movieInfo.trailerLink,
        thumbnail: previewUrl,
        movieId: movieInfo.id,
        nameRU: movieInfo.nameRU,
        nameEN: movieInfo.nameEN
      })
    })
    .then(res => responseCheck(res))
  }

// ---------------------Удаление фильма
export function deleteMovie(movieId, token) {
  return fetch(`${constants.MainApiBaseUrl}movies/${movieId}`, {
    method: 'DELETE',
    headers: headersSet(token)
  })
  .then(res => responseCheck(res))
}
