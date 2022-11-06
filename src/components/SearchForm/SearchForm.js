import React, { useState, useEffect} from 'react';

function SearchForm ({
  onSubmit,
  isLoading,
  placeOfCall
})
  {

  const [isShortFilms, setIsShortFilms] = useState(false)
  const [request, setRequest] = useState({search: '', shortFilms: false});
  const [searchValue, setSearchValue] = useState('')
  const [shortFilmsStatus, setShortFilmsStatus] = useState(false)

  const oldReq = JSON.parse(localStorage.getItem('req'))

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(request)
  }

  function changeShortFilmsStatus() {
    setIsShortFilms(!shortFilmsStatus)
    setShortFilmsStatus(!shortFilmsStatus)
  }

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (placeOfCall ==='movies') {
      if (oldReq) {
        setSearchValue(oldReq.search)
        setShortFilmsStatus(true)
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
                checked={shortFilmsStatus}
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
