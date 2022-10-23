import React from 'react';

function SearchForm ()
{
  return (
    <form
      className="searsh-form"
      // name={`form-pattern-${formName}`}
      // id={`form-pattern-${formName}`}
      // onSubmit={handleSubmit}
    >
      <fieldset className="searsh-form__fieldset">
        <div className="searsh-form__border">
          <div className="search-form_inp-region">
            <input
              className="searsh-form__input"
              type="search"
              // name="email"
              // type="email"
              placeholder="Фильм"
              required
              // value={name || ''}
              // onChange={handleChange}
            />
            <button className="searsh-form__btn" type="image"></button>
          </div>
          <div className="search-form__btn-region">
            {/* <button className="searsh-form__btn" type="image"></button> */}
            <lable className="searsh-form__switch">
              <input className="searsh-form__checkbox" type="checkbox"/>
            </lable>
            <label className="search-form__text">Короткометражки</label>
          </div>
        </div>

      </fieldset>
    </form>
  )
}

export default SearchForm;
