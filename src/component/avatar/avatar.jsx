import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ButtonShowMore} from "../button-show-more/button-show-more";

const Avatar = (props) => {
  const {userData, authorizationStatus} = props;
  const avatarUrl = userData.avatar_url;
  return (
    <Fragment>
      {authorizationStatus === `AUTH` ?
        <Fragment>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </Fragment> : ``}
    </Fragment>
  );
};

const mapStateToProps = ({USER}) => ({
  userData: USER.userData,
  authorizationStatus: USER.authorizationStatus
});

export {Avatar};
export default connect(mapStateToProps, null)(Avatar);
