import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AreaMenu from '../../components/areaMenu'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <AreaMenu title="Perfil" navigation={navigation} />

            <View style={styles.imagem}>
                <Icon name="user" size={30} color='#000' />
            </View>
            <View style={styles.viewinfo}>
                <Text style={styles.userText}>Fabio Martins</Text>
                <Text style={[styles.userText, { fontSize: 22 }]}>fabiomartiins45@gmail.com</Text>
                <Text style={[styles.userText, { fontSize: 22 }]}>Lagarto-SE</Text>
            </View>

            <TouchableOpacity style={[styles.views, { backgroundColor: '#97C8EB', marginTop: 50 }]}>
                <Text style={[styles.textContador, { color: '#093A3E' }]}>editar cadastro</Text>
            </TouchableOpacity>

            <View style={[styles.views, { backgroundColor: '#093A3E' }]}>
                <Text style={styles.textContador}>número de carrinhos: 25</Text>
            </View>

            <TouchableOpacity style={[styles.views, { flexDirection: 'row' }]} onPress={()=>navigation.navigate('Information')}>
                <Icon name="info-circle" size={30} color="#093A3E" />
                <Text style={[styles.textContador, { color: '#093A3E', marginLeft: 25 }]}>informações sobre o app</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        marginTop: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    },
    userText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#093A3E'
    },
    views: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContador: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    viewinfo:{
        marginTop: 30,
        alignItems:'center'
    }
})