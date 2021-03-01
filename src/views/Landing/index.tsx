import React from 'react'
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

const Landing = () => {
  const classes = useStyles();
  return(
    <Grid container component="main" className={classes.root}>
      Landing
    </Grid>
  )
}

export default Landing;