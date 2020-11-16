import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {fetchFilmList, checkAuth, fetchPromoFilm} from "./store/api-action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";
import {ActionCreator} from "./store/action";

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
)
);

Promise.all([
  store.dispatch(fetchFilmList()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchPromoFilm())
])
  .then(() => {
    ReactDom.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
