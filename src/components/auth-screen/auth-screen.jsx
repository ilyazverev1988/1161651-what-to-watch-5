import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../store/api-action";

const AuthScreen = (props) => {
  const {errorAuthorization, onSubmit} = props;
  const [internalState, setInternalState] = useState({
    errorEmail: ``,
    errorPassword: ``,
    inputEmail: ``,
    inputPassword: ``
  });

  let {errorEmail, errorPassword, inputEmail, inputPassword} = internalState;
  useEffect(()=>{
    validate();
  }, [inputEmail, inputPassword]);
  const validate = () => {
    if (!inputEmail) {
      errorEmail = `Please enter a valid email address`;
    }

    if (!inputPassword) {
      errorPassword = `Please enter a password`;
    } else {
      errorPassword = ``;
    }

    if (typeof inputEmail !== `undefined`) {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(inputEmail)) {
        errorEmail = `Please enter a valid email address`;
      } else {
        errorEmail = ``;
      }
    }

    setInternalState(
        Object.assign(
            {}, internalState, {
              errorEmail,
              errorPassword
            }));
  };

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
        <form action="#" className="sign-in__form" onSubmit={(evt)=>{
          evt.preventDefault();
          onSubmit({
            login: inputEmail,
            password: inputPassword,
          });
          validate();
        }}>
          <div className="sign-in__message">
            <p>{errorEmail || errorAuthorization}</p>
          </div>
          <div className="sign-in__fields">
            <div className={errorEmail === `` ? `sign-in__field` : `sign-in__field sign-in__field--error`}>
              <input onChange={(evt)=>{
                setInternalState(
                    Object.assign(
                        {}, internalState, {
                          inputEmail: evt.target.value
                        }));
              }} className="sign-in__input"
              placeholder="Email address" name="user-email"
              id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange={(evt)=>{
                setInternalState(
                    Object.assign(
                        {}, internalState, {
                          inputPassword: evt.target.value
                        }));
              }} className="sign-in__input" type="password" placeholder="Password"
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
  onSubmit: PropTypes.func,
  errorAuthorization: PropTypes.string.isRequired,
};

// export default AuthScreen;
const mapStateToProps = ({USER}) => ({
  errorAuthorization: USER.errorAuthorization
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
