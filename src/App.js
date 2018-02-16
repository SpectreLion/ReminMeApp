

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Screens
import IntroScreen from './screens/introscreen';
import TaskScreen from './screens/taskscreens';
import { StackNavigator } from 'react-navigation';

const ScreenStack = StackNavigator(
  {
  Home:{screen:IntroScreen},
  Task:{screen:TaskScreen}
});

export default class App extends Component{
  render(){
    return <ScreenStack/>;
  }
}
