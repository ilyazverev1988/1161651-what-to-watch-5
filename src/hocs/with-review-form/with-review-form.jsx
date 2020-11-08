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
        error: ` `,
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
      let form = document.querySelector(`.add-review__form`);
      let allElements = form.elements;
      for (let element of allElements) {
        element.disabled = true;
      }
      const api = createAPI();
      api.post(`/comments/${id}`, {rating, comment: reviewText}).
        then(()=>{
          this.setState({error: ``});
          history.back();
        }).
        catch(()=>{
          for (let element of allElements) {
            element.disabled = false;
          }
          this.setState({error: true});
        });
    }

    componentDidMount() {
      document.querySelector(`.add-review__btn`).disabled = true;
    }

    componentDidUpdate() {
      const {rating, reviewText} = this.state;
      document.querySelector(`.add-review__btn`).disabled = reviewText.length < 50 || reviewText.length > 400 || rating === ``;
    }

    render() {
      const {error} = this.state;
      return (
        <Component handleSubmit={this._handleSubmit} error={error} handlePostReview={this._handlePostReview} handleFieldChange={this._handleFieldChange}/>
      );
    }
  }

  WithReviewForm.propTypes = {
    id: PropTypes.string.isRequired
  };

  return WithReviewForm;
};

export default withReviewForm;
