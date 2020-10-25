import React, {PureComponent, createRef, Fragment} from "react";
import {returnElapsedTime} from "../../utils";

export default class Player extends PureComponent {
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
    const {film} = this.props;
    const {linkFullVideo} = film;
    const video = this._videoRef.current;
    video.src = linkFullVideo;
    video.play();
  }

  componentDidUpdate(prevState) {
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
    const {film} = this.props;

    return (
      <div className="player">
        <video ref={this._videoRef} onTimeUpdate={this._handleTimeUpdate}
               onPause={this._handlePauseFilm}
               onPlay={this._handlePlayFilm}
               className="player__video"
               poster={film.poster}/>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={`${progressVideo}`} max="100"/>
              <div className="player__toggler" style={{left: `${progressVideo}%`}}>Toggler</div>
            </div>
            <div ref={this._timeRef} className="player__time-value">{returnElapsedTime(timeLeftFilm)}</div>
          </div>

          <div className="player__controls-row">
            <button onClick={playFilm ? this._handlePauseFilm : this._handlePlayFilm} type="button"
                    className="player__play">
              {!playFilm && (
                <Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Fragment>)}
              {playFilm && (
                <Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                  <span>Play</span>
                </Fragment>)}
            </button>
            <div className="player__name">{film.nameFilm}</div>

            <button onClick={this._handleClickFullScreen} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


