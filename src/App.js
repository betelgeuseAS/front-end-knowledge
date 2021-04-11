import React from 'react';

import Dashboard from "./components/dashboard/Dashboard";

import './App.sass';

function App() {
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

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;
