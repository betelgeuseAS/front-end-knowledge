import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "./MainTitle.sass";

export default function MainTitle({children}) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node
};

MainTitle.defaultProps = {
  children: '',
};
