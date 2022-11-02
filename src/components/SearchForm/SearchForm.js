import React, { useState, useEffect} from 'react';

function SearchForm ({
  onSubmit
})
  {

  const [isShortFilms, setIsShortFilms] = useState(false)
  const [request, setRequest] = useState({search: '', shortFilms: false});
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(request)
  }

  function changeShortFilmsStatus() {
    setIsShortFilms(!isShortFilms)
  }

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    setRequest({search: searchValue, shortFilms: isShortFilms})
  }, [searchValue, isShortFilms])

  return (
    <form
      className="searsh-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="searsh-form__fieldset">
        <div className="searsh-form__border">
          <div className="search-form_inp-region">
            <input
              className="searsh-form__input"
              type="search"
              placeholder="Фильм"
              required
              onChange={handleChange}
            />
            <button
              className="searsh-form__btn"
              type="image">
            </button>
          </div>
          <div className="search-form__btn-region">
            <label className="searsh-form__switch">
              <input
                className="searsh-form__checkbox"
                type="checkbox"
                onChange={changeShortFilmsStatus}
              />
            </label>
            <label className="search-form__text">Короткометражки</label>
          </div>
        </div>

      </fieldset>
    </form>
  )
}

export default SearchForm;
