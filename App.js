import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Nomes } from './nomes';
import { Header } from './header'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header></Header>
       <Nomes></Nomes>
      </View>
    );
  }
}





