import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function areaMenu(props) {

    async function logout() {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return (
        <View style={styles.area__menu}>
            <Text style={styles.area__title}>{props.title}</Text>

            <TouchableOpacity style={styles.logout} onPress={() => logout()}>
                <Icon name="sign-out" size={30} color="#FFF"></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    area__menu: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#001011',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30
    },
    home__button: {
        textAlign: 'left'
    },
    area__title: {
        width: '80%',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },
    logout: {
        textAlign: 'right'
    },
})
