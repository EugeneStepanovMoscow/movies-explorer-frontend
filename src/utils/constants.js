const constants = {
  MovieApiUrl:'https://api.nomoreparties.co/beatfilm-movies',
  MovieImageUrl: 'https://api.nomoreparties.co',
  MainApiBaseUrl:'https://api.steugene.nomorepartiesxyz.ru/',
  // объекты констант обображения фильмов в зависимости от ширины экрана
  movieShowConstants: {
    less480: {InitialQuantity: 5, AddedQuantity: 2},
    less768: {InitialQuantity: 8, AddedQuantity: 2},
    more768: {InitialQuantity: 12, AddedQuantity: 3}
  }
}

export default constants
