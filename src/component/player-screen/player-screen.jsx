import React, {Fragment} from "react";
import {returnElapsedTime} from "../../utils";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/prop-types-for-films";


const Player = (props) => {
  const {playFilm, progressVideo, timeLeftFilm, film, handleClickFullScreen, handlePlayFilm, handlePauseFilm, children, history} = props;
  return (
    <Fragment>
      <div className="player">
        {children}

        <button onClick={()=>{
          history.goBack();
        }} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={`${progressVideo}`} max="100"/>
              <div className="player__toggler" style={{left: `${progressVideo}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{returnElapsedTime(timeLeftFilm)}</div>
          </div>

          <div className="player__controls-row">
            <button onClick={playFilm ? handlePauseFilm : handlePlayFilm} type="button"
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

            <button onClick={handleClickFullScreen} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Player.propTypes = {
  film: propsForFilms,
  history: PropTypes.object,
  playFilm: PropTypes.bool.isRequired,
  progressVideo: PropTypes.number,
  timeLeftFilm: PropTypes.number,
  handleClickFullScreen: PropTypes.func.isRequired,
  handlePlayFilm: PropTypes.func.isRequired,
  handlePauseFilm: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Player;
