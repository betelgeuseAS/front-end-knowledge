import React, { useContext } from 'react';
import './Bar.sass';
import clsx from "clsx";
import PropTypes from "prop-types";
import {Localize} from "../utils/localize/Localize";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch/Switch";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar/AppBar";
import localization from "../utils/localize/localization";
import Context from '../utils/context/Context';

export default function Bar({onMenuHandler, onThemeChangeHandler, onSetLanguage, menuOpen, darkState}) {
  const classes = useContext(Context)['classes'];

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, menuOpen && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => onMenuHandler(true)}
          className={clsx(
            classes.menuButton,
            menuOpen && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Retrospective
          <strong>{localization.language}</strong>
        </Typography>

        <Localize onSetLanguage={(language) => onSetLanguage(language)} />

        <Switch checked={darkState} onChange={onThemeChangeHandler} />

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Localize.propTypes = {
  onHandleMenu: PropTypes.func.isRequired,
  onThemeChangeHandler: PropTypes.func.isRequired,
  onSetLanguage: PropTypes.func.isRequired,
  darkState: PropTypes.bool,
  openMenu: PropTypes.bool
};

Localize.defaultProps = {
  onHandleMenu: () => {},
  onThemeChangeHandler: () => {},
  onSetLanguage: () => {},
  darkState: false,
  openMenu: true
};
