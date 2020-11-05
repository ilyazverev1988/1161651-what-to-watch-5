import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";
import propsForReviews from "../../mocks/prop-types-for-reviws";
import TabsForMoviePageScreen from "../tabs-for-movie-page-screen/tabs-for-movie-page-screen";
import withTabs from "../../hocs/with-tabs/with-tabs";
import MoreLikeThisFilm from "../more-like-this-film/more-like-this-film";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {Link} from "react-router-dom";
import {addFilmToFavorite, fetchCommetsFilm} from "../../store/api-action";
import {store} from "../../index";
import {connect} from "react-redux";
import {returnFilmForID} from "../../utils";
import Avatar from "../avatar/avatar";

const MoreLikeFilms = withActiveItem(MoreLikeThisFilm);
const TabsInMoviePage = withTabs(TabsForMoviePageScreen);

export class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    store.dispatch(fetchCommetsFilm(id));
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      store.dispatch(fetchCommetsFilm(id));
    }
  }

  render() {
    const {films, reviews, authorizationStatus} = this.props;
    const id = this.props.match.params.id;
    const {nameFilm, genre, releaseYear, filmCover, poster} = returnFilmForID(id, films);
    const filmsByGenre = films.filter((film) => film.genre === genre).slice(0, 4);
    return (
      <Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={filmCover} alt={nameFilm}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to={`/`} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <Avatar/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{nameFilm}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{releaseYear}</span>
                </p>

                <div className="movie-card__buttons">

                  <Link to={`/player/${this.props.match.params.id}`} className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </Link>

                  <Link to={`/mylist`} onClick={()=>{
                    store.dispatch(addFilmToFavorite(id));
                  }} className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                    <span>My list</span>
                  </Link>
                  {authorizationStatus === `AUTH` ? <Link to={`/films/${this.props.match.params.id}/review`} href="add-review.html" className="btn movie-card__button">Add review</Link> : ``}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={nameFilm} width="218"
                  height="327"/>
              </div>

              <TabsInMoviePage film={returnFilmForID(id, films)} reviews={reviews}/>

            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoreLikeFilms films={filmsByGenre} />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

MoviePage.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  reviews: propsForReviews,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({DATA, USER}) => ({
  reviews: DATA.comments,
  authorizationStatus: USER.authorizationStatus
});

export default connect(mapStateToProps, null)(MoviePage);
