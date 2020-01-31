import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export class Header extends Component {
  render() {
    return (
      <View>
       <Text style={styles.Header}>  <Icon name="home" size={50} color="rgb(0, 51, 102)" />/Hommy/</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Header:{
        minHeight: 30,
        margin: 0,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 48,
        fontFamily: "monospace",
        backgroundColor: '#3290a6',
        color: "rgb(0, 51, 102)",
    }
});

