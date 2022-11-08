import React, { useState, useEffect} from 'react';

function SearchForm ({
  onSubmit,
  isLoading,
  placeOfCall
})
  {

  const [isShortFilms, setIsShortFilms] = useState(false)
  const [request, setRequest] = useState({search: '', shortFilms: true});
  const [searchValue, setSearchValue] = useState('');
  const [isFerstSearch, setIsFerstSearch] = useState(true);

  const oldReq = JSON.parse(localStorage.getItem('req'))

  function handleSubmit(e) {
    e.preventDefault()
    if (isFerstSearch) {
      setRequest({search: oldReq.search, shortFilms: oldReq.shortFilms})
      onSubmit({search: oldReq.search, shortFilms: oldReq.shortFilms})
      setIsFerstSearch(false)
    } else {
      onSubmit(request)
    }
  }

  function changeShortFilmsStatus() {
    setIsFerstSearch(false)
    setIsShortFilms(!isShortFilms)
  }

  function handleChange(e) {
    setIsFerstSearch(false)
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (placeOfCall ==='movies') {
      if (oldReq) {
        setSearchValue(oldReq.search)
        setIsShortFilms(oldReq.shortFilms)
      }
    }
  },[])


  useEffect(() => {
    setRequest({search: searchValue, shortFilms: isShortFilms})
  }, [searchValue, isShortFilms])

  return (
    <form
      className="searsh-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="searsh-form__fieldset" disabled={isLoading ? true : false}>
        <div className="searsh-form__border">
          <div className="search-form_inp-region">
            <input
              className="searsh-form__input"
              type="search"
              placeholder="Фильм"
              required
              value={searchValue}
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
                checked={isShortFilms}
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
