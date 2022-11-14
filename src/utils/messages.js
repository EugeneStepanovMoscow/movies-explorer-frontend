const messages = {
  error: {
    notEmpty: 'Поле должно быть заполнено',
    minNameLength: 'Имя должно быть больше 2 символов',
    maxNameLength: 'Имя должно быть меньше 30 символов',
    notEmail: 'Значение должно быть почтой',
    notName: 'Имя может содержит только латиницу, кириллицу, пробел или дефис',
    notPsswordLength: 'Значение пароля должно быть больше 3 символов',
    tokenError: 'Тоекн неверный, или повреждён',
    notFoundMovies: 'Фильмы не найдены',
    notCorrectData: 'Введены некорректные данные',
    doubleEmail: 'Пользователь с таким email уже существует',
    unregisteredUser: 'Пользователь не зарегистрирован или пароль неверный',
    tooManyRequests: 'Слишком много запросов на сервер. Повторите попытку позже',
    serverError: 'На сервере произошла ошибка'
  },

  success: 'Ok',

  profileUpdate: 'Информация о пользователе обновлена',
  profileCreate: 'Пользователь зарегистрирован',
}

export default messages



