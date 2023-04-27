import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AreaMenuBack({ navigation, title }) {

    return (
        <View style={styles.area__menu}>
            <TouchableOpacity 
                style={styles.logout} 
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" size={25} color="#FFF"></Icon>
            </TouchableOpacity>

            <View style={styles.area__title}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 22}}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    area__menu: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#001011',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
        paddingTop: 40,
        paddingBottom: 10,
    },
    home__button: {
        textAlign: 'left'
    },
    area__title: {
        width: '80%',
        flexDirection: 'row-reverse'
    },
    logout: {
        textAlign: 'right'
    },
})
