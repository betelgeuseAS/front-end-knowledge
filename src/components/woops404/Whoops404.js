import React from 'react';
import './Whoops404.sass';
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

export const Whoops404 = ({ location }) => {
  return (
    <>
      <Box>
        <h1>Resource not found at <code>'{ location.pathname }'</code></h1>
      </Box>
    </>
  );
};

Whoops404.propTypes = {
  location: PropTypes.object
};

Whoops404.defaultProps = {
  location: {},
};
