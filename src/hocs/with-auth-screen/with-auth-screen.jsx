import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-action";

const withAuthScreen = (Component) => {
  class WithAuthScreen extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        errorEmail: ``,
        errorPassword: ``,
        inputEmail: ``,
        inputPassword: ``
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    validate() {
      let {inputEmail, inputPassword} = this.state;
      let errorEmail;
      let errorPassword;
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

      this.setState({
        errorEmail,
        errorPassword
      });
    }

    componentDidMount() {
      this.validate();
    }

    _handleSubmit(evt) {
      const {onSubmit} = this.props;
      const {inputEmail, inputPassword} = this.state;
      evt.preventDefault();
      onSubmit({
        login: inputEmail,
        password: inputPassword,
      });
    }

    _handleChangeEmail(evt) {
      let {inputEmail} = this.state;
      inputEmail = evt.target.value;
      this.setState({inputEmail});
      this.validate();
    }

    _handleChangePassword(evt) {
      let {inputPassword} = this.state;
      inputPassword = evt.target.value;
      this.setState({inputPassword});
      this.validate();
    }

    componentDidUpdate() {
      this.validate();
    }

    render() {
      const {errorEmail, errorPassword} = this.state;
      let {errorAuthorization} = this.props;
      return (
        <Component {...this.props} errorEmail={errorEmail} errorPassword={errorPassword}
          errorAuthorization={errorAuthorization}
          handleChangeEmail={this._handleChangeEmail} handleChangePassword={this._handleChangePassword}
          handleSubmit={this._handleSubmit}/>
      );
    }
  }

  const mapStateToProps = ({USER}) => ({
    errorAuthorization: USER.errorAuthorization
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    }
  });

  WithAuthScreen.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    errorAuthorization: PropTypes.string.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthScreen);
};

export default withAuthScreen;
