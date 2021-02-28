import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Landing from "./views/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
