import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NotFound from "./views/NotFound";
import Landing from "./views/Landing";
import { useStyles } from "./App.styles";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="relative">
        <Toolbar className={classes.title}>
          <Typography component="h1" variant="h5" color="inherit" noWrap>
            VOTING APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
