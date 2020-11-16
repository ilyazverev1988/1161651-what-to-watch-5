import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe(`Should VideoPlayer render correctly`, () => {
  it(`VideoPlayer is active`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isActive={true}
            linkPreviewVideo={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
            nameFilm={`Bronson`}
            preview={`https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`}
            volume={true}
            isPlaying={false}
          />, {
            createNodeMock: () => {
              return {
                src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
                poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
                muted: true,
              };
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`VideoPlayer not active`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isActive={false}
            linkPreviewVideo={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
            nameFilm={`Bronson`}
            preview={`https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`}
            volume={true}
            isPlaying={false}
          />, {
            createNodeMock: () => {
              return {
                src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
                poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
                muted: true,
              };
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
