import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Image, Button} from 'react-native';
import { StyleSheet } from 'react-native';

export default function Filmes({filmes}){
    const baseUrlImg = "https://api.otaviolube.com";
    
    return(
        <View style={styles.container}>
        {filmes.length > 0 ? filmes.map(filme => (
        <View style={styles.innerContainer}key={filme.id}>
            <View style = {styles.viewIMG}>
            <Image source={{uri: `${baseUrlImg}${filme.attributes.poster.data.attributes.url}`}} style={styles.img}/>
        </View>  
        <View style={styles.viewData}>
            <Text style={styles.titulo}>{filme.attributes.titulo} </Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse} </Text>
            <Button style={styles.btn} color='#be29ec' title='Comprar Ingresso'></Button>
        </View>
        </View>
      )
      )
        : <Text>Carregando...</Text>
      }
      <StatusBar style="auto" />
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
   
    },
    innerContainer:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'flex-start',
        
    },
    viewData:{
        width: '70%',
        height: '90%',
        padding: 10,
        backgroundColor: 'white'
    },
    viewIMG:{
    backgroundColor: 'purple',
    width: '30%',    
    height: '100%'
    },
    titulo:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5
    },
    sinopse:{
        fontSize: 14,
        color: 'black',
        marginBottom: 5
    },
    img:{
        width: '100%',
        height: '100%',
        padding: 10
    },
    btn:{
        padding: 10,
    },
    container: {
      flex: 1,
      backgroundColor: '#0c0f0a',
      alignItems: 'center',
      justifyContent: 'center',
      }
})