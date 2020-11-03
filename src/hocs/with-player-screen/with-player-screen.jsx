import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";

const withPlayerScreen = (Component) => {
  class WithPlayerScreen extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        playFilm: true,
        progressVideo: null,
        timeLeftFilm: null,
      };

      this._handleClickFullScreen = this._handleClickFullScreen.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handlePlayFilm = this._handlePlayFilm.bind(this);
      this._handlePauseFilm = this._handlePauseFilm.bind(this);
    }

    _handleClickFullScreen(evt) {
      evt.preventDefault();
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _handleTimeUpdate() {
      const video = this._videoRef.current;
      this.setState({
        progressVideo: video.currentTime * 100 / video.duration,
        timeLeftFilm: video.duration - video.currentTime,
      });
    }

    _handlePlayFilm() {
      this.setState({
        playFilm: true
      });
    }

    _handlePauseFilm() {
      this.setState({
        playFilm: false
      });
    }

    componentDidMount() {
      const {films} = this.props;
      const id = this.props.match.params.id - 1;
      const film = films[id];
      const {linkFullVideo} = film;
      const video = this._videoRef.current;
      video.src = linkFullVideo;
      video.play();
    }

    componentDidUpdate(prevProps, prevState) {
      const video = this._videoRef.current;
      const {playFilm} = this.state;
      if (this.state.playFilm !== prevState.playFilm) {
        if (playFilm) {
          video.play();
        } else {
          video.pause();
        }
      }
    }

    render() {
      const {playFilm, progressVideo, timeLeftFilm} = this.state;
      const {films} = this.props;
      const id = this.props.match.params.id - 1;
      const film = films[id];

      return (
        <Component {...this.props} playFilm={playFilm} progressVideo={progressVideo} timeLeftFilm={timeLeftFilm}
          film={film} handleClickFullScreen={this._handleClickFullScreen}
          handleTimeUpdate={this._handleTimeUpdate} handlePlayFilm={this._handlePlayFilm}
          handlePauseFilm={this._handlePauseFilm}>
          <video ref={this._videoRef} onTimeUpdate={this._handleTimeUpdate}
            onPause={this._handlePauseFilm}
            onPlay={this._handlePlayFilm}
            className="player__video"
            poster={film.poster}/>
        </Component>
      );
    }
  }

  WithPlayerScreen.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
  };

  return WithPlayerScreen;
};

export default withPlayerScreen;
