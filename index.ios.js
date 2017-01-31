import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import HomePage from './application/pages/HomePage';

export default class myListView extends Component {
  render() {
    return(
        <HomePage/>
    )
  }
}

AppRegistry.registerComponent('myListView', () => myListView);
