import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        Overview: true,
        Details: false,
        Reviews: false
      };
      this._handleClickOverview = this._handleClickOverview.bind(this);
      this._handleClickDetails = this._handleClickDetails.bind(this);
      this._handleClickReviews = this._handleClickReviews.bind(this);
    }

    _handleClickOverview(evt) {
      evt.preventDefault();
      this.setState({Overview: true, Details: false, Reviews: false});
    }

    _handleClickDetails(evt) {
      evt.preventDefault();
      this.setState({Overview: false, Details: true, Reviews: false});
    }

    _handleClickReviews(evt) {
      evt.preventDefault();
      this.setState({Overview: false, Details: false, Reviews: true});
    }

    render() {
      const {Overview, Details, Reviews} = this.state;
      const {films, reviews} = this.props;
      return (
        <Component {...this.props}
          Overview={Overview} Details={Details} Reviews={Reviews}
          handleClickOverview={this._handleClickOverview} handleClickDetails={this._handleClickDetails}
          handleClickReviews={this._handleClickReviews} films={films} reviews={reviews}>
        </Component>
      );
    }
  }
  WithTabs.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
    reviews: propsForReviews,
  };

  return WithTabs;
};

export default withTabs;
