import { Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import AreaMenuBack from '../components/areaMenuBack'

export default function Information({ navigation }) {
  return (
    <View style={styles.container}>
      <AreaMenuBack navigation={navigation} title="Informações" />

      <View style={styles.areaBandeira}>
        <Image
          style={{ width: 200, height: 120, resizeMode: 'stretch' }}
          source={require('../assets/lagarto-flag.jpg')}
        />
        <Text>Lagarto - Sergipe - Brasil</Text>
      </View>
      
      <Text>Desenvolvido por</Text>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Martins Tecnologia e Inovação</Text>
      <Text>Abril 2023</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaBandeira:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  }
})