import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Avatar = (props) => {
  const {userData, authorizationStatus} = props;
  const avatarUrl = userData.avatar_url;
  return (
    <Fragment>
      {authorizationStatus === `AUTH` ?
        <Fragment>
          <div className="user-block">
            <div className="user-block__avatar">
              <Link to={`/mylist`}>
                <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
              </Link>
            </div>
          </div>
        </Fragment> :
        <Fragment>
          <div className="user-block">
            <Link to={`/login`} href="sign-in.html" className="user-block__link">Sign in</Link>
          </div>
        </Fragment>}
    </Fragment>
  );
};

Avatar.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(undefined)]),
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  userData: USER.userData,
  authorizationStatus: USER.authorizationStatus
});

export {Avatar};
export default connect(mapStateToProps, null)(Avatar);
