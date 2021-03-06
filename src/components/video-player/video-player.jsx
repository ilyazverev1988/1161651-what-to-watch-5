import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidMount() {
    const {linkPreviewVideo, preview, volume} = this.props;
    const video = this._videoRef.current;
    video.src = linkPreviewVideo;
    video.poster = preview;
    video.muted = volume;
  }

  render() {
    return (
      <Fragment>
        <video ref={this._videoRef} width="280" height="175"/>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (!this.props.isActive) {
      const {linkPreviewVideo} = this.props;
      video.src = linkPreviewVideo;
    } else {
      video.play();
    }
  }
}

VideoPlayer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  linkPreviewVideo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  volume: PropTypes.bool.isRequired,
  nameFilm: PropTypes.string.isRequired
};
