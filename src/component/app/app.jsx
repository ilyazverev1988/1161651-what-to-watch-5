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
          render={() => (
            <AuthScreen/>
          )}
        />
        <Route exact path="/"
          render={() =>
            (<Mainscreen films={films}/>
            )}
        />
        <PrivateRoute exact path="/mylist" render={() => {
          return (
            <MyListWithActiveState films={films}/>);
        }}
        />
        <Route exact path="/films/:id"
          render={(prop) =>
            (<MoviePage {...prop} films={films}/>)}
        />
        <PrivateRoute exact path={`/films/:id/review`} render={(prop) => {
          return (
            <ReviewForMovie {...prop} films={films}/>);
        }}
        />
        <Route exact path="/player/:id"
          render={(prop) =>
            (<PlayerWithActiveState {...prop} films={films}/>
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
