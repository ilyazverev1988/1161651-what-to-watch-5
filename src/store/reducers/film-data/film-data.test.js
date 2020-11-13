import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmData} from "./film-data";
import {ActionType} from "../../action";
import {fetchPromoFilm, fetchCommetsFilm, fetchFilmList} from "../../api-action";
import films from "../../../mocks/films";
import reviews from "../../../mocks/reviews";
import {returnFilmsWithChanges} from "../../../utils";

const api = createAPI(() => {});

const filmWithoutAdapter =
  {
    // eslint-disable-next-line camelcase
    background_color: `#73B39A`,
    // eslint-disable-next-line camelcase
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    id: 1,
    // eslint-disable-next-line camelcase
    is_favorite: false,
    name: `Bronson`,
    // eslint-disable-next-line camelcase
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    // eslint-disable-next-line camelcase
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    // eslint-disable-next-line camelcase
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.6,
    released: 2008,
    // eslint-disable-next-line camelcase
    run_time: 92,
    // eslint-disable-next-line camelcase
    scores_count: 109661,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    // eslint-disable-next-line camelcase
    video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  };

const filmWithAdapter =
  {
    backgroundColor: `#73B39A`,
    filmCover: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    descriptionFilm: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    producer: `Nicolas Winding Refn`,
    genre: `Action`,
    id: 1,
    isFavorite: false,
    nameFilm: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    linkPreviewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    commonScore: 3.6,
    releaseYear: 2008,
    duration: 92,
    numberOfVotes: 109661,
    cast: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    linkFullVideo: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  };

const filmPromo = {
  id: 1,
  backgroundColor: `#73B39A`,
  preview: `img/aviator.jpg`,
  nameFilm: `Aviator1`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  filmCover: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Thrillers`,
  releaseYear: 2014,
  descriptionFilm: `Friendship, metamorphosis, and adventure.`,
  commonScore: 8.9,
  numberOfVotes: 3,
  cast: [`Bill Murray`, `Jude Law`],
  producer: `Wes Andreson`,
  isFavorite: true,
  duration: 92,
  linkPreviewVideo: `https://cdn.videvo.net/videvo_files/converted/2018_07/preview/180607_A_064.mp429860.webm`,
  linkFullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Fai_Ming_Estate_roadblock_20200126.webm/Fai_Ming_Estate_roadblock_20200126.webm.360p.vp9.webm`
};

const filmPromoWithChanges = {
  id: 1,
  backgroundColor: `#73B39A`,
  preview: `img/aviator.jpg`,
  nameFilm: `Aviator1`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  filmCover: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Thrillers`,
  releaseYear: 2014,
  descriptionFilm: `Friendship, metamorphosis, and adventure.`,
  commonScore: 8.9,
  numberOfVotes: 3,
  cast: [`Bill Murray`, `Jude Law`],
  producer: `Wes Andreson`,
  isFavorite: false,
  duration: 92,
  linkPreviewVideo: `https://cdn.videvo.net/videvo_files/converted/2018_07/preview/180607_A_064.mp429860.webm`,
  linkFullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1f/Fai_Ming_Estate_roadblock_20200126.webm/Fai_Ming_Estate_roadblock_20200126.webm.360p.vp9.webm`
};

const filmsWithChange = returnFilmsWithChanges(films, filmPromo);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmData(void 0, {})).toEqual({
    films: [],
    comments: [],
    filmPromo: {},
  });
});

it(`Reducer should update films by load films`, () => {
  expect(filmData({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(filmData({
    comments: [],
  }, {
    type: ActionType.LOAD_COMMENTS_OF_FILM,
    payload: reviews,
  })).toEqual({
    comments: reviews,
  });
});

it(`Reducer should update promo film by load promo film`, () => {
  expect(filmData({
    filmPromo: {},
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: filmPromo,
  })).toEqual({
    filmPromo,
  });
});

it(`Reducer should update films after change films and load films`, () => {
  expect(filmData({
    films,
  }, {
    type: ActionType.UPDATE_DATA_FILM,
    payload: filmsWithChange,
  })).toEqual({
    films: filmsWithChange,
  });
});

it(`Reducer should update promo film after change promo film and load promo film`, () => {
  expect(filmData({
    filmPromo,
  }, {
    type: ActionType.UPDATE_DATA_PROMO_FILM,
    payload: filmPromoWithChanges,
  })).toEqual({
    filmPromo: filmPromoWithChanges,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock
      .onGet(`/films`)
      .reply(200, [filmWithoutAdapter]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [filmWithAdapter],
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommetsFilm();
    const commentsUri = `/comments`;
    const url = new RegExp(`${commentsUri}/*`);
    apiMock
      .onGet(url)
      .reply(200, reviews);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_OF_FILM,
          payload: reviews,
        });
      });
  });
});

it(`Should make a correct API call to /films/promo`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const promoFilmLoader = fetchPromoFilm();

  apiMock
    .onGet(`/films/promo`)
    .reply(200, filmWithoutAdapter);

  return promoFilmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: filmWithAdapter,
      });
    });
});

