import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={{padding: 25}} onPress={()=>{navigation.navigate('Login')}}>
        <Icon name="arrow-circle-left" size={60} color="#FFF" />
      </TouchableOpacity>
      

      <View style={styles.containerPrincipal}>
        <View style={styles.logo}>
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
            source={require('../assets/minicars-logo2.png')}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nome Completo</Text>
          <TextInput style={styles.input} placeholder='Nome'></TextInput>

          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.input} placeholder='E-mail'></TextInput>

          <Text style={styles.text}>Cidade</Text>
          <TextInput style={styles.input} placeholder='Cidade'></TextInput>

          <Text style={styles.text}>Estado</Text>
          <TextInput style={styles.input} placeholder='Estado'></TextInput>

          <Text style={styles.text}>Senha</Text>
          <TextInput style={styles.input} placeholder='Senha'></TextInput>

          <Text style={styles.text}>Confirme a senha</Text>
          <TextInput style={styles.input} placeholder='Confirme a senha'></TextInput>

          <TouchableOpacity style={styles.btnCadastro}>
            <Text style={styles.textBtn}>Registrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#093A3E',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
  },
  containerPrincipal:{
    flex: 1,
  },
  logo: {
    width: '50%',
    height: '13%',
    marginBottom: 50,
    alignSelf: 'center'
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 22,
    alignSelf: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 22,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '12%'
  },
  btnCadastro: {
    width: '30%',
    backgroundColor: '#97C8EB',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 25
  },
  textBtn: {
    fontSize: 22,
    color: '#093A3E',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})