import React from 'react';
import './Menu.sass';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {diaryListItems, mainListItems} from "../ListItems";
import Drawer from "@material-ui/core/Drawer/Drawer";
import clsx from "clsx";
import {Box} from "@material-ui/core";
import PropTypes from "prop-types";
import {Localize} from "../utils/localize/Localize";

export default function Menu({onMenuHandler, menuOpen, classes}) {
  return (
    <>
      <Drawer
        variant="permanent"
        classes={{paper: clsx(classes.drawerPaper, !menuOpen && classes.drawerPaperClose)}}
        open={menuOpen}
      >
        <Box className={classes.toolbarIcon}>
          <IconButton onClick={() => onMenuHandler(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>{mainListItems}</List>

        <Divider />

        <List>{diaryListItems}</List>
      </Drawer>
    </>
  );
};

Localize.propTypes = {
  onHandleMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.bool,
  classes: PropTypes.object
};

Localize.defaultProps = {
  onHandleMenu: () => {},
  openMenu: true,
  classes: {}
};
