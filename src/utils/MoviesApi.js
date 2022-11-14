import constants from "./constants";

function responseCheck(res) {
  if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res);
    }
}

  // запрос проверки токена
  export function getMovies() {
    return fetch(constants.MovieApiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      })
      .then(res => responseCheck(res))
    }
