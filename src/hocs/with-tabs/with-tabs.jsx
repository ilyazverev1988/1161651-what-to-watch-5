import React, {PureComponent} from "react";
import propsForFilms from "../../prop-types/prop-types-for-films";
import propsForReviews from "../../prop-types/prop-types-for-reviws";

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
      const {film, reviews} = this.props;
      return (
        <Component {...this.props}
          Overview={Overview} Details={Details} Reviews={Reviews}
          handleClickOverview={this._handleClickOverview} handleClickDetails={this._handleClickDetails}
          handleClickReviews={this._handleClickReviews} film={film} reviews={reviews}>
        </Component>
      );
    }
  }
  WithTabs.propTypes = {
    film: propsForFilms,
    reviews: propsForReviews,
  };

  return WithTabs;
};

export default withTabs;
