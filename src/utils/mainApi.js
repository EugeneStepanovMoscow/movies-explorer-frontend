// import constants from "./constants";

// class API {
//   constructor(url, regUrl, headers) {
//     this._baseUrl = url;
//     this._baseRegUrl = regUrl;
//     this._headers = headers;
//   }

//   _makeRequest(promise) {
//     return promise.then((response) => {
//       if (response.ok) {
//         return response.json()
//       } else {
//         return Promise.reject(response);
//       }
//     })
//     .then((obj) => {
//       return obj
//     })
//   }

//   //регистрация нового пользователя
//   register(email, password, name) {
//     const promise = fetch(`${this._baseRegUrl}signup`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         name: name,
//       })
//     })
//     return this._makeRequest(promise)
//   }

//   // запрос на вход, получение токена
//   // login(email, password) {
//   //   // const promise = fetch(`${this._baseRegUrl}/signin`, {
//   //   const promise = fetch(`${this._baseUrl}signin`, {
//   //     method: 'POST',
//   //     headers: this._headers,
//   //     body: JSON.stringify({
//   //       password: password,
//   //       email: email
//   //     })
//   //   })
//   //   return this._makeRequest(promise)
//   // }

// //---------------------Получение информации о пользователе
//   getPersonInfo() {
//     const promise = fetch(`${this._baseUrl}users/me`, {
//       method: 'GET',
//       headers: this._headers
//     })
//     return this._makeRequest(promise)
//   }

// //-----------------Получение списка сохраненных фильмов пользователя
//   getUserMovies() {
//     const promise = fetch(`${this._baseUrl}movies`, {
//       method: 'GET',
//       headers: this._headers
//     })
//     return this._makeRequest(promise)
//   }

// //---------------------Обновление прфиля
//   profileUpdate(newName, newEmail) {
//     const promise = fetch(`${this._baseUrl}users/me`, {
//       method: 'PATCH',
//        headers: this._headers,
//        body: JSON.stringify({
//          name: newName,
//          email: newEmail
//        })
//      })
//     return this._makeRequest(promise)
//   }

//   // ---------------------Сохранене фильмаа
//   saveMovie(movieInfo) {
//     const imageUrl = constants.movieApiBaseUrl + movieInfo.image.url;
//     const previewUrl = constants.movieApiBaseUrl + movieInfo.image.formats.thumbnail.url
//     const promise = fetch(`${this._baseUrl}movies`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
//         country: movieInfo.country,
//         director: movieInfo.director,
//         duration: movieInfo.duration,
//         year: movieInfo.year,
//         description: movieInfo.description,
//         image: imageUrl,
//         trailerLink: movieInfo.trailerLink,
//         thumbnail: previewUrl,
//         movieId: movieInfo.id,
//         nameRU: movieInfo.nameRU,
//         nameEN: movieInfo.nameEN
//       })
//     })
//     return this._makeRequest(promise)
//   }

// // ---------------------Удаление фильма
//   deleteMovie(movieId) {
//     const promise = fetch(`${this._baseUrl}movies/${movieId}`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//     return this._makeRequest(promise)
//   }

//   //запрос проверки токена
//   // jwtCheck(jwt) {
//   //   const promise = fetch(`${this._baseUrl}users/me`, {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       //'Authorization': `Bearer ${jwt}`
//   //       'authorization': jwt,
//   //     }
//   //   })
//   //   return this._makeRequest(promise)
//   // }


// //---------------------Получение карточки
//   // getCards() {
//   //   const promise = fetch(`${this._baseUrl}cards`, {
//   //     method: 'GET',
//   //     headers: this._headers
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //---------------------Получение информации о пользователе
//   // getPersonInfo() {
//   //   const promise = fetch(`${this._baseUrl}users/me`, {
//   //     method: 'GET',
//   //     headers: this._headers
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //---------------------Отправка нового аватара
//   // getAvatar(avatar) {
//   //   const promise = fetch(`${this._baseUrl}users/me/avatar`, {
//   //     method: 'PATCH',
//   //     headers: this._headers,
//   //     body: JSON.stringify({
//   //       avatar: avatar
//   //     })
//   //   })
//   // return this._makeRequest(promise)
//   // }
// //---------------------Добавление лайков на карточку
//   // addLikes(cardId) {
//   //   const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//   //     method: 'PUT',
//   //     headers: this._headers
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //----------------------Удаление лайков на карточку
//   // deleteLikes(cardId) {
//   //   const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//   //     method: 'DELETE',
//   //     headers: this._headers
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //изменение статуса лайка карточки
//   // changeLikeCardStatus(cardId, isLiked) {
//   //   if (isLiked) {
//   //     const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//   //       method: 'DELETE',
//   //       headers: this._headers
//   //     })
//   //     return this._makeRequest(promise)
//   //   } else {
//   //     const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
//   //       method: 'PUT',
//   //       headers: this._headers
//   //     })
//   //     return this._makeRequest(promise)
//   //   }
//   // }

// //---------------------Удаление карточки
//   // deleteCard(cardId) {
//   //   const promise = fetch(`${this._baseUrl}cards/${cardId}`, {
//   //     method: 'DELETE',
//   //     headers: this._headers
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //---------------------Отправка карточки
//   // sendCard(name, link) {
//   //   const promise = fetch(`${this._baseUrl}cards`, {
//   //     method: 'POST',
//   //     headers: this._headers,
//   //     body: JSON.stringify({
//   //       name: name,
//   //       link: link
//   //     })
//   //   })
//   //   return this._makeRequest(promise)
//   // }
// //---------------------Передача информации о профиле
//   // givePersonInfo(newName, newAbout) {
//   //   const promise = fetch(`${this._baseUrl}users/me`, {
//   //     method: 'PATCH',
//   //     headers: this._headers,
//   //     body: JSON.stringify({
//   //       name: newName,
//   //       about: newAbout
//   //     })
//   //   })
//   //   return this._makeRequest(promise)
//   // }



//   //запрос проверки токена
//   // jwtCheck(jwt) {
//   //   const promise = fetch(`${this._baseUrl}users/me`, {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       //'Authorization': `Bearer ${jwt}`
//   //       'authorization': jwt,
//   //     }
//   //   })
//   //   return this._makeRequest(promise)
//   // }

// }

// const token = localStorage.jwt

// const api = new API('https://mesto.nomoreparties.co/v1/cohort-40/', 'https://auth.nomoreparties.co', {
//  http://api.steugene.nomoredomains.sbs:3000/
//  http://localhost:3000/
// const mainApi = new API('http://localhost:3000/', 'http://localhost:3000/', {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json; charset=utf-8',
//   'authorization': localStorage.jwt // во все запросы добавляется токен из локального хранилища
// })

// export default mainApi

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
    return fetch(`${constants.mainApiBaseUrl}users/me`, {
      method: 'GET',
      headers: headersSet(token),
      })
      .then(res => responseCheck(res))
      .catch(err => console.log(err))
    }

// запрос на вход, получение токена
export function login(email, password) {
  return fetch(`${constants.mainApiBaseUrl}signin`, {
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
    .catch(err => console.log(err))
}

//-----------------Получение списка сохраненных фильмов пользователя
export function getUserMovies(token) {
  return fetch(`${constants.mainApiBaseUrl}movies`, {
      method: 'GET',
      headers: headersSet(token),
    })
    .then(res => responseCheck(res))
    .catch(err => console.log(err))
  }

//регистрация нового пользователя
export function register(email, password, name) {
  return fetch(`${constants.mainApiBaseUrl}signup`, {
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
    .catch(err => console.log(err))
}

//---------------------Обновление прфиля
export function profileUpdate(newName, newEmail, token) {
    return fetch(`${constants.mainApiBaseUrl}users/me`, {
      method: 'PATCH',
       headers: headersSet(token),
       body: JSON.stringify({
         name: newName,
         email: newEmail
       })
     })
     .then(res => responseCheck(res))
     .catch(err => console.log(err))
  }
