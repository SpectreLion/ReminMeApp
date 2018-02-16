/*
 *TASK SCREEN
*/

import React from 'react';
import{
  View,
  Text,
  StyleSheet
}from 'react-native'

export default class taskscreen extends Component{
  render(){
    <View>
      <View style={styles.container}></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerContainer:{
    backgroundColor:'red',
    flex:1
  },
  userAvatar:{
    width: 130,
    height:130,
    borderRadius:65
  },
  pending



});
