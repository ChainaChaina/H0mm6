import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';



export  class ShowInfo extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
        <Text style={styles.nome}>  - Zé Colmeia - </Text>
        </View>
        <View>         
            <View style={styles.container2}>
              <Text>Um ambiente bem divertido, quase uma republica de zoologia ou boiologia porque só tem animal dentro.
                De ajuda em jogos onlines a aulas de sinuca e economia, nos temos a melhor irmandade do Alegre.
              </Text>
            </View>
              <View style={styles.container1}>
            <Text>
            Quartos:
            </Text>
            <Text>
            Banheiros:
            </Text>
            <Text>
            Cozinhas:
            </Text>
            <Text>
            Eletros:
            </Text>
            <Text>
            Sabão?:
            </Text>
            <Text>
            MEmes?:
            </Text>
              </View>          
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  nome:{
    fontSize: 40,
  },
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-around",
    margin: 1,
    borderTopWidth: 2,

  },
  container2:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 3, 
    minHeight: 100,
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  container1:{
    flex: 1,
      justifyContent:'space-around',
      margin: 4,
      minHeight: 400,
  }

   
});






