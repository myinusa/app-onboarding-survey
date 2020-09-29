import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { history } from "./history";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import RootApp from "./App";
import App from "./components/App";
import Result from "./components/Result";
import One from "./components/questions/One";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store/reducers";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  // composeEnhancers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <BrowserRouter history={history}>
    <div>
      <Provider store={store}>
        {/* <Switch> */}
          <Route exact path="/" component={RootApp} />
          <Route path="/survey" component={App} />
          <Route path="/survey/1" component={One} />
          <Route path="/result" component={Result} />
          {/* <App /> */}
        {/* </Switch> */}
      </Provider>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
