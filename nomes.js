import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet} from 'react-native';
import { Cards } from './cards';


export class Nomes extends Component {
  render() {
    return (
      <ScrollView style={styles.card}> 
        <Cards name = 'Cãozito' sub = 'A melhor republica de Alegre' source='https://abrilcasa.files.wordpress.com/2019/07/1-agra.jpg?quality=95&strip=info&w=1024&h=683'/> 
        <Cards name = 'Lan House' sub = 'A melhor republica de Alegre' source='https://www.plantapronta.com.br/projetos/140/01.jpg'/> 
        <Cards name = 'Violen' sub = 'A melhor republica de Alegre' source='https://www.tuacasa.com.br/wp-content/uploads/2019/05/fachadas-de-casas-simples-0.jpg'/> 
        <Cards name = 'Casa dos lanches' sub = 'A melhor republica de Alegre' source='https://www.casascondor.com.br/wp-content/uploads/2019/09/tramites-legais-para-a-construcao-de-uma-casa.jpg'/> 
        <Cards name = 'tcheca' sub = 'A melhor republica de Alegre' source='https://abrilcasa.files.wordpress.com/2019/07/casa-em-angra-projetada-pela-beta-arquitetura-_-foto-1.jpg'/> 
        <Cards name = 'vamo et' sub = 'A melhor republica de Alegre' source='https://images.adsttc.com/media/images/5d38/0a57/284d/d17b/f100/01dd/newsletter/FEATURED_IMAGE.jpg?1563953732'/> 
        <Cards name = 'vaca louca' sub = 'A melhor republica de Alegre' source='https://fotos.vivadecora.com.br/decoracao-projeto-de-casa-casa-com-piscina-revistavd-173621-proportional-height_cover_medium.jpg'/> 
        <Cards name = 'satins' sub = 'A melhor republica de Alegre' source='https://lojamor.vteximg.com.br/arquivos/ids/165711-400-400/009037-barraca-luna-4p-2.jpg?v=636524959122870000'/> 
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  card:{
      textAlign: "center",
      textAlignVertical: "center",
      minHeight: 150,
      marginBottom:30,
      
    
    }
    
});