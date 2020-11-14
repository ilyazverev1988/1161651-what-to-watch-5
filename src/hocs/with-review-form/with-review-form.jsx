import React, {PureComponent} from "react";
import {createAPI} from "../../services/api";
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: `5`,
        reviewText: ``,
        error: ``,
        isSendButtonEnable: false
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._handlePostReview = this._handlePostReview.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    _handlePostReview() {
      const {rating, reviewText} = this.state;
      const {id} = this.props;
      this.setState({isSendButtonEnable: false});
      const api = createAPI();
      api.post(`/comments/${id}`, {rating, comment: reviewText}).
        then(()=>{
          this.setState({error: ``});
          history.back();
        }).
        catch(()=>{
          this.setState({
            isSendButtonEnable: true,
            error: true});
        });
    }

    componentDidUpdate() {
      const {rating, reviewText} = this.state;
      if (reviewText.length < 50 || reviewText.length > 400 || rating === ``) {
        this.setState({isSendButtonEnable: false});
      } else {
        this.setState({isSendButtonEnable: true});
      }
    }

    render() {
      const {error, isSendButtonEnable} = this.state;
      return (
        <Component handleSubmit={this._handleSubmit} isSendButtonEnable={isSendButtonEnable} error={error} handlePostReview={this._handlePostReview} handleFieldChange={this._handleFieldChange}/>
      );
    }
  }

  WithReviewForm.propTypes = {
    id: PropTypes.string
  };

  return WithReviewForm;
};

export default withReviewForm;
