import React, {Suspense}  from "react";
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
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withPlayerScreen from "../../hocs/with-player-screen/with-player-screen";

const PlayerWithActiveState = withPlayerScreen(Player);
const MyListWithActiveState = withActiveItem(MyList);

const App = (props) => {

  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) =>
            (<Mainscreen onListButtonClick={() => history.push(`/mylist`)}
              onFilmCardClick={() => history.push(`/films/2`)}
              onPlayButtonClick={() => history.push(`/player/:id`)}/>
            )}
        />
        <Route exact path="/login" component={AuthScreen}/>
        <Route exact path="/mylist"
          render={({history}) =>
            (<MyListWithActiveState films={films}
              onLogoLinkClick={() => history.push(`/`)}
              onFilmCardClick={() => history.push(`/films/2`)}/>)}
        />
        <Route exact path="/films/:id"
          render={({history})=>
            (<MoviePage reviews={reviews} films={films}
              onPlayButtonClick={() => history.push(`/player/:id`)}
              onListButtonClick={() => history.push(`/mylist`)}
              onFilmCardClick={() => history.push(`/films/2`)}
              onLogoLinkClick={() => history.push(`/`)}
              onAddReviewButtonClick = {()=>history.push(`/films/2/review`)}/>)}
        />
        <Route exact path="/films/:id/review"
          render={({history})=>
            (<ReviewForMovie films={films} onLogoLinkClick={() => history.push(`/`)}/>)}
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

export default App;
