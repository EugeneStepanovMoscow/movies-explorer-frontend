import React from 'react';
import searchIcon from '../../images/icon-search.svg'
import btnImg from '../../images/btn_search.svg';

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
          <input
            className="searsh-form__input"
            type="search"
            // name="email"
            // type="email"
            placeholder="Фильм"
            // required
            // value={name || ''}
            // onChange={handleChange}
          />
          <div className="search-form__btn-region">
            <button className="searsh-form__btn" type="image">
              {/* <image className="searsh-form__btn-image" src={btnImg}/> */}
            </button>
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
