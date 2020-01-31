import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


export class Login extends Component {
  render() {
    return (
      <View style={styles.container3}>
        <Icon name="user" size={50}></Icon>
          <TextInput style={styles.input1}  maxLength={20} fontSize={25}/>            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  container3:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    minHeight: 50,
    marginTop: 50,
  },
  input1:{
    minWidth:200,
    borderColor:'black',
    borderWidth:3,
    borderRadius: 25,
    paddingLeft: 20,
  },
  text:{
    fontSize:32,
  }
    
});




//https://media.licdn.com/dms/image/C4D0BAQEc5qWxHKg86Q/company-logo_200_200/0?e=2159024400&v=beta&t=QvDwc0zLwwSauil4oTmjrUSqIdh_JXoj6wx_cPL6Kpo


