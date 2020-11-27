import React, {Fragment, createRef, useEffect} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {linkPreviewVideo, preview, volume, isActive} = props;
  let _videoRef = createRef();

  useEffect(()=> {
    const video = _videoRef.current;
    video.src = linkPreviewVideo;
    video.poster = preview;
    video.muted = volume;
  }, []);

  useEffect(()=> {
    const video = _videoRef.current;
    if (!isActive) {
      video.src = linkPreviewVideo;
    } else {
      video.play();
    }
  }, [isActive]);

  return (
    <Fragment>
      <video ref={_videoRef} width="280" height="175"/>
    </Fragment>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  linkPreviewVideo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  volume: PropTypes.bool.isRequired,
  nameFilm: PropTypes.string.isRequired
};

