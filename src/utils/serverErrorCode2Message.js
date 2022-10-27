import React from "react";

function serverErrorCode2Message(code) {
  if (code === 400) {
      return 'Введены некорректные данные';
  } else if (code === 409) {
      return 'Пользователь с таким email уже существует';
  } else {
      return 'На сервере произошла ошибка';
  }
}

export default serverErrorCode2Message

// doublingEmail: 'Пользователь с таким email уже существует',
// uncorrectData: 'Введены некорректные данные',
// uncorrectPassword: 'Введен неверный пароль',
// uncorrectEmail: 'Введен некорректный email',
// uncorrectURL: 'Введена некорректная ссылка',
// noRights: 'Нет прав для удаления фильма',
// notFoundFilm: 'Фильм не найде',
// notFoundUser: 'Пользователь не найден в базе',
// notFoundToken: 'Токен не найден, зарегистрируйтесь',
// notFoundPage: 'Страница не найдена',
// tokenVerification: 'Ошибка верификации токена',
// serverErr: 'На сервере произошла ошибка',
