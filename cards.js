import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

 export  class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
 <Image
          style={styles.image}
          source={{uri: this.props.source}}
        />

     <Text  style={styles.card}>{this.props.name}</Text>

    <Text style={styles.sub}> </Text>

    <View style={styles.subcontainer} >

    <Text> {this.props.sub}</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      
        minHeight: 150,
        borderRadius: 0,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 2,
    },
    card:{
      textAlign: "center",
      fontSize: 26,
      fontStyle:'italic',
      position:'relative',
      marginLeft: 120,
    },
    sub:{
      textAlign: "center",
     
    },
    subcontainer:{
      position:  'relative',
      marginLeft: 180,
     
    },
    image: {
      position: 'absolute',
      margin: 3,
      marginLeft:1,
      width:145,
      height:145,
      //justifyContent: 'flex-start' ver melhor sobre as justificações para resolver isso.
    }

});

