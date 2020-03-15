import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import CardSpecific from "./pages/CardSpecific";
import About from "./pages/About";
import Contact from "./pages/Contact";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" exact component={About} />
        <Route path="/CardSpecific/:id" exact component={CardSpecific} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
