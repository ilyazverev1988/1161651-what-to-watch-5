import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const AuthScreen = (props) => {
  const {errorEmail, errorPassword, errorAuthorization, handleChangePassword, handleChangeEmail, handleSubmit} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={`/`} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__message">
            <p>{errorEmail || errorAuthorization}</p>
          </div>
          <div className="sign-in__fields">
            <div className={errorEmail === `` ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
              <input onChange={handleChangeEmail} className="sign-in__input"
                placeholder="Email address" name="user-email"
                id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange={handleChangePassword} className="sign-in__input" type="password" placeholder="Password"
                name="user-password"
                id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button disabled={errorEmail || errorPassword || errorAuthorization} className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={`/`} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

AuthScreen.propTypes = {
  errorEmail: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  errorAuthorization: PropTypes.string.isRequired,
};

export default AuthScreen;
