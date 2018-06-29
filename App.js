import React from 'react';

import Home from './screens/Home';
import Chat from './screens/Chat';
import {Router, Scene,Stack} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="chat" component={Chat} title="Chat"/>
        </Stack>
      </Router>
    );
  }
}
