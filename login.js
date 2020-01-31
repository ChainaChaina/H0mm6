import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import {Login} from './logininput';
import { Password } from './passwordinput';
import { Logo } from './logologin';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '100%', zIndex:-9999, position: "absolute"}}
          source={{uri: 'https://i.imgur.com/a3o6JqS.png'}}
        />
        <View style={styles.container2}>
        <Logo></Logo>
        <Login></Login>
        <Password></Password>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container2:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin:100,
  }
   
});






