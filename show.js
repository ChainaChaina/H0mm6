import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Shower } from './showcase';
import { Header } from './header';
import { ShowInfo} from './showcards'




export default class App extends Component {
  render() {
    return (
        
    <View style={styles.container}>
        <Header></Header>
        <ScrollView>
      <View style={styles.container1}>
      <Shower></Shower>
  
      </View >
      <View style={styles.container2}>
       <ShowInfo> </ShowInfo>

      </View>
      </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
    container1:{
        minHeight: 350,
        backgroundColor: 'blue',
    }, 
    
    container2:{
        minHeight: 550,
        backgroundColor: 'rgb(189, 216, 222)',
        
    },
  
   
});






