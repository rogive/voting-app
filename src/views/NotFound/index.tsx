import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      Not Found
    </Grid>
  );
};

export default NotFound;
