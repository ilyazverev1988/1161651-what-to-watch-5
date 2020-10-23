import React, {PureComponent, createRef, Fragment} from "react";

export default class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      playFilm: true,
    };
    this._handleClickPause = this._handleClickPause.bind(this);
    this._handleClickFullscreen = this._handleClickFullscreen.bind(this);
  }

  _handleClickPause(evt) {
    evt.preventDefault();
    const {playFilm} = this.state;
    if (playFilm) {
      this.setState({playFilm: false});
    } else {
      this.setState({playFilm: true});
    }
  }

  _handleClickFullscreen(evt) {
    evt.preventDefault();
    const video = this._videoRef.current;
    video.requestFullscreen();
  }

  componentDidMount() {
    const {film} = this.props;
    const {linkFullVideo} = film;
    const video = this._videoRef.current;
    video.src = linkFullVideo;
    video.play();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {playFilm} = this.state;
    playFilm ? video.play() : video.pause();
    video.addEventListener(`play`, () => {
      this.setState({playFilm: true});
    });
    video.addEventListener(`pause`, () => {
      this.setState({playFilm: false});
    });
  }

  render() {
    const {playFilm} = this.state;
    const {film} = this.props;
    return (
      <div className="player">
        <video ref={this._videoRef} className="player__video" poster="img/player-poster.jpg"/>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div ref={this._timeRef} className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button onClick={this._handleClickPause} type="button" className="player__play">
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

            <button onClick={this._handleClickFullscreen} type="button" className="player__full-screen">
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


