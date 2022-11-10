import constants from "./constants"

function requestProcessing(req, filmsDataBase) {
  if (req.shortFilms) {
    const shortFilmsDataBase = filmsDataBase.filter(movie => movie.duration <= constants.shortMoveDuration)
    return shortFilmsDataBase.filter(movie => movie.nameRU.toLowerCase().includes(req.search.toLowerCase()))
  }
  return filmsDataBase.filter(movie => movie.nameRU.toLowerCase().includes(req.search.toLowerCase()))
}

export default requestProcessing
