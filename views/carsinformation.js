import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AreaMenuBack from '../components/areaMenuBack'
export default function Carsinformation({ navigation }) {
    return (

        <View style={{ flex: 1 }}>
            <AreaMenuBack title="Carrinho"/>
            <Text>cars_information</Text>
        </View>
    )
}
