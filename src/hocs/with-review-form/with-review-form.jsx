import React, {PureComponent} from "react";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        reviewText: ``,
      };
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {

      return (
        <Component handleSubmit={this._handleSubmit} handleFieldChange={this._handleFieldChange}/>
      );
    }
  }
  return WithReviewForm;
};

export default withReviewForm;
