import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/prop-types-for-films";

class MyList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {filmActive: ``};
  }

  render() {
    const {films, onFilmCardClick, onLogoLinkClick} = this.props;
    const myFilm = films.slice(0, 4);
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a onClick={(evt)=>{
              evt.preventDefault();
              onLogoLinkClick();
            }} href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {myFilm.map((film) => <SmallMovieCard onFilmCardClick={onFilmCardClick} key={film.nameFilm} film={film} onMouseEnterCard={()=>{
              this.setState({filmActive: film.nameFilm});
            }}/>)}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a onClick={(evt)=>{
              evt.preventDefault();
              onLogoLinkClick();
            }} href="main.html" className="logo__link logo__link--light">
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
    );
  }
}

MyList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onLogoLinkClick: PropTypes.func.isRequired
};

export default MyList;
