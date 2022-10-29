class API {
  constructor(url, headers) {
    this._baseUrl = url;
    this._headers = headers;
  }

  _makeRequest(promise) {
    return promise.then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response);
      }
    })
    .then((obj) => {
      return obj
    })
  }


  get() {
    const promise = fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    })
    return this._makeRequest(promise)
  }
}

const movieApi = new API('https://api.nomoreparties.co/beatfilm-movies', {
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
})

export default movieApi
