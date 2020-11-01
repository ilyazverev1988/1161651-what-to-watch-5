import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Mainscreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list-screen/my-list-screen";
import MoviePage from "../movie-page-screen/movie-page-screen";
import ReviewForMovie from "../review-for-movie-screen/review-for-movie-screen";
import Player from "../player-screen/player-screen";
import propsForFilms from "../../mocks/prop-types-for-films";
import reviews from "../../mocks/reviews";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withPlayerScreen from "../../hocs/with-player-screen/with-player-screen";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const PlayerWithActiveState = withPlayerScreen(Player);
const MyListWithActiveState = withActiveItem(MyList);

const App = (props) => {

  const {films} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/login"
          render={({history}) => (
            <AuthScreen
              onLogoLinkClick={() => history.push(`/`)}
            />
          )}
        />
        <Route exact path="/"
          render={({history}) =>
            (<Mainscreen films={films} onListButtonClick={() => history.push(`/mylist`)}
              //onFilmCardClick={() => history.push(`/films/3`)}
              onPlayButtonClick={() => history.push(`/player/:id`)}/>
            )}
        />
        <PrivateRoute exact path="/mylist" render={({history}) => {
          return (
            <MyListWithActiveState films={films}
              onLogoLinkClick={() => history.push(`/`)}
              onFilmCardClick={() => history.push(`/films/2`)}
            />);
        }}
        />
        <Route exact path="/films/:id" location={props.location} key={props.location.key}
          render={(props) =>
            (<MoviePage {...props} key={props.location.key} reviews={reviews} films={films}
              /*onPlayButtonClick={() => history.push(`/player/:id`)}
              onListButtonClick={() => history.push(`/mylist`)}
              onFilmCardClick={() => history.push(`/films/1`)}
              onLogoLinkClick={() => history.push(`/`)}
              onAddReviewButtonClick={() => history.push(`/films/2/review`)}*//>)}
        />
        <PrivateRoute exact path={`/films/:id/review`} render={({history}) => {
          return (
            <ReviewForMovie films={films} onLogoLinkClick={() => history.push(`/`)}/>);
        }}
        />
        <Route exact path="/player/:id"
          render={({history}) =>
            (<PlayerWithActiveState film={films[0]}
              onExitButtonClick={() => history.goBack()}/>
            )}
        />

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(propsForFilms),
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});

export {App};
export default connect(mapStateToProps, null)(App);
