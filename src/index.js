import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./component/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDom.render(
    <Provider store={store}>
      <App films={films} reviews={reviews}/>
    </Provider>,
    document.querySelector(`#root`)
);
