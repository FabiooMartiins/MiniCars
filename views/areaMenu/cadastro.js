import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import config from '../../config/config.json';
import AreaMenu from '../../components/areaMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({ navigation }) {
  const [imagem, setImagem] = useState(null);

  async function handleEscolherImagem() {
    const resultado = await ImagePicker.launchImageLibraryAsync();
    if (!resultado.cancelled) {
      setImagem(resultado.uri);
    }
  }

  async function handleEnviarImagem() {
    try {
      const formData = new FormData();
      formData.append('cars', {
        uri: imagem,
        type: 'image/jpeg', // ajuste o tipo de acordo com o formato da imagem
        name: 'imagem.jpg', // ajuste o nome de acordo com o nome da imagem
      });

      const { data } = await axios.post(`${config.urlRoot}imagem`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.error) {
        Alert.alert('Erro ao enviar imagem');
      } else {
        Alert.alert('Imagem enviada com sucesso!');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Erro ao enviar imagem');
    }
  }

  return (
    <View style={styles.container}>
      <AreaMenu title="Cadastro" />
      
        <View style={styles.areaImage}>
          <TouchableOpacity onPress={handleEscolherImagem} >
            {imagem ? (
              <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
            ) : <Icon name="camera" size={30} color='#000' />}
          </TouchableOpacity>
          <Button title="Enviar imagem" onPress={handleEnviarImagem} />
        </View>
<ScrollView>
        <View style={styles.areaInput}>
          <Text style={{ alignSelf: 'flex-start', marginLeft: '13%' }}>Fabricante</Text>
          <TextInput style={styles.input} />
          <Text style={{ alignSelf: 'flex-start', marginLeft: '13%' }}>Modelo</Text>
          <TextInput style={styles.input} />

          <View style={{ flexDirection: "row", width: '80%', justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text style={{ alignSelf: 'flex-start', marginLeft: '8%' }}>Ano</Text>
              <TextInput inputMode="numeric" style={[styles.input, { width: '100%' }]} />
            </View>

            <View style={{ width: '45%' }}>
              <Text style={{ alignSelf: 'flex-start', marginLeft: '8%' }}>Cor</Text>
              <TextInput style={[styles.input, { width: '100%' }]} />
            </View>
          </View>

          <Text style={{ alignSelf: 'flex-start', marginLeft: '13%', marginTop: 25 }}>Marca</Text>
          <TextInput style={styles.input} />
          <Text style={{ alignSelf: 'flex-start', marginLeft: '13%' }}>Data de Compra</Text>
          <TextInput style={styles.input} />

          <View style={{ flexDirection: "row", width: '80%', justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text style={{ alignSelf: 'flex-start', marginLeft: '8%' }}>Escala</Text>
              <TextInput inputMode="numeric" style={[styles.input, { width: '100%' }]} />
            </View>

            <View style={{ width: '45%' }}>
              <Text style={{ alignSelf: 'flex-start', marginLeft: '8%' }}>Preço</Text>
              <TextInput style={[styles.input, { width: '100%' }]} />
            </View>
          </View>

          <TouchableOpacity>
            <Text>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaImage: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    height: '30%'
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000'
  },
  areaInput: {
    width: '100%',
    alignItems: 'center',
  }
})