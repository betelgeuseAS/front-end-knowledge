import React from 'react';
import './Date.sass';
import Typography from "@material-ui/core/Typography";
import MainTitle from '../../typography/main-title/MainTitle';
import moment from "moment";

export default function Date() {
  return (
    <>
      <MainTitle>Date</MainTitle>

      <Typography align="center" component="div">
        <Typography variant="subtitle2" component="div">{moment().format("dddd")}</Typography>
        <Typography variant="h4" component="div">{moment().format("MMMM")}</Typography>
        <Typography variant="h1" component="div" color="secondary">{moment().format("DD")}</Typography>
        <Typography variant="h6" component="div">{moment().format("YYYY")}</Typography>
      </Typography>
    </>
  );
}
