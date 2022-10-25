import React from 'react';
import HeaderLogin from '../HeaderLogin/HeaderLogin'

const name = 'Евгений'

function Profile ()
{
return (
  <>
    <HeaderLogin/>
    <main className='profile'>
      <h1 className='profile__greeting'>Привет, {name}!</h1>
      <form className='profile__form'>
        <div className='profile__info'>
          <p className='profile__title'>Имя</p>
          <input className='profile__input'
            name="name"
            type="text"
            required
            placeholder={name}
            // value={name}
            // onChange={handleChange}
          />
        </div>
        <div className='profile__info'>
          <p className='profile__title'>E-mail</p>
          <input className='profile__input'
            name="E-mail"
            type="email"
            required
            placeholder={name}
            // onChange={handleChange}
          />
        </div>
        <button className='prifile__btn prifile__btn-edit'>Редактровать</button>
        <button className='prifile__btn prifile__btn-exit'>Выйти из аккаунта</button>
      </form>
    </main>
  </>
)
}

export default Profile
