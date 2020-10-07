import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Mainscreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import MyList from "../my-list-screen/my-list-screen";
import MoviePage from "../movie-page-screen/movie-page-screen";
import ReviewForMovie from "../review-for-movie-screen/review-for-movie-screen";
import Player from "../player-screen/player-screen";
import propsForFilms from "../../mocks/prop-types-for-films";
import reviews from "../../mocks/reviews";

const App = (props) => {

  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Mainscreen films={films}/>
        </Route>
        <Route exact path="/login" component={AuthScreen}/>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id">
          <MoviePage reviews={reviews} films={films}/>
        </Route>
        <Route exact path="/films/:id/review" component={ReviewForMovie}/>
        <Route exact path="/player/:id" component={Player}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default App;
