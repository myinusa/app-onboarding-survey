import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { history } from "./history";

import RootApp from "./App";
import App from "./components/App";
import Result from "./components/Result";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter history={history}>
      {/* <Provider store={store}> */}
        <Switch>
        <Route exact path="/" component={RootApp} />
        <Route path="/survey" component={App} />
        <Route path="/result" component={Result} />
        </Switch>
      {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
