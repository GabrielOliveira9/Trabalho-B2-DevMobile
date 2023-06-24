import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Filmes from '../../components/filme/index';

export default function MoviesPage() {
    let [filmes, setFilmes] = useState([]);
    const baseUrl = ' https://api.otaviolube.com/api/filmes?populate=*';
  
    useEffect(function(){
      fetch(baseUrl)
        .then(data => data.json())
        .then(objeto => {
          console.log(objeto);
          setFilmes(objeto.data);
        });
    }, []);
    
    return (
        <View style={styles.container}>
            <Filmes filmes={filmes}/>
            <StatusBar style="auto" />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0c0f0a',
    alignItems: 'center',
    justifyContent: 'center',
    },
});