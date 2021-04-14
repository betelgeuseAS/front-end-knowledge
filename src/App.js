import React, { Component } from "react";

import Dashboard from "./components/dashboard/Dashboard";

import { Localize } from "./components/utils/localization/Localize";
import localization from "./components/utils/localization/localization";

import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ''
    };

    localization.setLanguage('uk');
  }

  setLanguage = (language) => {
    localization.setLanguage(language);
    this.setState({language});
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
      <div className="app">
        <Dashboard/>
        <Localize onSetLanguage={(language) => this.setLanguage(language)} />
        <div>{localization.language}</div>
      </div>
    );
  }
}

export default App;
