import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./component/app/app";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";
import {fetchFilmList} from "./store/reducers/api-action";


const api = createAPI(() => store.dispatch());

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
)
);

store.dispatch(fetchFilmList());

ReactDom.render(
    <Provider store={store}>
      <App reviews={reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
