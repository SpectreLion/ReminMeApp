

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Screens
import IntroScreen from './screens/introscreen';
import StackNavigator from 'react-navigation';

const ScreenStack =StackNavigator({
  Intro:{
    screen:IntroScreen
  },
  {
    initialRouteName: 'Intro',
  }
});

export default class App extends{
  render(){
    return <ScreenStack/>;
  }
}
