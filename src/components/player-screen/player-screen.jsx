import React, {Fragment, useState, useEffect, useRef} from "react";
import {returnElapsedTime, returnFilmForID} from "../../utils";
import PropTypes from "prop-types";
import propsForFilms from "../../prop-types/prop-types-for-films";


const Player = (props) => {
  const [internalState, setInternalState] = useState({
    playFilm: true,
    progressVideo: null,
    timeLeftFilm: null,
  });
  const {playFilm, progressVideo, timeLeftFilm} = internalState;
  const {films, history} = props;
  const id = props.match.params.id;
  const film = returnFilmForID(id, films);
  const video = useRef(null);
  useEffect(()=>{
    const {linkFullVideo} = film;
    video.current.src = linkFullVideo;
    video.current.play();
  }, []);

  useEffect(()=>{
    if (playFilm) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [playFilm]);

  return (
    <Fragment>
      <div className="player">
        <video ref={video} onTimeUpdate={()=>{
          setInternalState(
              Object.assign(
                  {}, internalState, {
                    progressVideo: video.current.currentTime * 100 / video.current.duration,
                    timeLeftFilm: video.current.duration - video.current.currentTime,
                  }));
        }}
        onPause={()=>{
          setInternalState(
              Object.assign(
                  {}, internalState, {
                    playFilm: false
                  }));
        }}
        onPlay={()=>{
          setInternalState(
              Object.assign(
                  {}, internalState, {
                    playFilm: true
                  }));
        }}
        className="player__video"
        poster={film.poster}/>

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
            <button onClick={playFilm ? ()=>{
              setInternalState(
                  Object.assign(
                      {}, internalState, {
                        playFilm: false
                      }));
            }
              : ()=>{
                setInternalState(
                    Object.assign(
                        {}, internalState, {
                          playFilm: true
                        }));
              }} type="button"
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

            <button onClick={(evt)=>{
              evt.preventDefault();
              video.current.requestFullscreen();
            }} type="button" className="player__full-screen">
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
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  film: propsForFilms,
  history: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

export default Player;
