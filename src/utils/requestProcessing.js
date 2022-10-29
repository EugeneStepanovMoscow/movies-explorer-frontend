function requestProcessing(req, movieDataBase) {
  return movieDataBase.filter(movie => movie.nameRU.toLowerCase().includes(req.search.toLowerCase()))
}

export default requestProcessing
