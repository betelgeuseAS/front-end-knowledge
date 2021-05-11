import React, {useContext} from 'react';
import './Menu.sass';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer/Drawer";
import clsx from "clsx";
import {Box} from "@material-ui/core";
import PropTypes from "prop-types";
import {Localize} from "../utils/localize/Localize";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import DnsIcon from "@material-ui/icons/Dns";
import PlaceIcon from "@material-ui/icons/Place";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListAltIcon from '@material-ui/icons/ListAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReplyIcon from '@material-ui/icons/Reply';
import Context from "../utils/context/Context";

export default function Menu({onMenuHandler, menuOpen}) {
  const classes = useContext(Context)['classes'];

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

        <List>
          <ListSubheader inset>Main</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListSubheader inset>Diary</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <DnsIcon />
            </ListItemIcon>
            <ListItemText primary="Records" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="Places" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Actions" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListSubheader inset>Retrospective</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <ReplyIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Week Plan" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Earn" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

Localize.propTypes = {
  onHandleMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.bool
};

Localize.defaultProps = {
  onHandleMenu: () => {},
  openMenu: true
};
