import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Chart";
import Date from "./date/Date";
import clsx from "clsx";
import {Localize} from "../utils/localize/Localize";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";

export default function Dashboard({classes}) {
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Box component="main" className={classes.content}>
      <Box component="div" className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              {/*<Chart />*/}
              Statistic
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <Date />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Main
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Localize.propTypes = {
  classes: PropTypes.object
};

Localize.defaultProps = {
  classes: {}
};
