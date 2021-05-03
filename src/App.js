import React, {Component, useState} from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { Localize } from "./components/utils/localize/Localize";
import localization from "./components/utils/localize/localization";
import './App.sass';
import Box from '@material-ui/core/Box';
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import Menu from './components/menu/Menu';
import Bar from './components/bar/Bar';

// For Switch Theming
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [darkState, setDarkState] = useState(false);
  const [language, setLanguage] = useState('');
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const menuHandler = (mode) => {
    setMenuOpen(mode);
  };

  const setLanguageHandler = (language) => {
    localization.setLanguage(language);
    setLanguage(language);
    // localStorage.setItem('language', language);

    // localization.getLanguage();
    // localization.getInterfaceLanguage();

    // localization.formatString(localization.currentDate, { //to format the passed string replacing its placeholders with the other arguments strings
    //   month: localization.january,
    //   day: 12,
    //   year: 2018
    // });
    // localization.formatString(localization.onlyForMembers, <a href="http://login.com">{localization.login}</a>)
    // localization.formatString(localization.iAmText, <b>{localization.bold}</b>)

    setMomentLanguage(localization.getLanguage());
  };

  const setMomentLanguage = (language) => {
    //See https://momentjs.com/docs/#/customization/
    moment.locale(language, {
      months : localization.date.months_long,
      monthsShort : localization.date.months_short,
      monthsParseExact : true,
      weekdays : localization.date.weekdays_long,
      weekdaysShort : localization.date.weekdays_short,
      weekdaysMin : localization.date.weekdays_min,
      weekdaysParseExact : true,
      longDateFormat : localization.date.moment.longDateFormat,
      calendar : localization.date.moment.calendar,
      relativeTime : localization.date.moment.relativeTime,
      dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
      ordinal : function (number, token) {
        let b = number % 10;
        let output = (~~ (number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
        return number + output;
      },
      meridiemParse : /PM|AM/,
      isPM : function (input) {
        return input.charAt(0) === 'A';
      },
      // In case the meridiem units are not separated around 12, then implement
      // this function (look at locale/id.js for an example).
      // meridiemHour : function (hour, meridiem) {
      //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
      // },
      meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? localization.date.moment.pm : localization.date.moment.am;
      },
      week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // Used to determine first week of the year.
      }
    });
  };

  if (!language) {
    setLanguageHandler('en');
  }

  return(
    <ThemeProvider theme={darkTheme}>
      <Box component="div" className={classes.root}>
        <CssBaseline />

        <Bar
          onMenuHandler={(mode) => menuHandler(mode)}
          onThemeChangeHandler={() => handleThemeChange()}
          menuOpen={menuOpen}
          classes={classes}
        />

        <Menu
          onMenuHandler={(mode) => menuHandler(mode)}
          menuOpen={menuOpen}
          classes={classes}
        />

        <Dashboard
          classes={classes}
        />
      </Box>

      {/*<Localize onSetLanguage={(language) => setLanguageHandler(language)} />*/}
      {/*<div>{localization.language}</div>*/}
    </ThemeProvider>
  );
}

// import UserStore from './database/stores/UserStore';
// const readAll = () => {
//   UserStore.fetchAll()
//     .then(allUsers => {
//       console.log(allUsers);
//     });
// };
// const create = () => {
//   const data = {password: 'kek', name: 'test'};
//   if (UserStore.validateSchemas(data)) {
//     UserStore.insert(data)
//       .then(result => {
//         // update view
//         console.log('Created: ', result);
//       });
//   } else {
//     return false;
//   }
// };
// const removeAll = () => {
//   UserStore.removeAll().then(result => {
//     console.log('Removed Items: ', result);
//   });
// };
// const update = () => {
//   UserStore.update({_id: "XRs5Re0hhtahUSFD"}, {name: 'test3'}).then(result => {
//     console.log('Updated: ', result);
//   });
// };
