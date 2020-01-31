import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';



export class Logo extends Component {
  render() {
    return (
      <View style={styles.visu}>
         <Image
          style={styles.image}
          source={{uri:'http://assets.stickpng.com/thumbs/588a6758d06f6719692a2d22.png'}}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width:100,
        height:100,
    },
    visu:{
        alignItems:'center',
    }
   
});
