import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import AreaMenu from '../../components/areaMenu.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/card.js'
export default function Home({ navigation }) {
    return (
        <View style={[styles.container, styles.containerTop]}>
            <AreaMenu title="Home" navigation={navigation} />

            <Text style={styles.title}>Olá, Fabio Martins</Text>

            <TouchableOpacity style={styles.btnFavorito}>
                <Icon name="heart" size={25} color="red" />
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Favoritos</Text>
                <Icon name="arrow-right" size={25} color="#000" />
            </TouchableOpacity>
            
            <Card navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#31353E',
        justifyContent: 'center'
    },
    containerTop: {
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btnFavorito: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: '#31353E',
        borderRadius: 10,
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 15,
        marginLeft: 25,
        alignSelf: 'flex-start'
    }
})