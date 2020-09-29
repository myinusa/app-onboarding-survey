import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootApp from "./App";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={RootApp} />
        <Route path="/quiz" component={App} />
        {/* <App /> */}
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
