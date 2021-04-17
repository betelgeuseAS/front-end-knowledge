import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import { Localize } from "./components/utils/localize/Localize";
import localization from "./components/utils/localize/localization";
import './App.sass';
import Box from '@material-ui/core/Box';
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ''
    };

    localization.setLanguage('en');
  }

  setLanguage = (language) => {
    localization.setLanguage(language);
    this.setState({language});
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

    this.setMomentLanguage(localization.getLanguage());
  };

  setMomentLanguage = (language) => {
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

  render() {
    return (
      <Box component="div" className="app">
        <Dashboard/>
        {/*<Localize onSetLanguage={(language) => this.setLanguage(language)} />*/}
        {/*<div>{localization.language}</div>*/}
      </Box>
    );
  }
}

export default App;
